import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrudListarMapaPage } from './crud-listar-mapa.page';

describe('CrudListarMapaPage', () => {
  let component: CrudListarMapaPage;
  let fixture: ComponentFixture<CrudListarMapaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CrudListarMapaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
