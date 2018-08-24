import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTattooComponent } from './my-tattoo.component';

describe('MyTattooComponent', () => {
  let component: MyTattooComponent;
  let fixture: ComponentFixture<MyTattooComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTattooComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTattooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
