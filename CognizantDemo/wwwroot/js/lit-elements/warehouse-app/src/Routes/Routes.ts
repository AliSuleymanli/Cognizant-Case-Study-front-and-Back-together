import { Router } from "@vaadin/router";

const routes = [{
    path: "/",
    component: "warehouse-app",
    children: [
        {
            path: "cars",
            component: 'car-list',
            action: async () => {

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