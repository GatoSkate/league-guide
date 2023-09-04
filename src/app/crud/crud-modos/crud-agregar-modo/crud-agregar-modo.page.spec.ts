import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrudAgregarModoPage } from './crud-agregar-modo.page';

describe('CrudAgregarModoPage', () => {
  let component: CrudAgregarModoPage;
  let fixture: ComponentFixture<CrudAgregarModoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CrudAgregarModoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
