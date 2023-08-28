import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RunasPage } from './runas.page';

describe('RunasPage', () => {
  let component: RunasPage;
  let fixture: ComponentFixture<RunasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RunasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
