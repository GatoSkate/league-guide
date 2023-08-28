import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RunaPrecisionPage } from './runa-precision.page';

describe('RunaPrecisionPage', () => {
  let component: RunaPrecisionPage;
  let fixture: ComponentFixture<RunaPrecisionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RunaPrecisionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
