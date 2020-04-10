using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Identity;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context, UserManager<AppUser> userManager)
        {
            if (!userManager.Users.Any())
            {
                var users = new List<AppUser>{
                    new AppUser
                    {
                        DisplayName = "Taj",
                        UserName = "taj",
                        Email = "taj@gmail.com"
                    },
                    new AppUser
                    {
                        DisplayName = "Riahi",
                        UserName = "riahi",
                        Email = "riahi@gmail.com"
                    }
                };
                foreach (var user in users)
                {
                    await userManager.CreateAsync(user, "Pa$$w0rd");
                }
            }
        }
    }
}