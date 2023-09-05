import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-leer-mapa',
  templateUrl: './crud-leer-mapa.page.html',
  styleUrls: ['./crud-leer-mapa.page.scss'],
})
export class CrudLeerMapaPage implements OnInit {
  
  msgError = ""
  buttonEliminarDisabled = false
  buttonLeerDisabled = false
  buttonActualizarDisabled = false
  buttonCrearDisabled = false
  public id: String = '';
  registro = {
      id:"",
  nombre_mapa:"",
  titulo:"",
  descripcion:"",
  cantidad_blue:"",
  cantidad_red:"",
  color_mapa:"",
  }



  constructor() { }

  leer() { }
  eliminar() { }
  grabar() { }
  actualizar() { }
  grabarActualizarAutomatico() { }

  ngOnInit() {
  }

}
