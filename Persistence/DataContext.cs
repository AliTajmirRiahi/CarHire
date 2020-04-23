using System;
using System.Linq;
using System.Reflection;
using Domain;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : IdentityDbContext<AppUser>
    {
        public DataContext(DbContextOptions options) : base(options)
        {

        }
        public DbSet<BaseInfo> BasiesInfo { get; set; }
        public DbSet<Bank> Banks { get; set; }
        public DbSet<InsuranceType> InsuranceTypes { get; set; }
        public DbSet<InsuranceCompany> InsuranceCompanies { get; set; }
        public DbSet<Founder> Founders { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            var asm = Assembly.GetExecutingAssembly();
            LoadEntityConfigurations(asm, modelBuilder, "Persistence.Configurations");

        }
        void LoadEntityConfigurations(Assembly asm, ModelBuilder modelBuilder, string nameSpace)
        {
            var configurations = asm.GetTypes()
                                .Where(type => type.BaseType != null &&
                                    type.Namespace == "Persistence.Configurations" &&
                                    type.GetInterfaces().Any(In => In.Name == typeof(IEntityTypeConfiguration<>).Name))
                                .ToList();

            configurations.ForEach(type =>
            {
                dynamic instance = Activator.CreateInstance(type);
                modelBuilder.ApplyConfiguration(instance);
            });
        }
    }

}
