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
using Persistence;
using AutoMapper;

namespace Application.User
{
    public class Register
    {
        public class Command : IRequest<User>
        {
            public string EmailOrPhoneNumber { get; set; }
            public string Password { get; set; }
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(p => p.EmailOrPhoneNumber).NotEmpty().WithMessage("موبایل یا ایمیل را وارد کنید");
                RuleFor(p => p.Password).NotEmpty()
                .WithMessage("کلمه عبور را وارد کنید")
                .MinimumLength(8)
                .WithMessage("کلمه عبور حداقل شامل 8 کاراکتر"); ;
            }
        }

        public class Handler : IRequestHandler<Command, User>
        {
            private readonly DataContext _context;
            private readonly UserManager<AppUser> _userManager;
            private readonly IJwtGenerator _jwtGenerator;
            private readonly IMapper _mapper;
            public Handler(DataContext context, UserManager<AppUser> userManager, IJwtGenerator jwtGenerator, IMapper mapper)
            {
                _mapper = mapper;
                _jwtGenerator = jwtGenerator;
                _userManager = userManager;
                _context = context;
            }

            public async Task<User> Handle(Command request, CancellationToken cancellationToken)
            {
                bool isPhone = Utility.IsPhoneNumber(request.EmailOrPhoneNumber);
                if (isPhone && await _context.Users.Where(p => p.PhoneNumber == request.EmailOrPhoneNumber).AnyAsync())
                    throw new RestException(HttpStatusCode.BadRequest, new { MSG = "این تلفن قبلا استفاده شده است" });

                if (!isPhone && !Utility.IsEmail(request.EmailOrPhoneNumber))
                    throw new RestException(HttpStatusCode.BadRequest, new { MSG = "فرمت ایمیل صحیح نمیابشد" });

                if (!isPhone && await _context.Users.Where(p => p.Email == request.EmailOrPhoneNumber).AnyAsync())
                    throw new RestException(HttpStatusCode.BadRequest, new { MSG = "این ایمیل قبلا استفاده شده است" });

                var appUser = new AppUser();
                _mapper.Map(request, appUser);
                if (isPhone)
                {
                    appUser.PhoneNumber = request.EmailOrPhoneNumber;
                    appUser.Email = request.EmailOrPhoneNumber + "@arta.com";
                }
                else
                    appUser.Email = request.EmailOrPhoneNumber;
                appUser.UserName = appUser.Email;
                var res = await _userManager.CreateAsync(appUser, request.Password);
                if (res.Succeeded)
                {
                    Domain.Founder newFounder = new Domain.Founder();
                    newFounder.AppUser = appUser;
                    appUser.Founder = newFounder;
                    _context.Founders.Add(newFounder);
                    var isSave = await _context.SaveChangesAsync() > 0;
                    if (isSave)
                    {
                        var newUser = _mapper.Map<User>(appUser);
                        newUser.Token = _jwtGenerator.CreateToken(appUser);
                        return newUser;
                    }

                }

                throw new Exception("مشکل در ایجاد یوزر");
            }
        }
    }
}