using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeDelivery.Domain
{
    public enum UserRole
    {
        Admin,
        Customer,
        DeliveryMan
    }

    public enum OrderStatus
    {
        Placed,
        Accepted,
        Picked,
        Delivered,
        Cancelled
    }

    public enum PaymentMethod
    {
        CashOnDelivery
    }
}
