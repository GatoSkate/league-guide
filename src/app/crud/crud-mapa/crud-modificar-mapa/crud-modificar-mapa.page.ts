import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-modificar-mapa',
  templateUrl: './crud-modificar-mapa.page.html',
  styleUrls: ['./crud-modificar-mapa.page.scss'],
})
export class CrudModificarMapaPage implements OnInit {

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
