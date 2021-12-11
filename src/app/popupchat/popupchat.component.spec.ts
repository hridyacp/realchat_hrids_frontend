import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupchatComponent } from './popupchat.component';

describe('PopupchatComponent', () => {
  let component: PopupchatComponent;
  let fixture: ComponentFixture<PopupchatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupchatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
