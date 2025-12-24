using AutoMapper;
using HomeDelivery.Application.DTOs;
using HomeDelivery.Application.Interfaces;
using HomeDelivery.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeDelivery.Application.Services
{
    public class AddressService : IAddressService
    {
        private readonly IAddressRepository _repository;
        private readonly IMapper _mapper;

        public AddressService(
            IAddressRepository repository,
            IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public async Task<AddressDto> CreateAsync(AddressDto dto)
        {
            var address = _mapper.Map<Address>(dto);

            await _repository.AddAsync(address);

            return _mapper.Map<AddressDto>(address);
        }

        public async Task<AddressDto?> GetByIdAsync(int id)
        {
            var address = await _repository.GetByIdAsync(id);
            return address == null ? null : _mapper.Map<AddressDto>(address);
        }

        public async Task<List<AddressDto>> GetAllAsync()
        {
            var addresses = await _repository.GetAllAsync();
            return _mapper.Map<List<AddressDto>>(addresses);
        }

        public async Task UpdateAsync(int id, AddressDto dto)
        {
            var address = await _repository.GetByIdAsync(id);
            if (address == null)
                throw new Exception("Address not found");

            _mapper.Map(dto, address);

            await _repository.UpdateAsync(address);
        }

        public async Task DeleteAsync(int id)
        {
            await _repository.DeleteAsync(id);
        }
    }

}
