import { Vehicle } from "./Vehicle";

class WareHouse {
    id: number = 0;
    name: string = "";
    locationlat: number = 0;
    locationlong: number = 0;
    carLocation: string = "";
    vehicles: Vehicle[] = [];
}

export { WareHouse };