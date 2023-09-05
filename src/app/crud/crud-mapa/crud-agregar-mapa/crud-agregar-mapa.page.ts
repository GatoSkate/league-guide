import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-agregar-mapa',
  templateUrl: './crud-agregar-mapa.page.html',
  styleUrls: ['./crud-agregar-mapa.page.scss'],
})
export class CrudAgregarMapaPage implements OnInit {
    // Estructura registro, agrupa varios campos
    // Debieramos utilizar una interface
    registro={
      id:"",
      nombre_mapa:"",
      titulo:"",
      descripcion:"",
      cantidad_blue:"",
      cantidad_red:"",
      color_mapa:"",

  
    }
  constructor() { }

  ngOnInit() {
  }
  grabar(){}
}
