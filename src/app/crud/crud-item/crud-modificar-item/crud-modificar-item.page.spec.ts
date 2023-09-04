import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrudModificarItemPage } from './crud-modificar-item.page';

describe('CrudModificarItemPage', () => {
  let component: CrudModificarItemPage;
  let fixture: ComponentFixture<CrudModificarItemPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CrudModificarItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
