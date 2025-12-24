using HomeDelivery.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeDelivery.Application.Interfaces
{
    public interface IAddressRepository
    {
        Task<Address?> GetByIdAsync(int id);
        Task<List<Address>> GetAllAsync();
        Task AddAsync(Address address);
        Task UpdateAsync(Address address);
        Task DeleteAsync(int id);
    }
}
