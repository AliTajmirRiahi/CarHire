using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
using Application.Infrastructure.Interfaces;
using Domain;
using FluentValidation;
using MediatR;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Nelibur.ObjectMapper;
using Persistence;

namespace Application.User
{
    public class Register
    {
        public class Command : IRequest<User>
        {
            public string DisplayName { get; set; }
            public string Username { get; set; }
            public string Email { get; set; }
            public string Password { get; set; }
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(p => p.DisplayName).NotEmpty();
                RuleFor(p => p.Username).NotEmpty();
                RuleFor(p => p.Email).NotEmpty().EmailAddress();
                RuleFor(p => p.Password).NotEmpty().MinimumLength(8);

                // .Matches("[A-Z]").WithMessage("کلمه عبور باید حداقل یک حرف بزرگ داشته باشد");
            }
        }

        public class Handler : IRequestHandler<Command, User>
        {
            private readonly DataContext _context;
            private readonly UserManager<AppUser> _userManager;
            private readonly IJwtGenerator _jwtGenerator;
            public Handler(DataContext context, UserManager<AppUser> userManager, IJwtGenerator jwtGenerator)
            {
                _jwtGenerator = jwtGenerator;
                _userManager = userManager;
                _context = context;
                MapperConfig.Config();
            }

            public async Task<User> Handle(Command request, CancellationToken cancellationToken)
            {
                if (await _context.Users.Where(p => p.Email == request.Email).AnyAsync())
                    throw new RestException(HttpStatusCode.BadRequest, new { MSG = "این ایمیل قبلا استفاده شده است" });

                if (await _context.Users.Where(p => p.UserName == request.Username).AnyAsync())
                    throw new RestException(HttpStatusCode.BadRequest, new { MSG = "این نام کاربری قبلا استفاده شده است" });

                var appUser = new AppUser();
                TinyMapper.Map(request, appUser);

                var res = await _userManager.CreateAsync(appUser, request.Password);
                if (res.Succeeded)
                {
                    var newUser = TinyMapper.Map<User>(appUser);
                    newUser.Token = _jwtGenerator.CreateToken(appUser);
                    return newUser;
                }

                throw new Exception("مشکل در ایجاد یوزر");
            }
        }
    }
}