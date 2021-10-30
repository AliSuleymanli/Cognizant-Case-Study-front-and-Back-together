import { WareHouse } from "./WareHouse";

class Vehicle {
    id: number = 0;
    make: string = "";
    model: string = "";
    year: number = 0;
    price: number = 0;
    licensed: boolean = false;
    dateAdded: string = "";
    wareHouse: WareHouse = new WareHouse();
}

export { Vehicle };