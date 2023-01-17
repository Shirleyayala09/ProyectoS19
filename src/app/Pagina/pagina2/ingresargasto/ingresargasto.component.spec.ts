import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresargastoComponent } from './ingresargasto.component';

describe('IngresargastoComponent', () => {
  let component: IngresargastoComponent;
  let fixture: ComponentFixture<IngresargastoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresargastoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngresargastoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
