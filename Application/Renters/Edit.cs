using System;
using System.Collections.Generic;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Nelibur.ObjectMapper;
using Persistence;
namespace Application.Renters
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
            public string rName { get; set; }
            public string rSub { get; set; }
            public string rTitle { get; set; }
            public string rContactMail { get; set; }
            public bool rEnable { get; set; }
            public DateTime rCreate { get; set; }
            public DateTime rExpire { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                MapperConfig.Config();
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var renter = await _context.Founders.FindAsync(request.Id);
                if (renter == null)
                    throw new RestException(HttpStatusCode.NotFound, new { MSG = "مالک پیدا نشد" });

                TinyMapper.Map(request, renter);

                var res = await _context.SaveChangesAsync() > 0;
                if (res) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}