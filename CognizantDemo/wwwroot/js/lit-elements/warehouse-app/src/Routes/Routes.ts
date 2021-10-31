import { Router } from "@vaadin/router";
import { store } from "../Store/Store";
import "../warehouse-app";


const routes = [{
    path: "/",
    component: "warehouse-app",
    action: async () => {
        await import('../WarehouseApp');
    },
    children: [
        {
            path: "cars",
            component: "car-list",
            action: async () => {
                await import('../Components/CarList');
                await store.LoadCars();
            },
        },
        {
            path: "car/:id",
            component: 'car-detail',
            action: async (root: any) => {
                let carId = root.params.id;
                await import('../Components/CarDetail');
                await store.LoadSelectedCar(carId);
            },
        }
    ]
}];

const outlet = document.getElementById("outlet");
export const router = new Router(outlet);
router.setRoutes(routes);