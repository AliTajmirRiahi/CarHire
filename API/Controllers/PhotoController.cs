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

namespace API.Controllers
{
    public class PhotoController : BaseController
    {
        [HttpPost()]
        [AllowAnonymous]
        public async Task<ActionResult<Unit>> Upload(IFormFile file)
        {
            // var uploads = Path.Combine(_environment.WebRootPath, "uploads");
            // if (file.Length > 0)
            // {
            //     using (var fileStream = new FileStream(Path.Combine(uploads, file.FileName), FileMode.Create))
            //     {
            //         await file.CopyToAsync(fileStream);
            //     }
            // }
            return null;
        }
    }
}