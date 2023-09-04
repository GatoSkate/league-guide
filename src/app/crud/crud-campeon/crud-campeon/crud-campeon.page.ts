import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud-campeon',
  templateUrl: './crud-campeon.page.html',
  styleUrls: ['./crud-campeon.page.scss'],
})
export class CrudCampeonPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirectToAgregar() {
    this.router.navigate(['/crud-agregar-campeon']);
  }

  redirectToActualizar() {
    this.router.navigate(['/crud-actualizar-campeon']);
  }

  redirectToEliminar() {
    this.router.navigate(['/crud-eliminar-campeon']);
  }

  redirectToLeer() {
    this.router.navigate(['/crud-leer-campeon']);
  }

  redirectToListar() {
    this.router.navigate(['/crud-listar-campeon']);
  }

}
