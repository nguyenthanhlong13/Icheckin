import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViTriComponent } from './vi-tri.component';

describe('ViTriComponent', () => {
  let component: ViTriComponent;
  let fixture: ComponentFixture<ViTriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViTriComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViTriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
