using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;
using FluentValidation;

namespace Application.Renters
{
    public class Create
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
        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(p => p.rTitle).NotEmpty();
                RuleFor(p => p.rCreate).NotEmpty();
                RuleFor(p => p.rExpire).NotEmpty();
                RuleFor(p => p.rName).NotEmpty();
                RuleFor(p => p.rSub).NotEmpty();
            }
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
                // handler logic 
                var res = await _context.SaveChangesAsync() > 0;
                if (res) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}