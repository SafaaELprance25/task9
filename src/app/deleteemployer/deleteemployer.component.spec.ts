import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteemployerComponent } from './deleteemployer.component';

describe('DeleteemployerComponent', () => {
  let component: DeleteemployerComponent;
  let fixture: ComponentFixture<DeleteemployerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteemployerComponent]
    });
    fixture = TestBed.createComponent(DeleteemployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
