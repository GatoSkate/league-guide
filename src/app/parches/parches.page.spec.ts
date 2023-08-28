import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParchesPage } from './parches.page';

describe('ParchesPage', () => {
  let component: ParchesPage;
  let fixture: ComponentFixture<ParchesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ParchesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
