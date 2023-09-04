import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrudModificarModoPage } from './crud-modificar-modo.page';

describe('CrudModificarModoPage', () => {
  let component: CrudModificarModoPage;
  let fixture: ComponentFixture<CrudModificarModoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CrudModificarModoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
