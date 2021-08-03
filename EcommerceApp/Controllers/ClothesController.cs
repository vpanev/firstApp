
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EcommerceApp.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using EcommerceApp.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;

namespace EcommerceApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClothesController : ControllerBase
    {
        private readonly ClothAppDbContext _context;
        private readonly IWebHostEnvironment _env;

        public ClothesController(ClothAppDbContext context, IWebHostEnvironment env)
        {
            _context = context;
            _env = env;
        }

        // GET: api/Clothes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Cloth>>> GetClothes()
        {
            return await _context.Clothes.ToListAsync();
        }

        // GET: api/Clothes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Cloth>> GetCloth(int id)
        {
            var cloth = await _context.Clothes.FindAsync(id);

            if (cloth == null)
            {
                return NotFound();
            }

            return cloth;
        }

        // PUT: api/Clothes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCloth(int id, Cloth cloth)
        {
            
            if (id != cloth.ClothId)
            {
                return BadRequest();
            }

            _context.Entry(cloth).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ClothExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Clothes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        [Authorize]
        public async Task<ActionResult<Cloth>> PostCloth(Cloth cloth)
        {
            _context.Clothes.Add(cloth);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCloth", new { id = cloth.ClothId }, cloth);
        }

        // DELETE: api/Clothes/5
        [HttpDelete("{id}")]
        [Authorize]
        public async Task<IActionResult> DeleteCloth(int id)
        {
            var cloth = await _context.Clothes.FindAsync(id);
            if (cloth == null)
            {
                return NotFound();
            }

            _context.Clothes.Remove(cloth);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        
        private bool ClothExists(int id)
        {
            return _context.Clothes.Any(e => e.ClothId == id);
        }


    }
}
