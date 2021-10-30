import { MobxLitElement } from "@adobe/lit-mobx";
import { css, html } from "lit";
import { customElement } from "lit/decorators.js";
import { BootstrapCssMin } from "../Elements/BootstrapCss";
import { Vehicle } from "../Models/Vehicle";
import { store } from "../Store/Store";

@customElement("car-list")
class CarList extends MobxLitElement {
    static styles = [BootstrapCssMin, css``];

    render() {
        return html`
            <div class="table-responsive">
                <table class="table table-bordered table-hover">
                    ${this.thead}
                    ${this.tbody}
                </table>
            </div>
        `;
    }


    get thead() {
        let headers = [
            'Model',
            'Make',
            'Year',
            'Price'
        ];

        return html`
            <thead>
                <tr>
                    ${headers.map(header => html`<td>${header}</td>`)}
                </tr>
            </thead>
        `;
    }

    get tbody() {

        return html`
            <tbody>
                ${store.vehicles.map(vehicle => html`
                <tr @click="${() => this.getCarDetails(vehicle)}">
                    <td>${vehicle.model}</td>
                    <td>${vehicle.make}</td>
                    <td>${vehicle.year}</td>
                    <td>${vehicle.price}</td>
                </tr>
                `)}
            </tbody>
        `;
    }

    getCarDetails(vehicle: Vehicle) {
        console.log(vehicle.id);
    }


}