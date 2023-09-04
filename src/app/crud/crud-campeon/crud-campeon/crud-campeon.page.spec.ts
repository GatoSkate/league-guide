import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrudCampeonPage } from './crud-campeon.page';

describe('CrudCampeonPage', () => {
  let component: CrudCampeonPage;
  let fixture: ComponentFixture<CrudCampeonPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CrudCampeonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
