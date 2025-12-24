using AutoMapper;
using HomeDelivery.Application.DTOs;
using HomeDelivery.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeDelivery.Application.Profiles
{
    public class MapperProfile : Profile
    {
        public MapperProfile()
        {
            CreateMap<Address, AddressDto>().ReverseMap();
            //CreateMap<CreateAddressDto, Address>();
            //CreateMap<UpdateAddressDto, Address>();
        }
    }
}
