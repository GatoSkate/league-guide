import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrudListarItemPage } from './crud-listar-item.page';

describe('CrudListarItemPage', () => {
  let component: CrudListarItemPage;
  let fixture: ComponentFixture<CrudListarItemPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CrudListarItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
