using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace WareHouseApi.Models
{
    public class WareHouse
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public double Locationlat { get; set; }
        public double Locationlong { get; set; }
        public string CarLocation { get; set; }
        [JsonIgnore] public ICollection<Vehicle> Vehicles { get; set; } 
    }
}
