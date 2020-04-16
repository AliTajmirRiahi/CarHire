using System;
using System.Collections.Generic;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
using Application.Infrastructure.Interfaces;
using Domain;
using FluentValidation;
using MediatR;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Persistence;
namespace Application.User
{
    public class Login
    {
        public class Query : IRequest<User>
        {
            public string EmailOrPhoneNumber { get; set; }
            public string Password { get; set; }
        }
        public class QueryValidator : AbstractValidator<Query>
        {
            public QueryValidator()
            {
                RuleFor(p => p.EmailOrPhoneNumber).NotEmpty().WithMessage("موبایل یا ایمیل را وارد کنید");
                RuleFor(p => p.Password).NotEmpty().WithMessage("کلمه عبور را وارد کنید");
            }
        }
        public class Handler : IRequestHandler<Query, User>
        {
            private readonly UserManager<AppUser> _userManager;
            private readonly SignInManager<AppUser> _signInManager;
            private readonly IJwtGenerator _jwtGenerator;
            public Handler(UserManager<AppUser> userManager, SignInManager<AppUser> signInManager, IJwtGenerator jwtGenerator)
            {
                _jwtGenerator = jwtGenerator;
                _signInManager = signInManager;
                _userManager = userManager;
            }

            public async Task<User> Handle(Query request, CancellationToken cancellationToken)
            {
                // handler logic code here
                var user = await _userManager.FindByEmailAsync(request.EmailOrPhoneNumber);

                if (user == null)
                    throw new RestException(HttpStatusCode.Unauthorized, new { MSG = "نام کاربری با رمز عبور اشتباه است" });

                var result = await _signInManager.CheckPasswordSignInAsync(user, request.Password, false);

                if (result.Succeeded)
                {
                    // TODO:token
                    return new User
                    {
                        Username = user.UserName,
                        DisplayName = user.DisplayName,
                        Token = _jwtGenerator.CreateToken(user),
                        Image = null,
                    };
                }
                throw new RestException(HttpStatusCode.Unauthorized, new { MSG = "نام کاربری با رمز عبور اشتباه است" });
            }
        }

    }
}