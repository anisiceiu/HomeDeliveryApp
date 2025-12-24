using HomeDelivery.Application.Interfaces;
using HomeDelivery.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeDelivery.Infrastructure.Repository
{
    public class StoreRepository : IStoreRepository
    {
        private readonly AppDbContext _context;

        public StoreRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<Store?> GetByIdAsync(int id)
            => await _context.Stores.FindAsync(id);

        public async Task<List<Store>> GetAllAsync()
            => await _context.Stores.ToListAsync();

        public async Task AddAsync(Store store)
        {
            _context.Stores.Add(store);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateAsync(Store store)
        {
            _context.Stores.Update(store);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var store = await GetByIdAsync(id);
            if (store == null) return;

            _context.Stores.Remove(store);
            await _context.SaveChangesAsync();
        }
    }

}
