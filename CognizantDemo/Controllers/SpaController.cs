using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CognizantDemo.Controllers
{
    public class SpaController : Controller
    {
        public IActionResult ShowIndexPage
    ([FromServices] IWebHostEnvironment env)
        {
            return PhysicalFile
    (env.WebRootPath + "/index.html", "text/html");
        }
    }
}
