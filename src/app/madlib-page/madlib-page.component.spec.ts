import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MadlibPageComponent } from './madlib-page.component';

describe('MadlibPageComponent', () => {
  let component: MadlibPageComponent;
  let fixture: ComponentFixture<MadlibPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MadlibPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MadlibPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
