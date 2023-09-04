import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrudListarCampeonPage } from './crud-listar-campeon.page';

describe('CrudListarCampeonPage', () => {
  let component: CrudListarCampeonPage;
  let fixture: ComponentFixture<CrudListarCampeonPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CrudListarCampeonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
