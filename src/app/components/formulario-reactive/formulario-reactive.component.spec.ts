import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioReactiveComponent } from './formulario-reactive.component';

describe('FormularioReactiveComponent', () => {
  let component: FormularioReactiveComponent;
  let fixture: ComponentFixture<FormularioReactiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioReactiveComponent]
    });
    fixture = TestBed.createComponent(FormularioReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
