import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrudAgregarItemPage } from './crud-agregar-item.page';

describe('CrudAgregarItemPage', () => {
  let component: CrudAgregarItemPage;
  let fixture: ComponentFixture<CrudAgregarItemPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CrudAgregarItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
