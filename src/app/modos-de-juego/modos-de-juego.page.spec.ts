import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModosDeJuegoPage } from './modos-de-juego.page';

describe('ModosDeJuegoPage', () => {
  let component: ModosDeJuegoPage;
  let fixture: ComponentFixture<ModosDeJuegoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModosDeJuegoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
