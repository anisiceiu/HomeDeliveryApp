using HomeDelivery.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace HomeDelivery.Infrastructure
{
    public class AppDbContext : DbContext
    {
        public DbSet<User> Users => Set<User>();

        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options) { }
    }

}
