import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditemployerComponent } from './editemployer.component';

describe('EditemployerComponent', () => {
  let component: EditemployerComponent;
  let fixture: ComponentFixture<EditemployerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditemployerComponent]
    });
    fixture = TestBed.createComponent(EditemployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
