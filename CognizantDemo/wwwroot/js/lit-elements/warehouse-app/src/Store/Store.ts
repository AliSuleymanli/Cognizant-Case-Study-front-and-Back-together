import { autorun, makeAutoObservable } from 'mobx';
import { carController } from '../Controllers/CarController';
import { Vehicle } from '../Models/Vehicle';

class Store {
    public message: { alert: string, rev: number } = { alert: "", rev: -1 };

    public vehicles: Vehicle[] = [];
    public selectedVehicle: Vehicle = new Vehicle();

    constructor() {
        makeAutoObservable(this);
    }

    public async LoadCars() {
        let data = await carController.getCars();
        if (data.responseInfo.success == true) {
            this.vehicles = await data.result;
        } else {
            this.setMessage("Something went wrong on getting the list of cars. try again later. ");
        }
    }

    public async LoadSelectedCar(id: number) {
        this.selectedVehicle = await this.getCar(id);
    }

    public async getCar(id: number) {
        let data = await carController.getCarDetail(id);

        if (data.responseInfo.success == true) {
            let result = await data.result;
            return result;
        } else {
            this.setMessage("Something went wrong on getting the car. try again later. ");
        }

        return new Vehicle();
    }

    setMessage(message: string) {
        let { rev } = this.message;
        rev++;
        this.message = {
            alert: message,
            rev: rev
        };
    }

}

const store = new Store();

autorun(() => {
    if (store.message.alert.length > 0 && store.message.rev > 0) {
        alert(store.message.alert);
    }
});



export { store };