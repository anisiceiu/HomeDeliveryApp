using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeDelivery.Application.DTOs
{
    public record LoginDto(string Email, string Password);
    public record RegisterDto(string FullName, string Email, string Password, string Role);
    public record AuthResponse(string Token, string FullName, string Role);
}
