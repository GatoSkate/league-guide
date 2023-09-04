import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar',
  templateUrl: './crud-listar-campeon.page.html',
  styleUrls: ['./crud-listar-campeon.page.scss'],
})
export class ListarClientePage {

  // Arreglo, de prueba, mientras se crean los servicios

  registros= [{id:"1",nombre:"Aatrox",titulo:"La Espada Darkin",descripcion:"Desc",habilidadq:"q",habilidadw:"w",habilidade:"e",habilidadr:"r"}
             ,{id:"2",nombre:"Ahri",titulo:"La Vastaya de Nueve Colas"}
             ,{id:"3",nombre:"Akali",titulo:"La Asesina Furtiva"}
             ,{id:"4",nombre:"Akshan",titulo:"El Centinela Rebelde"}
             ,{id:"5",nombre:"Alistar",titulo:"El Minotauro"}]

  constructor() { }

}