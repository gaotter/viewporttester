import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewportinfoComponent } from './viewportinfo.component';

describe('ViewportinfoComponent', () => {
  let component: ViewportinfoComponent;
  let fixture: ComponentFixture<ViewportinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewportinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewportinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
