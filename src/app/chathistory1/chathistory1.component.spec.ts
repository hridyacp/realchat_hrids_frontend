import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chathistory1Component } from './chathistory1.component';

describe('Chathistory1Component', () => {
  let component: Chathistory1Component;
  let fixture: ComponentFixture<Chathistory1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chathistory1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chathistory1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
