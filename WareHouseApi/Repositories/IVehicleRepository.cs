using System.Collections.Generic;
using System.Threading.Tasks;
using WareHouseApi.Models;

namespace WareHouseApi.Repositories
{
    public interface IVehicleRepository :IRepository<Vehicle>
    {
        Task<IEnumerable<Vehicle>> getAll();
        Task<Vehicle> getById(int id);
        Task<IEnumerable<Vehicle>> search(string str);
    }
}