import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrudAgregarMapaPage } from './crud-agregar-mapa.page';

describe('CrudAgregarMapaPage', () => {
  let component: CrudAgregarMapaPage;
  let fixture: ComponentFixture<CrudAgregarMapaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CrudAgregarMapaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
