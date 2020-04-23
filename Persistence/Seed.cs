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
            // if (!userManager.Users.Any())
            // {
            //     var users = new List<AppUser>{
            //         new AppUser
            //         {
            //             DisplayName = "Taj",
            //             UserName = "taj",
            //             Email = "taj@gmail.com"
            //         },
            //         new AppUser
            //         {
            //             DisplayName = "Riahi",
            //             UserName = "riahi",
            //             Email = "riahi@gmail.com"
            //         }
            //     };
            //     foreach (var user in users)
            //     {
            //         await userManager.CreateAsync(user, "Pa$$w0rd");
            //     }
            // }

            AddBanks(context);

            await context.SaveChangesAsync();
        }

        private static void AddBanks(DataContext context)
        {
            #region Banks
            if (!context.Banks.Any())
            {
                var Objects = new List<Bank>(){
                    new Bank() { CanDelete = false , Value ="ملّی"},
                    new Bank() { CanDelete = false , Value ="اقتصاد نوین"},
                    new Bank() { CanDelete = false , Value ="قرض‌الحسنه مهر"},
                    new Bank() { CanDelete = false , Value ="سپه"},
                    new Bank() { CanDelete = false , Value ="پارسیان"},
                    new Bank() { CanDelete = false , Value ="قرض‌الحسنه رسالت"},
                    new Bank() { CanDelete = false , Value ="صنعت و معدن"},
                    new Bank() { CanDelete = false , Value ="کارآفرین"},
                    new Bank() { CanDelete = false , Value ="کشاورزی"},
                    new Bank() { CanDelete = false , Value ="سامان"},
                    new Bank() { CanDelete = false , Value ="مسکن"},
                    new Bank() { CanDelete = false , Value ="سینا"},
                    new Bank() { CanDelete = false , Value ="توسعه صادرات"},
                    new Bank() { CanDelete = false , Value ="خاور میانه"},
                    new Bank() { CanDelete = false , Value ="توسعه تعاون"},
                    new Bank() { CanDelete = false , Value ="شهر"},
                    new Bank() { CanDelete = false , Value ="پست بانک"},
                    new Bank() { CanDelete = false , Value ="دی"} ,
                    new Bank() { CanDelete = false , Value ="صادرات"},
                    new Bank() { CanDelete = false , Value ="ملت"},
                    new Bank() { CanDelete = false , Value ="تجارت"},
                    new Bank() { CanDelete = false , Value ="رفاه"},
                    new Bank() { CanDelete = false , Value ="حکمت ایرانیان"} ,
                    new Bank() { CanDelete = false , Value ="گردشگری"},
                    new Bank() { CanDelete = false , Value ="ایران زمین"},
                    new Bank() { CanDelete = false , Value ="قوامین"},
                    new Bank() { CanDelete = false , Value ="انصار"},
                    new Bank() { CanDelete = false , Value ="سرمایه"},
                    new Bank() { CanDelete = false , Value ="پاسارگاد"},
                    new Bank() { CanDelete = false , Value ="بانک مشترک ایران-ونزوئلا"},
                };
                foreach (var Obj in Objects)
                {
                    context.BasiesInfo.Add(Obj);
                }
            }
            #endregion
            #region InsuranceType
            if (!context.InsuranceTypes.Any())
            {
                var Objects = new List<InsuranceType>(){
                    new InsuranceType() {CanDelete=false, Value ="شخص ثالث"},
                    new InsuranceType() {CanDelete=false, Value ="بدنه"},
                };
                foreach (var obj in Objects)
                {
                    context.BasiesInfo.Add(obj);
                }
            }
            #endregion
            #region InsuranceCompany
            if (!context.InsuranceCompanies.Any())
            {
                var Objects = new List<InsuranceCompany>(){
                    new InsuranceCompany() { CanDelete = false , Value = "آرمان"},
                    new InsuranceCompany(){CanDelete=false , Value ="آسماری"},
                    new InsuranceCompany(){CanDelete=false , Value ="آسیا"},
                    new InsuranceCompany(){CanDelete=false , Value ="البرز"},
                    new InsuranceCompany(){CanDelete=false , Value ="امید"},
                    new InsuranceCompany(){CanDelete=false , Value ="ایران"},
                    new InsuranceCompany(){CanDelete=false , Value ="ایران معین"},
                    new InsuranceCompany(){CanDelete=false , Value ="پارسیان"},
                    new InsuranceCompany(){CanDelete=false , Value ="پاسارگاد"},
                    new InsuranceCompany(){CanDelete=false , Value ="تجارت نو"},
                    new InsuranceCompany(){CanDelete=false , Value ="خاورمیانه"},
                    new InsuranceCompany(){CanDelete=false , Value ="تعاون"},
                    new InsuranceCompany(){CanDelete=false , Value ="توسعه"},
                    new InsuranceCompany(){CanDelete=false , Value ="حافظ"},
                    new InsuranceCompany(){CanDelete=false , Value ="دانا"},
                    new InsuranceCompany(){CanDelete=false , Value ="دی"},
                    new InsuranceCompany(){CanDelete=false , Value ="رازی"},
                    new InsuranceCompany(){CanDelete=false , Value ="سامان"},
                    new InsuranceCompany(){CanDelete=false , Value ="سرمد"},
                    new InsuranceCompany(){CanDelete=false , Value ="سینا"},
                    new InsuranceCompany(){CanDelete=false , Value ="کارآفرین"},
                    new InsuranceCompany(){CanDelete=false , Value ="کوثر"},
                    new InsuranceCompany(){CanDelete=false , Value ="ما"},
                    new InsuranceCompany(){CanDelete=false , Value ="معلم"},
                    new InsuranceCompany(){CanDelete=false , Value ="ملت"},
                    new InsuranceCompany(){CanDelete=false , Value ="میهن"},
                    new InsuranceCompany(){CanDelete=false , Value ="نوین"},
                };
                foreach (var obj in Objects)
                {
                    context.BasiesInfo.Add(obj);
                }
            }
            #endregion

        }
    }
}