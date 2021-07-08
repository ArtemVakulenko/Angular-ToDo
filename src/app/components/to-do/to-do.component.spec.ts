import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoComponent } from './to-do.component';

describe('ToDoComponent', () => {
  let component: ToDoComponent;
  let fixture: ComponentFixture<ToDoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
    it(`should have as todos []`, () => {
    const fixture = TestBed.createComponent(ToDoComponent);
    const app = fixture.componentInstance;
    expect(app.todos).toEqual([]);
  });
  // it('should render todos', () => {
  //   const fixture = TestBed.createComponent(ToDoComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain('angular-todo app is running!');
  // });
});
