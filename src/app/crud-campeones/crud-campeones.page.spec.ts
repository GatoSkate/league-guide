import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrudCampeonesPage } from './crud-campeones.page';

describe('CrudCampeonesPage', () => {
  let component: CrudCampeonesPage;
  let fixture: ComponentFixture<CrudCampeonesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CrudCampeonesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
