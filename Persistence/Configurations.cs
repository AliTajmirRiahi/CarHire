using Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Persistence.Configurations
{
    public class BaseInfoConfig : IEntityTypeConfiguration<BaseInfo>
    {
        public void Configure(EntityTypeBuilder<BaseInfo> builder)
        {

        }
    }

    public class AppUserConfig : IEntityTypeConfiguration<AppUser>
    {
        public void Configure(EntityTypeBuilder<AppUser> builder)
        {
        }
    }
}