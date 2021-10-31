import { MobxLitElement } from "@adobe/lit-mobx";
import { css, html } from "lit";
import { customElement } from "lit/decorators.js";
import { BootstrapCssMin } from "../Elements/BootstrapCss";
import { Vehicle } from "../Models/Vehicle";
import { store } from "../Store/Store";

@customElement("car-list")
class CarList extends MobxLitElement {
    static styles = [BootstrapCssMin, css`
    thead{
        background: #3c3c3c;
        color: white;
        text-align: center;
    }
    table tr{
        cursor:pointer;
    }

    table td{
        padding:0!important;
    }

    td div{
        display:flex;
    }

    a{
        flex: 1 1 0%;
        padding: 8px;
        text-decoration-line: none;
        color: #3f3838;
    }

    h1{
      text-align:center;
    }
    `];

    render() {
        return html`
            <h1>List Of Cars</h1>

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
                    ${headers.map(header => html`<th>${header}</th>`)}
                </tr>
            </thead>
        `;
    }

    get tbody() {

        return html`
            <tbody>
                ${store.vehicles.map(vehicle => html`
                <tr>
                    <td><div><a href="/car/${vehicle.id}">${vehicle.model}</a></div></td>
                    <td><div><a href="/car/${vehicle.id}">${vehicle.make}</a></div></td>
                    <td><div><a href="/car/${vehicle.id}">${vehicle.year}</a></div></td>
                    <td><div><a href="/car/${vehicle.id}">${vehicle.price}</a></div></td>
                </tr>
                `)}
            </tbody>
        `;
    }
}