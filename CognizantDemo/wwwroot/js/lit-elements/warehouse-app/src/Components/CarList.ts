import { MobxLitElement } from "@adobe/lit-mobx";
import { css, html } from "lit";
import { customElement } from "lit/decorators.js";
import { BootstrapCssMin } from "../Elements/BootstrapCss";
import { carListTemplate } from "../Elements/CarTableTemplates";
import { Vehicle } from "../Models/Vehicle";
import { store } from "../Store/Store";

@customElement("car-list")
class CarList extends MobxLitElement {
    static styles = [BootstrapCssMin, carListTemplate.templateCss];

    render() {
        return html`
            <h1>List Of Cars</h1>

            ${carListTemplate.carList(store.vehicles)}
        `;
    }


    
}