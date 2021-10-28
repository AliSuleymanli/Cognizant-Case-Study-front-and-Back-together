using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WareHouseApi.Repositories
{
    interface IService<T>
    {
        Task<ActionResult> getAll();
        Task<ActionResult> getById(int id);
        Task<ActionResult> search(string str);
        Task<ActionResult> update(T item);
        Task<ActionResult> insert(T item);
        Task<ActionResult> delet(int id);
    }
}
