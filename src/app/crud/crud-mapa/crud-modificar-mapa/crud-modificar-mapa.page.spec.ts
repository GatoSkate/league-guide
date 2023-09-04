import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrudModificarMapaPage } from './crud-modificar-mapa.page';

describe('CrudModificarMapaPage', () => {
  let component: CrudModificarMapaPage;
  let fixture: ComponentFixture<CrudModificarMapaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CrudModificarMapaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
