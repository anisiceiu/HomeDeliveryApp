using HomeDelivery.Application.DTOs;
using HomeDelivery.Application.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HomeDelivery.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AddressController : ControllerBase
    {
        private readonly IAddressService _addressService;

        public AddressController(IAddressService addressService)
        {
            _addressService = addressService;
        }

        // POST: api/address
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] AddressDto dto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var result = await _addressService.CreateAsync(dto);
            return CreatedAtAction(nameof(GetById), new { id = result.Id }, result);
        }

        // GET: api/address/{id}
        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetById(int id)
        {
            var address = await _addressService.GetByIdAsync(id);
            if (address == null)
                return NotFound();

            return Ok(address);
        }

        // GET: api/address
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var addresses = await _addressService.GetAllAsync();
            return Ok(addresses);
        }

        // PUT: api/address/{id}
        [HttpPut("{id:int}")]
        public async Task<IActionResult> Update(int id, [FromBody] AddressDto dto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            await _addressService.UpdateAsync(id, dto);
            return NoContent();
        }

        // DELETE: api/address/{id}
        [HttpDelete("{id:int}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _addressService.DeleteAsync(id);
            return NoContent();
        }
    }
}
