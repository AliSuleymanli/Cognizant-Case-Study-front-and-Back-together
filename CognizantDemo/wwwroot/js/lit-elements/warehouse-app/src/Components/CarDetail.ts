import { MobxLitElement } from "@adobe/lit-mobx";
import { css, html } from "lit";
import { customElement, state } from "lit/decorators.js";
import { BootstrapCssMin } from "../Elements/BootstrapCss";
import { Vehicle } from "../Models/Vehicle";
import { store } from "../Store/Store";

@customElement("car-detail")
class CarDetail extends MobxLitElement {
    static styles = [BootstrapCssMin, css`
        fieldset{
            border: 1px solid #000;
            border-radius: 5px;
            margin-left: 10%;
            margin-right: 10%;
            margin-top: 10px;
        }

        legend{
            background: #404040;
            color: white;
            text-align: center;
            padding: 5px;
        }

        ul{
            margin-bottom:0;
        }

        li{
            border-bottom: 1px solid grey;
            display: flex;
            padding-top: 15px;
            margin-right:2rem;
        }

        li span:nth-child(1){
            flex:1;
            font-weight:bold;
        }

        li span:nth-child(2){
            flex:1;
        }

        .add-to-card{
            border:none;
            margin-right:0;
            margin-top:20px;
        }

        .add-to-card >div{
            width:100%;
            text-align:right;
        }

    `]

    @state()
    vehicle: Vehicle = new Vehicle();

    render() {
        this.vehicle = store.selectedVehicle;

        return html`
            <div>
                <fieldset>
                    <legend>${this.vehicle.make}</legend>
                    <ul>
                        <li>
                            <span>Model:</span>
                            <span>${this.vehicle.model}</span>
                        </li>
            
                        <li>
                            <span>Price:</span>
                            <span>${this.vehicle.price}</span>
                        </li>
            
                        <li>
                            <span>Year:</span>
                            <span>${this.vehicle.year}</span>
                        </li>
            
                        <li>
                            <span>Licensed:</span>
                            <span>${this.vehicle.licensed ? 'Yes' : 'No'}</span>
                        </li>
            
                        <li>
                            <span>WareHouse:</span>
                            <span>${this.vehicle.wareHouse.name}</span>
                        </li>
            
                        <li>
                            <span>Location:</span>
                            <span>${this.vehicle.wareHouse.carLocation}</span>
                        </li>

                        <li class="add-to-card">
                            <div >
                                <button 
                                    class="btn btn-secondary " 
                                    style="border-top-right-radius: 0;" 
                                    @click="${()=>this.addToCard(this.vehicle)}">
                                    Add To Card
                                </button>
                            </div>
                        </li>
                    </ul>
                </fieldset>
            </div>
        `;
    }

    addToCard(vehicle:Vehicle){
        
    }

}