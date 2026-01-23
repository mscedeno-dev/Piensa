import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GramaticaPage } from './gramatica.page';

describe('GramaticaPage', () => {
  let component: GramaticaPage;
  let fixture: ComponentFixture<GramaticaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GramaticaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
