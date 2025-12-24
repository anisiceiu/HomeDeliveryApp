using HomeDelivery.Application.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeDelivery.Application.Interfaces
{
    public interface IAddressService
    {
        Task<AddressDto> CreateAsync(AddressDto dto);
        Task<AddressDto?> GetByIdAsync(int id);
        Task<List<AddressDto>> GetAllAsync();
        Task UpdateAsync(int id, AddressDto dto);
        Task DeleteAsync(int id);
    }
}
