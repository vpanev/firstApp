
using EcommerceApp.Data.Models;
using EcommerceApp.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace EcommerceApp.Data
{
    public class ClothAppDbContext : IdentityDbContext<User>
    {
        public ClothAppDbContext(DbContextOptions<ClothAppDbContext> options):base(options)
        {
            
        }
        public DbSet<Cloth> Clothes { get; set; }
    }
}
