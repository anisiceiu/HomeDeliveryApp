using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeDelivery.Domain.Entities
{
    public class Order
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int StoreId { get; set; }
        public int? DeliveryManId { get; set; }
        public int AddressId { get; set; }
        public decimal TotalAmount { get; set; }
        public decimal DeliveryCharge { get; set; }
        public OrderStatus Status { get; set; } = OrderStatus.Placed;
        public PaymentMethod PaymentMethod { get; set; } = PaymentMethod.CashOnDelivery;
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        public User User { get; set; } = null!;
        public User? DeliveryMan { get; set; }
        public Store Store { get; set; } = null!;
        public Address Address { get; set; } = null!;
        public ICollection<OrderItem> OrderItems { get; set; } = new List<OrderItem>();
    }
}
