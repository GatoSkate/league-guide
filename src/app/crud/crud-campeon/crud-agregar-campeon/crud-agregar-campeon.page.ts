import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar',
  templateUrl: './crud-agregar-campeon.page.html',
  //styleUrls: ['./cliente.agregar.page.scss'],
})
export class ClienteAgregarPage {
  // Estructura registro, agrupa varios campos
  // Debieramos utilizar una interface
  registro={
    id:"",
    nombres:"",
    titulo:"",
    descripcion:"",
    habilidadq:"",
    habilidadw:"",
    habilidade:"",
    habilidadr:"",

  }
  constructor() { }
  // Método grabar, vacío
  grabar(){}

}