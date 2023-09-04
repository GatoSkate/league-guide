import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrudMapaPage } from './crud-mapa.page';

describe('CrudMapaPage', () => {
  let component: CrudMapaPage;
  let fixture: ComponentFixture<CrudMapaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CrudMapaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
