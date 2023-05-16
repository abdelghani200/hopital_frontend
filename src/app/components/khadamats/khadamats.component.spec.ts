import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhadamatsComponent } from './khadamats.component';

describe('KhadamatsComponent', () => {
  let component: KhadamatsComponent;
  let fixture: ComponentFixture<KhadamatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KhadamatsComponent]
    });
    fixture = TestBed.createComponent(KhadamatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
