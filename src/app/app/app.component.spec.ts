import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APPComponent } from './app.component';

describe('APPComponent', () => {
  let component: APPComponent;
  let fixture: ComponentFixture<APPComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [APPComponent]
    });
    fixture = TestBed.createComponent(APPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
