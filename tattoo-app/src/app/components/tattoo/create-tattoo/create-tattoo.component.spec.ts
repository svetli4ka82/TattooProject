import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTattooComponent } from './create-tattoo.component';

describe('CreateTattooComponent', () => {
  let component: CreateTattooComponent;
  let fixture: ComponentFixture<CreateTattooComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTattooComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTattooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
