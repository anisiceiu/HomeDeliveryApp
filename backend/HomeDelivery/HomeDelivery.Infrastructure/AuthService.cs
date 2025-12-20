using HomeDelivery.Application.DTOs;
using HomeDelivery.Application.Interfaces;
using HomeDelivery.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeDelivery.Infrastructure
{
    public class AuthService : IAuthService
    {
        private readonly IUserRepository _users;
        private readonly IJwtService _jwt;

        public AuthService(IUserRepository users, IJwtService jwt)
        {
            _users = users;
            _jwt = jwt;
        }

        public async Task RegisterAsync(RegisterDto dto)
        {
            if (await _users.GetByEmailAsync(dto.Email) != null)
                throw new Exception("Email already exists");

            var user = new User
            {
                FullName = dto.FullName,
                Email = dto.Email,
                PasswordHash = BCrypt.Net.BCrypt.HashPassword(dto.Password),
                Role = dto.Role
            };

            await _users.AddAsync(user);
        }

        public async Task<AuthResponse> LoginAsync(LoginDto dto)
        {
            var user = await _users.GetByEmailAsync(dto.Email);

            if (user == null || !BCrypt.Net.BCrypt.Verify(dto.Password, user.PasswordHash))
                throw new UnauthorizedAccessException();

            return new AuthResponse(
                _jwt.GenerateToken(user),
                user.FullName,
                user.Role
            );
        }
    }

}
