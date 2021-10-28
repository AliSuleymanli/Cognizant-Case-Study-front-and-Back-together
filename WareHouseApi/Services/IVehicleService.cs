using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using WareHouseApi.Models;

namespace WareHouseApi.Services
{
    public interface IVehicleService : IService<Vehicle>
    {
        Task<ActionResult> getAll();
        Task<ActionResult> getById(int id);
        Task<ActionResult> search(string str);
    }
}