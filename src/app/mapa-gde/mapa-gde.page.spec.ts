import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapaGdePage } from './mapa-gde.page';

describe('MapaGdePage', () => {
  let component: MapaGdePage;
  let fixture: ComponentFixture<MapaGdePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MapaGdePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
