using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;
using FluentValidation;
using Microsoft.AspNetCore.Identity;
using Application.Infrastructure.Interfaces;
using Nelibur.ObjectMapper;

namespace Application.User
{
    public class CurrentUser
    {
        public class Query : IRequest<User> { }
        public class QueryValidator : AbstractValidator<Query>
        {
            public QueryValidator()
            {

                // RuleFor(p => p.).NotEmpty();
            }
        }

        public class Handler : IRequestHandler<Query, User>
        {
            private readonly UserManager<AppUser> _userManager;
            private readonly IJwtGenerator _jwtGenerator;
            private readonly IUserAccessor _userAccessor;
            public Handler(UserManager<AppUser> userManager, IJwtGenerator jwtGenerator, IUserAccessor userAccessor)
            {
                _userAccessor = userAccessor;
                _jwtGenerator = jwtGenerator;
                _userManager = userManager;
                MapperConfig.Config();
            }

            public async Task<User> Handle(Query request, CancellationToken cancellationToken)
            {
                var appuser = await _userManager.FindByNameAsync(_userAccessor.GetCurrentUsername());
                var user = TinyMapper.Map<User>(appuser);
                user.Token = _jwtGenerator.CreateToken(appuser);
                return user;
            }
        }
    }
}