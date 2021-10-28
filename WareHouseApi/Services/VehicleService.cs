using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WareHouseApi.Models;
using WareHouseApi.Repositories;

namespace WareHouseApi.Services
{
    public class VehicleService : IVehicleService
    {
        private IVehicleRepository repository;

        public VehicleService(IVehicleRepository _repository)
        {
            repository = _repository;
        }

        public async Task<ActionResult> getAll()
        {
            try
            {
                IEnumerable<Vehicle> result = await repository.getAll();
                if (result != null)
                {
                    return new OkObjectResult(result);
                }
                else
                {
                    return new NotFoundResult();
                }
            }
            catch
            {
                return new ConflictResult();
            }
        }

        public async Task<ActionResult> getById(int id)
        {
            try
            {
                var result = await repository.getById(id);
                if (result != null)
                {
                    return new OkObjectResult(result);
                }
                else
                {
                    return new NotFoundResult();
                }
            }
            catch
            {
                return new ConflictResult();
            }
        }

        public Task<ActionResult> search(string str)
        {
            throw new NotImplementedException();
        }
    }
}
