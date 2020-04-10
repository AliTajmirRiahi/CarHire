using System.Linq;
using System.Security.Claims;
using Application.Infrastructure.Interfaces;
using Microsoft.AspNetCore.Http;

namespace Application.Infrastructure.Security
{
    public class UserAccessor : IUserAccessor
    {
        private readonly IHttpContextAccessor _contextAccessor;
        public UserAccessor(IHttpContextAccessor contextAccessor)
        {
            _contextAccessor = contextAccessor;
        }

        public string GetCurrentUsername()
        {
            var username = _contextAccessor.HttpContext
            .User?.Claims?
            .FirstOrDefault(p => p.Type == ClaimTypes.NameIdentifier)?
            .Value;

            return username;
        }
    }
}