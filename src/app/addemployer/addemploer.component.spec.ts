import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddemploerComponent } from './addemploer.component';

describe('AddemploerComponent', () => {
  let component: AddemploerComponent;
  let fixture: ComponentFixture<AddemploerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddemploerComponent]
    });
    fixture = TestBed.createComponent(AddemploerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
