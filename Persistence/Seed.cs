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

            AddBanks(context);

            await context.SaveChangesAsync();
        }

        private static void AddBanks(DataContext context)
        {
            #region Banks
            if (!context.Banks.Any())
            {
                var banks = new List<Bank>(){
                    new Bank() { Value ="ملّی"},
                    new Bank() { Value ="اقتصاد نوین"},
                    new Bank() { Value ="قرض‌الحسنه مهر"},
                    new Bank() { Value ="سپه"},
                    new Bank() { Value ="پارسیان"},
                    new Bank() { Value ="قرض‌الحسنه رسالت"},
                    new Bank() { Value ="صنعت و معدن"},
                    new Bank() { Value ="کارآفرین"},
                    new Bank() { Value ="کشاورزی"},
                    new Bank() { Value ="سامان"},
                    new Bank() { Value ="مسکن"},
                    new Bank() { Value ="سینا"},
                    new Bank() { Value ="توسعه صادرات"},
                    new Bank() { Value ="خاور میانه"},
                    new Bank() { Value ="توسعه تعاون"},
                    new Bank() { Value ="شهر"},
                    new Bank() { Value ="پست بانک"},
                    new Bank() { Value ="دی"} ,
                    new Bank() { Value ="صادرات"},
                    new Bank() { Value ="ملت"},
                    new Bank() { Value ="تجارت"},
                    new Bank() { Value ="رفاه"},
                    new Bank() { Value ="حکمت ایرانیان"} ,
                    new Bank() { Value ="گردشگری"},
                    new Bank() { Value ="ایران زمین"},
                    new Bank() { Value ="قوامین"},
                    new Bank() { Value ="انصار"},
                    new Bank() { Value ="سرمایه"},
                    new Bank() { Value ="پاسارگاد"},
                    new Bank() { Value ="بانک مشترک ایران-ونزوئلا"},
                };
                foreach (var bank in banks)
                {
                    context.Banks.Add(bank);
                }
            }
            #endregion
        }
    }
}