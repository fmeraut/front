import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneGuideComponent } from './one-guide.component';

describe('OneGuideComponent', () => {
  let component: OneGuideComponent;
  let fixture: ComponentFixture<OneGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
