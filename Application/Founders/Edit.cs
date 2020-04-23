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

namespace Application.Founders
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
            public string rFirstName { get; set; }
            public string rLastName { get; set; }
            public string rTitle { get; set; }
            public string rContactMail { get; set; }
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
                var founder = await _context.Founders.FindAsync(request.Id);
                if (founder == null)
                    throw new RestException(HttpStatusCode.NotFound, new { MSG = "مالک پیدا نشد" });

                _mapper.Map(request, founder);

                var res = await _context.SaveChangesAsync() > 0;
                if (res) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}