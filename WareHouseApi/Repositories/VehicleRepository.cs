using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WareHouseApi.Models;

namespace WareHouseApi.Repositories
{
    public class VehicleRepository : IVehicleRepository
    {
        private readonly WarehouseDbContext context;

        public VehicleRepository(WarehouseDbContext _context)
        {
            context = _context;
        }

        public async Task<IEnumerable<Vehicle>> getAll()
        {
            return await context.Vehicles.Include(x=>x.WareHouse).OrderBy(x => x.DateAdded).ToListAsync();
        }

        public async Task<Vehicle> getById(int id)
        {
            return await context.Vehicles.Include(x => x.WareHouse).Where(x => x.Id == id).SingleOrDefaultAsync();
        }

        public Task<IEnumerable<Vehicle>> search(string str)
        {
            throw new NotImplementedException();
        }
    }
}
