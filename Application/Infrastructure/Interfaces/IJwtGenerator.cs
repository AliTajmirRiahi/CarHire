using Domain;

namespace Application.Infrastructure.Interfaces
{
    public interface IJwtGenerator
    {
        string CreateToken(AppUser user);
    }
}