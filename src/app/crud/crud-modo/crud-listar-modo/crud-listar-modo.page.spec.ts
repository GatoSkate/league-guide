import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrudListarModoPage } from './crud-listar-modo.page';

describe('CrudListarModoPage', () => {
  let component: CrudListarModoPage;
  let fixture: ComponentFixture<CrudListarModoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CrudListarModoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
