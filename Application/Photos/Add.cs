using System;
using System.Linq;
using System.Net;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;
using FluentValidation;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using System.IO;

namespace Application.Photos
{
    public class Add
    {
        public class Command : IRequest<PhotoDto>
        {
            public string subFolder { get; set; }
            public IFormFile file { get; set; }
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(p => p.subFolder).NotEmpty();
            }
        }

        public class Handler : IRequestHandler<Command, PhotoDto>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task<PhotoDto> Handle(Command request, CancellationToken cancellationToken)
            {
                var file = request.file;
                if (file.Length > 5000000)
                    throw new RestException(HttpStatusCode.BadRequest, new { MSG = "فایل باید کمتر از 5 مگابایت باشد" });

                if (!Utility.IsAcceptedMime(file.ContentType))
                    throw new RestException(HttpStatusCode.BadRequest, new { MSG = "فرمت فایل قابل پذیرش نیست" });

                var absolute = "C:/Users/Programmer/Desktop/CarHire/client-app/public";
                var path = Utility.CheckAndCreateDirectory(request.subFolder) + Utility.GenerateRandNumber() + Path.GetExtension(file.FileName);
                string serverPath = absolute + path;
                using (var fileStream = new FileStream(serverPath, FileMode.Create))
                {
                    file.CopyTo(fileStream);
                }
                Photo newPhoto = new Photo()
                {
                    Path = path,
                    Length = file.Length,
                    ContentType = file.ContentType
                };
                _context.Photos.Add(newPhoto);
                var newPhotoDto = _mapper.Map<PhotoDto>(newPhoto);
                var res = await _context.SaveChangesAsync() > 0;
                if (res) return newPhotoDto;
                throw new Exception("Problem saving changes");
            }
        }
    }
}