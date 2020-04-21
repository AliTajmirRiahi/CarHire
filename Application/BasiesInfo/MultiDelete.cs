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
using Nelibur.ObjectMapper;

namespace Application.BasiesInfo
{
    public class MultiDelete
    {
        public class Command : IRequest
        {
            public string IdList { get; set; }
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
                var Splited = request.IdList.Split(',').ToList();
                var basies = _context.BasiesInfo.Where(p => Splited.Contains(p.Id.ToString())).ToList();
                var Msg = "";
                // List<string> errors = new List<string>();
                foreach (var baseInfo in basies)
                {
                    if (baseInfo.CanDelete)
                        _context.BasiesInfo.Remove(baseInfo);
                    else
                        Msg += "امکان حذف \"" + baseInfo.Value + "\" نیست \r\n";
                }
                var res = await _context.SaveChangesAsync() > 0;

                if (Msg != "")
                    throw new RestException(HttpStatusCode.BadRequest, new { MSG = Msg });
                else return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}