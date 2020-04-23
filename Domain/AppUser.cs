using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;
namespace Domain
{
    public class AppUser : IdentityUser
    {
        public int? FounderId { get; set; }
        public virtual Founder Founder { get; set; }
    }
}