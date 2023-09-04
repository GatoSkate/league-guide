import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-actualizar',
    templateUrl: './crud-actualizar-campeon.page.html',
    //styleUrls: ['./cliente.actualizar.page.scss'],
})
export class ClienteActualizarPage {
    id = "1"
    registro = {
        nombres: "",
        titulo:"",
        descripcion:"",
        habilidadq:"",
        habilidadw:"",
        habilidade:"",
        habilidadr:"",
    }

    constructor() { }

    grabar() { }


}