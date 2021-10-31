using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WareHouseApi.Repositories;
using WareHouseApi.Services;

namespace WareHouseApi.Controllers
{
    [ApiController]
    [EnableCors("AllowOrigin")]
    [Route("[controller]/[action]")]
    public class CarsController :ControllerBase
    {
        private IVehicleService VehicleService;

        public CarsController(IVehicleService _VehicleService)
        {
            VehicleService = _VehicleService;
        }

        [HttpGet]
        public async Task<ActionResult> GetAllCars()
        {
            return await VehicleService.getAll();
        }

        [HttpGet]
        public async Task<ActionResult> CarById(int id)
        {
            return await VehicleService.getById(id);
        }
    }
}
