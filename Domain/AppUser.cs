using Microsoft.AspNetCore.Identity;
using System;
namespace Domain
{
    public class AppUser : IdentityUser
    {
        public virtual Founder Founder { get; set; }
    }
}