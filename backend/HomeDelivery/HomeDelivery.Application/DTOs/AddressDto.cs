using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeDelivery.Application.DTOs
{
    public class AddressDto
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string AddressLine { get; set; } = null!;
        public string City { get; set; } = null!;
        public string Area { get; set; } = null!;
        public double Latitude { get; set; }
        public double Longitude { get; set; }
        public bool IsDefault { get; set; }
    }
}
