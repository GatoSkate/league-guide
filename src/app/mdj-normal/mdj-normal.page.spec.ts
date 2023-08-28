import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MdjNormalPage } from './mdj-normal.page';

describe('MdjNormalPage', () => {
  let component: MdjNormalPage;
  let fixture: ComponentFixture<MdjNormalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MdjNormalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
