using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.BasiesInfo
{
    public class Details
    {
        public class Query : IRequest<List<BaseInfo>>
        {
            public string Type { get; set; }
            public int NumInPage { get; set; }
            public int PageNumber { get; set; }

        }

        public class Handler : IRequestHandler<Query, List<BaseInfo>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<BaseInfo>> Handle(Query request, CancellationToken cancellationToken)
            {
                var BaseType = Type.GetType("Domain." + request.Type + ",Domain");
                var res = _context.GetType().GetMethod("Set").MakeGenericMethod(BaseType).Invoke(_context, null);
                return await ((IQueryable)res).Cast<BaseInfo>()
                            .Skip((request.PageNumber - 1) * request.NumInPage)
                            .Take(request.NumInPage)
                            .ToListAsync();
                throw new Exception("خطا در هنگام دریافت لیست بانک ها");
            }
        }
    }
}