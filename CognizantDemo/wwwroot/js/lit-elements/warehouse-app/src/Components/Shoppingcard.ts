import { MobxLitElement } from "@adobe/lit-mobx";
import { css, html } from "lit";
import { customElement } from "lit/decorators.js";
import { BootstrapCssMin } from "../Elements/BootstrapCss";
import { Vehicle } from "../Models/Vehicle";
import { store } from "../Store/Store";

@customElement("shopping-card")
class ShoppingCard extends MobxLitElement{

    render(){
        return html``;
    }
}