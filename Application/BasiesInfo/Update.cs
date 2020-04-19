using System;
using System.Linq;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;
using FluentValidation;
using System.Net;
using Nelibur.ObjectMapper;

namespace Application.BasiesInfo
{
    public class Update
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
            public string Value { get; set; }
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(p => p.Id).NotEmpty().WithMessage("اطلاعات پیدا شد");
                RuleFor(p => p.Value).NotEmpty().WithMessage("مقدار نباید خالی باشد");
            }
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
                var current = await _context.BasiesInfo.FirstOrDefaultAsync(p => p.Id == request.Id);
                if (current == null)
                    throw new RestException(HttpStatusCode.BadRequest, new { MSG = "مورد پیدا نشد" });

                TinyMapper.Map(request, current);

                var res = await _context.SaveChangesAsync() > 0;
                if (res) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}