using Microsoft.AspNetCore.Mvc;
using AbbyFirstASPNETWEbApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AbbyFirstASPNETWEbApp.Controllers
{
    public class BlahController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet("gradeCalc")]
        public IActionResult gradeCalc()
        {
            return View();
        }

        [HttpPost("gradeCalc")]

        public IActionResult gradeCalc (gradeCalcModel model)
        {
            return View();
        }
    }
}
