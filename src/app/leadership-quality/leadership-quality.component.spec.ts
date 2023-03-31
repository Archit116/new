import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadershipQualityComponent } from './leadership-quality.component';

describe('LeadershipQualityComponent', () => {
  let component: LeadershipQualityComponent;
  let fixture: ComponentFixture<LeadershipQualityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadershipQualityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeadershipQualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
