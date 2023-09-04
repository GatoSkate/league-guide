import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrudEliminarModoPage } from './crud-eliminar-modo.page';

describe('CrudEliminarModoPage', () => {
  let component: CrudEliminarModoPage;
  let fixture: ComponentFixture<CrudEliminarModoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CrudEliminarModoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
