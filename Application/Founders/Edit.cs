using System;
using System.Collections.Generic;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;
using AutoMapper;
using Application.Photos;

namespace Application.Founders
{
    public class Edit
    {
        public class Command : IRequest
        {
            public string aFirstName { get; set; }
            public string aLastName { get; set; }
            public FounderDto Founder { get; set; }
            public PhotoDto Photo { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var founder = await _context.Founders.FindAsync(request.Founder.Id);
                if (founder == null)
                    throw new RestException(HttpStatusCode.NotFound, new { MSG = "مالک پیدا نشد" });

                if (founder.AppUser.Photo != null && request.Photo.Id != founder.AppUser.Photo.Id)
                {
                    _context.Photos.Remove(founder.AppUser.Photo);
                    founder.AppUser.Photo = null;
                }
                _mapper.Map(request, founder.AppUser);

                if (_context.Entry(founder).State == EntityState.Unchanged && _context.Entry(founder.AppUser).State == EntityState.Unchanged)
                    return Unit.Value;

                var res = await _context.SaveChangesAsync() > 0;
                if (res) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}