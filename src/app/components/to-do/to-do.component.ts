import { Component, OnInit } from '@angular/core';
import { ToDoItem } from 'src/app/models/ToDoItem';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})

export class ToDoComponent implements OnInit {

  todos:ToDoItem[]
  toDoInput:string = ''

  constructor() { }

  ngOnInit(): void {
    this.todos = []
  }

  toggleDone (id:number):void {
    this.todos.map((el, index) => {
      if(index === id) el.completed = !el.completed
      return el
    })
  }

  deleteToDo (id:number):void {
    this.todos = this.todos.filter((el, index) => index !== id
    )
  }

  addToDo():void {
    this.todos.push({
      content: this.toDoInput,
      completed: false
    })
    this.toDoInput = ''
  }
}
