import { Component, OnInit } from '@angular/core';
import { ToDoItem } from 'src/app/models/ToDoItem';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})

export class ToDoComponent implements OnInit {

  saved: any
  todos: ToDoItem []
  toDoInput: string = ''
  errorText: string = ''
  edit:boolean = false
  editId: number = 0
  setLS = () => {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  constructor() {
    this.saved = localStorage.getItem('todos')
   }

  ngOnInit(): void {
    this.todos = JSON.parse(this.saved) || [];
  }

  toggleDone (id:number):void {
    this.todos.map((el, index) => {
      if(index === id) el.completed = !el.completed
      this.setLS()
      return el
    })
  }

  deleteToDo (id:number):void {
    this.todos = this.todos.filter((el, index) => index !== id
    )
    this.setLS()
  }

  setEditToDo (el:ToDoItem) {
    this.edit = true
    this.toDoInput = el.content
    this.editId = el.id
  }

  editToDo ():any {
    if(!this.toDoInput) {
      this.errorText = 'do not set empty todo'
      return setTimeout(() => {
        this.errorText = ''
      }, 3000)
    }
    this.todos.forEach((el) => {
      if(el.id === this.editId){
        el.content = this.toDoInput
      }
    })
    this.edit = false
    this.editId = 0
    this.toDoInput = ''
    this.setLS()
  }

  addToDo():any {
    if(!this.toDoInput) {
      this.errorText = 'do not set empty todo'
      return setTimeout(() => {
        this.errorText = ''
      }, 3000)
    }
    this.todos.push({
      content: this.toDoInput,
      completed: false,
      id: this.todos.length + 1
    })
    this.toDoInput = ''
    this.errorText = ''
    this.setLS()
  }
}
