import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatemployerComponent } from './updatemployer.component';

describe('UpdatemployerComponent', () => {
  let component: UpdatemployerComponent;
  let fixture: ComponentFixture<UpdatemployerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatemployerComponent]
    });
    fixture = TestBed.createComponent(UpdatemployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
