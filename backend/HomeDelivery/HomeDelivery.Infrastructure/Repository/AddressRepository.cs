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
    public class AddressRepository : IAddressRepository
    {
        private readonly AppDbContext _context;

        public AddressRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<Address?> GetByIdAsync(int id)
            => await _context.Addresses.FindAsync(id);

        public async Task<List<Address>> GetAllAsync()
            => await _context.Addresses.ToListAsync();

        public async Task AddAsync(Address address)
        {
            _context.Addresses.Add(address);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateAsync(Address address)
        {
            _context.Addresses.Update(address);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var address = await GetByIdAsync(id);
            if (address == null) return;

            _context.Addresses.Remove(address);
            await _context.SaveChangesAsync();
        }
    }

}
