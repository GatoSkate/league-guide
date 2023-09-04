import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrudEliminarCampeonPage } from './crud-eliminar-campeon.page';

describe('CrudEliminarCampeonPage', () => {
  let component: CrudEliminarCampeonPage;
  let fixture: ComponentFixture<CrudEliminarCampeonPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CrudEliminarCampeonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
