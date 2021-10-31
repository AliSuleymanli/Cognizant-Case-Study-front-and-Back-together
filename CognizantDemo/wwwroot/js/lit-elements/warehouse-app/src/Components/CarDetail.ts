import { MobxLitElement } from "@adobe/lit-mobx";
import { css, html } from "lit";
import { customElement, state } from "lit/decorators.js";
import { BootstrapCssMin } from "../Elements/BootstrapCss";
import { Vehicle } from "../Models/Vehicle";
import { store } from "../Store/Store";

class CarDetail extends MobxLitElement {
    static styles = [BootstrapCssMin, css``]

    @state()
    vehicle: Vehicle = new Vehicle();

    render() {
        return html`
            <div>
                <fieldset>
                    <legend>${this.vehicle.model}</legend>
                    <ul>
                        <li>${this.vehicle.make}</li>
                        <li>${this.vehicle.price}</li>
                        <li>${this.vehicle.year}</li>
                        <li>${this.vehicle.licensed}</li>
                        <li>${this.vehicle.wareHouse.name}</li>
                        <li>${this.vehicle.wareHouse.carLocation}</li>
                    </ul>
                </fieldset>
            </div>
        `;
    }
}