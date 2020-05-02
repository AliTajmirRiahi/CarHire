using Microsoft.AspNetCore.Identity;
using System;
namespace Domain
{
    public class AppUser : IdentityUser
    {
        public string aFirstName { get; set; }
        public string aLastName { get; set; }
        public virtual Founder Founder { get; set; }
        public Guid? PhotoId { get; set; }
        public virtual Photo Photo { get; set; }
    }
}