using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WareHouseApi.Services
{ 
    public interface IService<T>
    {
        Task<ActionResult> getAll();
        Task<ActionResult> getById(int id);
        Task<ActionResult> search(string str);

    }
}
