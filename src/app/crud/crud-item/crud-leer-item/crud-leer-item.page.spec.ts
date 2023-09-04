import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrudLeerItemPage } from './crud-leer-item.page';

describe('CrudLeerItemPage', () => {
  let component: CrudLeerItemPage;
  let fixture: ComponentFixture<CrudLeerItemPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CrudLeerItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
