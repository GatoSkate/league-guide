import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminCampeonesPage } from './admin-campeones.page';

describe('AdminCampeonesPage', () => {
  let component: AdminCampeonesPage;
  let fixture: ComponentFixture<AdminCampeonesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdminCampeonesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
