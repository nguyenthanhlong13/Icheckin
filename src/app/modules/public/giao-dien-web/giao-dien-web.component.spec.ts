import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiaoDienWebComponent } from './giao-dien-web.component';

describe('GiaoDienWebComponent', () => {
  let component: GiaoDienWebComponent;
  let fixture: ComponentFixture<GiaoDienWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GiaoDienWebComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GiaoDienWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
