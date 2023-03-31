import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyIdeasComponent } from './key-ideas.component';

describe('KeyIdeasComponent', () => {
  let component: KeyIdeasComponent;
  let fixture: ComponentFixture<KeyIdeasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyIdeasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyIdeasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
