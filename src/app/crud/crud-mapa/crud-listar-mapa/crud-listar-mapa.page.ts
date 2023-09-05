import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-listar-mapa',
  templateUrl: './crud-listar-mapa.page.html',
  styleUrls: ['./crud-listar-mapa.page.scss'],
})
export class CrudListarMapaPage implements OnInit {

  constructor() { }

  registros= [{id:"1",nombre:"Mapa Normal ",titulo:"Modo de juego 5 vs 5",descripcion:"Desc",habilidadq:"q",habilidadw:"w",habilidade:"e",habilidadr:"r"}
  ,{id:"2",nombre:"Mapa URF",titulo:"Modo dinamico y rapido 5 vs 5"}
  ,{id:"3",nombre:"Aram",titulo:"Modo solo 1 camino 5 vs 5"}
  ,{id:"4",nombre:"Modo Arena",titulo:"Modo de equipos 2 vs 2 vs 2 vs 2"}
  ,{id:"5",nombre:"Bosque Retorcido",titulo:"Modo de juego 3 vs 3"}]

  ngOnInit() {
  }

}
