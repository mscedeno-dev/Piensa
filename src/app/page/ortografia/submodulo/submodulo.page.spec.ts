import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubmoduloPage } from './submodulo.page';

describe('SubmoduloPage', () => {
  let component: SubmoduloPage;
  let fixture: ComponentFixture<SubmoduloPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmoduloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
