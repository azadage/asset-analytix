import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskoptimizationComponent } from './taskoptimization.component';

describe('TaskoptimizationComponent', () => {
  let component: TaskoptimizationComponent;
  let fixture: ComponentFixture<TaskoptimizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskoptimizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskoptimizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
