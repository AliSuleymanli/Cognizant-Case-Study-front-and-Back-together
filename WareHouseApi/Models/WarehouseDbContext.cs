using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WareHouseApi.Models
{
    public class WarehouseDbContext :DbContext
    {
        public WarehouseDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<WareHouse> WareHouses { get; set; }
        public DbSet<Vehicle> Vehicles { get; set; } 
    }
}
