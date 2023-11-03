import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoNgContainerComponent } from './demo-ng-container.component';

describe('DemoNgContainerComponent', () => {
  let component: DemoNgContainerComponent;
  let fixture: ComponentFixture<DemoNgContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoNgContainerComponent]
    });
    fixture = TestBed.createComponent(DemoNgContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
