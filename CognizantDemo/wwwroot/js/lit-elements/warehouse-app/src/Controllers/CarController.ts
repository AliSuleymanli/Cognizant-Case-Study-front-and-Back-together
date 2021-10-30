import { Vehicle } from "../Models/Vehicle";
import { HttpGet, HttpGetWithQueryParams } from "../Services/HttpService";
import { constants } from "../Store/Constants";


class CarController {

    async getCars() {
        return await HttpGet<Array<Vehicle>>(constants.ApiEndPoints.cars);
    }

    async getCarDetail(id: number) {
        return await HttpGetWithQueryParams<Vehicle>({ id }, constants.ApiEndPoints.cardetail);
    }
}

const carController = new CarController();

export { carController };