import { html,css } from "lit";
import { Vehicle } from "../Models/Vehicle";


class CarTableTemplates{
    carList(array: Vehicle[]){
        return html`
            <div class="table-responsive" style="width:80%;margin:auto">
                <table class="table table-bordered table-hover">
                    ${this.thead()}
                    ${this.tbody(array)}
                </table>
            </div>
        `;
    }

    thead() {
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

    tbody(array:Vehicle[]) {

        return html`
            <tbody>
                ${array.map(vehicle => html`
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

    get templateCss(){
        return css`
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
        `
    }
};





const carListTemplate=new CarTableTemplates();

export {carListTemplate};