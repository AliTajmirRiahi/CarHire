using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Founders;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
namespace API.Controllers
{
    public class FounderController : BaseController
    {

        // [HttpDelete("{id}")]
        // public async Task<ActionResult<Unit>> Delete(Guid id)
        // {
        //     return await Mediator.Send(new Delete.Command { Id = id });
        // }
        [HttpPut()]
        public async Task<ActionResult<Unit>> Edit(Edit.Command command)
        {
            return await Mediator.Send(command);
        }
    }
}