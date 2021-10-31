import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { store } from "../Store/Store";
import { stylesForModal } from "./StylesForModal";

@customElement("modal-element")
class Modal extends LitElement{
    static styles=[stylesForModal]

    @property()
    header:string='';
    footer:string='';
    
    render(){
        return html`
        <div id="myModal" class="modal">

            <!-- Modal content -->
            <div class="modal-content">
                <div class="modal-header">
                    <span @click="${()=>{store.showShoppingCard=false}}" class="close">&times;</span>
                    <h2 style="text-align:center">${this.header}</h2>
                </div>
                <div class="modal-body">
                    <slot></slot>
                </div>
                ${this.footer.length>0?html`
                    <div class="modal-footer">
                        <h3>${this.footer}</h3>
                    </div>
                `:html``}               
            </div>

        </div>
        `;
    }
}