using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Renters;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Application.BasiesInfo;

namespace API.Controllers
{
    public class BaseInfoController : BaseController
    {
        [HttpGet("{type}")]
        [AllowAnonymous]
        public async Task<ActionResult<List<BaseInfo>>> Details(string type)
        {
            return await Mediator.Send(new Details.Query() { Type = type });
        }
        [HttpGet("current/{id}")]
        [AllowAnonymous]
        public async Task<ActionResult<BaseInfo>> Current(Guid id)
        {
            return await Mediator.Send(new Current.Query() { Id = id });
        }
    }
}