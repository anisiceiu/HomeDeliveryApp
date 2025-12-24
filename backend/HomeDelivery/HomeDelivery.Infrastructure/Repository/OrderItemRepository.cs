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
    public class OrderItemRepository : IOrderItemRepository
    {
        private readonly AppDbContext _context;

        public OrderItemRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<OrderItem?> GetByIdAsync(int id)
            => await _context.OrderItems.FindAsync(id);

        public async Task<List<OrderItem>> GetAllAsync()
            => await _context.OrderItems.ToListAsync();

        public async Task AddAsync(OrderItem orderItem)
        {
            _context.OrderItems.Add(orderItem);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateAsync(OrderItem orderItem)
        {
            _context.OrderItems.Update(orderItem);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var item = await GetByIdAsync(id);
            if (item == null) return;

            _context.OrderItems.Remove(item);
            await _context.SaveChangesAsync();
        }
    }

}
