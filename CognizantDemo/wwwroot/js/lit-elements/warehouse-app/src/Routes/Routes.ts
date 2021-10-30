import { Router } from "@vaadin/router";
import { store } from "../Store/Store";


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
            path: "car/id",
            component: 'car-detail',
            action: async () => {

            },
        }
    ]
}];

const outlet = document.getElementById("outlet");
export const router = new Router(outlet);
router.setRoutes(routes);