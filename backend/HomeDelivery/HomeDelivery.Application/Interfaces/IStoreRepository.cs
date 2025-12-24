using HomeDelivery.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeDelivery.Application.Interfaces
{
    public interface IStoreRepository
    {
        Task<Store?> GetByIdAsync(int id);
        Task<List<Store>> GetAllAsync();
        Task AddAsync(Store store);
        Task UpdateAsync(Store store);
        Task DeleteAsync(int id);
    }
}
