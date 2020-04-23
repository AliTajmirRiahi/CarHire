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

namespace Application.BasiesInfo
{
    public class Delete
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
        }


        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var current = _context.BasiesInfo.FirstOrDefault(p => p.Id == request.Id);
                if (current == null)
                    throw new RestException(HttpStatusCode.BadRequest, new { MSG = "مورد پیدا نشد" });

                if (!current.CanDelete)
                    throw new RestException(HttpStatusCode.BadRequest, new { MSG = "امکان حذف این مورد وجود ندارد" });

                _context.BasiesInfo.Remove(current);

                var res = await _context.SaveChangesAsync() > 0;
                if (res) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}