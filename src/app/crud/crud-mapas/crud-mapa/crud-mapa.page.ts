import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud-mapa',
  templateUrl: './crud-mapa.page.html',
  styleUrls: ['./crud-mapa.page.scss'],
})
export class CrudMapaPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirectToAgregar() {
    this.router.navigate(['/crud-agregar-mapa']);
  }

  redirectToActualizar() {
    this.router.navigate(['/crud-modificar-mapa']);
  }

  redirectToEliminar() {
    this.router.navigate(['/crud-eliminar-mapa']);
  }

  redirectToLeer() {
    this.router.navigate(['/crud-leer-mapa']);
  }

  redirectToListar() {
    this.router.navigate(['/crud-listar-mapa']);
  }

}
