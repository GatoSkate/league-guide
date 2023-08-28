import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CampeonAatroxPage } from './campeon-aatrox.page';

describe('CampeonAatroxPage', () => {
  let component: CampeonAatroxPage;
  let fixture: ComponentFixture<CampeonAatroxPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CampeonAatroxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
