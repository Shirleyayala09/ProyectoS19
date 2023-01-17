import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginapComponent } from './paginap.component';

describe('PaginapComponent', () => {
  let component: PaginapComponent;
  let fixture: ComponentFixture<PaginapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
