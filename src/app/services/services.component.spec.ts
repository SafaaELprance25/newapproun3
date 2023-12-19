import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SERVICESComponent } from './services.component';

describe('SERVICESComponent', () => {
  let component: SERVICESComponent;
  let fixture: ComponentFixture<SERVICESComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SERVICESComponent]
    });
    fixture = TestBed.createComponent(SERVICESComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
