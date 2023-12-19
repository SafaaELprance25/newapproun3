import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MENUComponent } from './menu.component';

describe('MENUComponent', () => {
  let component: MENUComponent;
  let fixture: ComponentFixture<MENUComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MENUComponent]
    });
    fixture = TestBed.createComponent(MENUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
