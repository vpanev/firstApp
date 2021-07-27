using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace EcommerceApp.Models
{
    public class ClothAppDbContext : DbContext
    {
        public ClothAppDbContext(DbContextOptions<ClothAppDbContext> options):base(options)
        {
            
        }
        public DbSet<Cloth> Clothes { get; set; }
    }
}
