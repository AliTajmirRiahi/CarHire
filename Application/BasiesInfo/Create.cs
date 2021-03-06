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
namespace Application.BasiesInfo
{
    public class Create
    {
        public class Query : IRequest<BaseInfo>
        {
            public string Value { get; set; }
            public string Type { get; set; }
        }
        public class QueryValidator : AbstractValidator<Query>
        {
            public QueryValidator()
            {
                RuleFor(p => p.Value).NotEmpty().WithMessage("مقدار نباید خالی باشد");
            }
        }

        public class Handler : IRequestHandler<Query, BaseInfo>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task<BaseInfo> Handle(Query request, CancellationToken cancellationToken)
            {
                if (_context.BasiesInfo.Any(p => p.Value == request.Value))
                    throw new RestException(HttpStatusCode.BadRequest, new { MSG = "مورد وارد شده تکراری است" });

                var BaseType = Type.GetType("Domain." + request.Type + ",Domain");
                BaseInfo newBase = _mapper.Map(request, request.GetType(), BaseType) as BaseInfo;
                var BasiesInfo = _context.GetType().GetMethod("Set").MakeGenericMethod(BaseType).Invoke(_context, null);
                BasiesInfo = BasiesInfo.GetType().GetMethod("Add").Invoke(BasiesInfo, new object[] { newBase });

                var res = await _context.SaveChangesAsync() > 0;
                if (res)
                    return newBase;

                throw new Exception("Problem saving changes");
            }
        }
    }
}