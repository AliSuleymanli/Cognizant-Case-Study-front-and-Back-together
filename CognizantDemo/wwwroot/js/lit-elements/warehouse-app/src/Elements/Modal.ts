import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { stylesForModal } from "./StylesForModal";

@customElement("modal-element")
class Modal extends LitElement{
    static styles=[stylesForModal]
    
    render(){
        return html`
        <div id="myModal" class="modal">

            <!-- Modal content -->
            <div class="modal-content">
                <div class="modal-header">
                    <span class="close">&times;</span>
                    <h2>Modal Header</h2>
                </div>
                <div class="modal-body">
                    <slot></slot>
                </div>
                <div class="modal-footer">
                    <h3>Modal Footer</h3>
                </div>
            </div>

        </div>
        `;
    }
}