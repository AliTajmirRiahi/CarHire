using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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
        [HttpPut("{id}")]
        [AllowAnonymous]
        public async Task<ActionResult<Unit>> Update(Guid id, Update.Command command)
        {
            command.Id = id;
            return await Mediator.Send(command);
        }
        [HttpPost("{type}")]
        [AllowAnonymous]
        public async Task<ActionResult<BaseInfo>> Create(string type, Create.Query query)
        {
            query.Type = type;
            return await Mediator.Send(query);
        }
        [HttpDelete("{id}")]
        [AllowAnonymous]
        public async Task<ActionResult<Unit>> Delete(Guid id)
        {
            return await Mediator.Send(new Delete.Command() { Id = id });
        }
    }
}