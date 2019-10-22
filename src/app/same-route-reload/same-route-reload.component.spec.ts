import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SameRouteReloadComponent } from './same-route-reload.component';

describe('SameRouteReloadComponent', () => {
  let component: SameRouteReloadComponent;
  let fixture: ComponentFixture<SameRouteReloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SameRouteReloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SameRouteReloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
