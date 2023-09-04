import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrudEliminarItemPage } from './crud-eliminar-item.page';

describe('CrudEliminarItemPage', () => {
  let component: CrudEliminarItemPage;
  let fixture: ComponentFixture<CrudEliminarItemPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CrudEliminarItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
