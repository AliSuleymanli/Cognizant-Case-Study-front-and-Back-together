import { MobxLitElement } from "@adobe/lit-mobx";
import { css, html } from "lit";
import { customElement } from "lit/decorators.js";
import { BootstrapCssMin } from "../Elements/BootstrapCss";
import { carListTemplate } from "../Elements/CarTableTemplates";
import { stylesForModal } from "../Elements/StylesForModal";
import { Vehicle } from "../Models/Vehicle";
import { store } from "../Store/Store";

@customElement("shopping-card")
class ShoppingCard extends MobxLitElement{
    static styles = [BootstrapCssMin, carListTemplate.templateCss];

    render(){
        return html`
        ${carListTemplate.carList(store.shoppingCard)}

        <div>
            <span>Total Price: </span>
            <span>${this.TotalPrice()} </span>
        </div>
        `;
    }

    TotalPrice(){
        let totalPrice=0;

        store.shoppingCard.forEach(vehicle=>{
            return totalPrice += Number.parseFloat(vehicle.price.toString());
        });

        return totalPrice;
    }


}