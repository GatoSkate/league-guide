import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrudItemPage } from './crud-item.page';

describe('CrudItemPage', () => {
  let component: CrudItemPage;
  let fixture: ComponentFixture<CrudItemPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CrudItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
