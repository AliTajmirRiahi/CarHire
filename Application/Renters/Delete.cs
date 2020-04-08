using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;
using FluentValidation;
using System.Net;

namespace Application.Renters
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
                var renter = await _context.Renters.FindAsync(request.Id);

                if (renter == null)
                    throw new RestException(HttpStatusCode.NotFound, new { MSG = "مالک پیدا نشد" });
                _context.Remove(renter);

                var res = await _context.SaveChangesAsync() > 0;

                if (res) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}