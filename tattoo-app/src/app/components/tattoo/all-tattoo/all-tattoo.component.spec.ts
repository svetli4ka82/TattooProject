import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTattooComponent } from './all-tattoo.component';

describe('AllTattooComponent', () => {
  let component: AllTattooComponent;
  let fixture: ComponentFixture<AllTattooComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllTattooComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTattooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
