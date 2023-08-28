import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-campeones',
  templateUrl: './admin-campeones.page.html',
  styleUrls: ['./admin-campeones.page.scss'],
})
export class AdminCampeonesPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirectToCrudCampeones() {
    this.router.navigate(['/crud-campeones']);
  }

}
