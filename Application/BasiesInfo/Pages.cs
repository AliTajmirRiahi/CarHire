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
    public class Pages
    {
        public class Query : IRequest<int>
        {
            public string Type { get; set; }
            public int NumInPage { get; set; }
        }


        public class Handler : IRequestHandler<Query, int>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                MapperConfig.Config();
                _context = context;
            }

            public async Task<int> Handle(Query request, CancellationToken cancellationToken)
            {
                var BaseType = Type.GetType("Domain." + request.Type + ",Domain");
                var res = _context.GetType().GetMethod("Set").MakeGenericMethod(BaseType).Invoke(_context, null);
                int CountOfBase = await ((IQueryable)res).Cast<BaseInfo>().CountAsync();
                int PageCount = CountOfBase / request.NumInPage;
                if (CountOfBase % request.NumInPage != 0)
                    PageCount++;
                return PageCount;
                throw new Exception("خطا در هنگام دریافت لیست بانک ها");
            }
        }
    }
}