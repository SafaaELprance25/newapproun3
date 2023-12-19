import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CONTACTusComponent } from './contactus.component';

describe('CONTACTusComponent', () => {
  let component: CONTACTusComponent;
  let fixture: ComponentFixture<CONTACTusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CONTACTusComponent]
    });
    fixture = TestBed.createComponent(CONTACTusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
