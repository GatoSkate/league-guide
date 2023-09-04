import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrudModoPage } from './crud-modo.page';

describe('CrudModoPage', () => {
  let component: CrudModoPage;
  let fixture: ComponentFixture<CrudModoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CrudModoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
