import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrudEliminarMapaPage } from './crud-eliminar-mapa.page';

describe('CrudEliminarMapaPage', () => {
  let component: CrudEliminarMapaPage;
  let fixture: ComponentFixture<CrudEliminarMapaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CrudEliminarMapaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
