using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WareHouseApi.Repositories
{
    public interface IRepository<T> 
    {
        Task<IEnumerable<T>> getAll();
        Task<IEnumerable<T>> search(string str);
        Task<T> getById(int id);
    }
}
