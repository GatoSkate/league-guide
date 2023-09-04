import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-crud-modo',
  templateUrl: './crud-modo.page.html',
  styleUrls: ['./crud-modo.page.scss'],
})
export class CrudModoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirectToAgregar() {
    this.router.navigate(['/crud-agregar-modo']);
  }

  redirectToActualizar() {
    this.router.navigate(['/crud-modificar-modo']);
  }

  redirectToEliminar() {
    this.router.navigate(['/crud-eliminar-modo']);
  }

  redirectToLeer() {
    this.router.navigate(['/crud-leer-modo']);
  }

  redirectToListar() {
    this.router.navigate(['/crud-listar-modo']);
  }

}
