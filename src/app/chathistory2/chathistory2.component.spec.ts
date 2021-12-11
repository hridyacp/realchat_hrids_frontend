import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chathistory2Component } from './chathistory2.component';

describe('Chathistory2Component', () => {
  let component: Chathistory2Component;
  let fixture: ComponentFixture<Chathistory2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chathistory2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chathistory2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
