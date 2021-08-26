
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EcommerceApp.Models
{
    public class Cloth
    {
        [Key]
        public int ClothId { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        [Required]
        public string ClothName { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        [Required]
        public string ClothBrand { get; set; }

        [Column(TypeName = "nvarchar(5)")]
        [Required]
        public string ClothSize { get; set; }

        [Column(TypeName = "nvarchar(20)")]
        [Required]
        public string ClothType { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string ClothPicture { get; set; }

        [Column(TypeName = "decimal(5,1)")]
        [Required]
        public decimal ClothPrice { get; set; }
        
    }
}
