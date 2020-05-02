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
using Microsoft.AspNetCore.Http;
using Application.Photos;

namespace API.Controllers
{
    public class PhotoController : BaseController
    {
        [HttpPost("{subFolder}")]
        [AllowAnonymous]
        public async Task<ActionResult<PhotoDto>> Upload(string subFolder, IFormFile file)
        {
            return await Mediator.Send(new Add.Command() { subFolder = subFolder, file = file });
        }
    }
}