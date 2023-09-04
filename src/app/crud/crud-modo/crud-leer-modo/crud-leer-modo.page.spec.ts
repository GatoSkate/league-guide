import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrudLeerModoPage } from './crud-leer-modo.page';

describe('CrudLeerModoPage', () => {
  let component: CrudLeerModoPage;
  let fixture: ComponentFixture<CrudLeerModoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CrudLeerModoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
