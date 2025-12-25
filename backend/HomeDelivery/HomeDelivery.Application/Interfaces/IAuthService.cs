using HomeDelivery.Application.DTOs;
using HomeDelivery.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeDelivery.Application.Interfaces
{
    public interface IAuthService
    {
        Task RegisterAsync(RegisterDto dto);
        Task<AuthResponse> LoginAsync(LoginDto dto);
        Task<List<User>> GetUsers();
    }
}
