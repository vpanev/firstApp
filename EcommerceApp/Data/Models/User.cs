
using Microsoft.AspNetCore.Identity;

namespace EcommerceApp.Data.Models
{
    public class User : IdentityUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string UserType { get; set; }
    }
}
