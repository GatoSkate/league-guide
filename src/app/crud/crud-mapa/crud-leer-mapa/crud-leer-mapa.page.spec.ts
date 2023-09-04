import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrudLeerMapaPage } from './crud-leer-mapa.page';

describe('CrudLeerMapaPage', () => {
  let component: CrudLeerMapaPage;
  let fixture: ComponentFixture<CrudLeerMapaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CrudLeerMapaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
