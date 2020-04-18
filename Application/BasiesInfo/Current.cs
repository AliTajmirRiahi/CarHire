using System;
using System.Linq;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;
namespace Application.BasiesInfo
{
    public class Current
    {
        public class Query : IRequest<BaseInfo>
        {
            public Guid Id { get; set; }

        }
        public class QueryValidator : AbstractValidator<Query>
        {
            public QueryValidator()
            {
                RuleFor(p => p.Id).NotEmpty();
            }
        }

        public class Handler : IRequestHandler<Query, BaseInfo>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                MapperConfig.Config();
                _context = context;
            }

            public async Task<BaseInfo> Handle(Query request, CancellationToken cancellationToken)
            {
                var baseInfo = await _context.BasiesInfo.FirstOrDefaultAsync(p => p.Id == request.Id);
                return baseInfo;
                throw new NotImplementedException();
            }
        }
    }
}