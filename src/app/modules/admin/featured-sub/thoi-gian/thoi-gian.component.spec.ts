import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThoiGianComponent } from './thoi-gian.component';

describe('ThoiGianComponent', () => {
  let component: ThoiGianComponent;
  let fixture: ComponentFixture<ThoiGianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThoiGianComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThoiGianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
