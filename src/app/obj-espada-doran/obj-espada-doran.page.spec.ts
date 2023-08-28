import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ObjEspadaDoranPage } from './obj-espada-doran.page';

describe('ObjEspadaDoranPage', () => {
  let component: ObjEspadaDoranPage;
  let fixture: ComponentFixture<ObjEspadaDoranPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ObjEspadaDoranPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
