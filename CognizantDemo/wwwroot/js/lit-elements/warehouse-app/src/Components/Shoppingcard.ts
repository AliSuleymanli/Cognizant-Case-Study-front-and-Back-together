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
    static styles = [BootstrapCssMin, carListTemplate.templateCss,css`
        .total-price{
            margin-top: 15px;
        margin-bottom: 15px;
        text-align: right;
        font-size: 20px;
        }
    `];

    render(){
        return html`
        ${carListTemplate.carList(store.shoppingCard)}

        <div class="total-price">
            <strong>Total Price: </strong>
            <span>${this.TotalPrice()} </span>
        </div>
        `;
    }

    TotalPrice(){
        let totalPrice=0;

        store.shoppingCard.forEach(vehicle=>{
            totalPrice += Number.parseFloat(vehicle.price.toString());
            totalPrice=Math.round(totalPrice*100)/100
        });

        return totalPrice;
    }


}