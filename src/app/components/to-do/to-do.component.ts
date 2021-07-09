import { Component, OnInit } from '@angular/core';
import { ToDoItem } from 'src/app/models/ToDoItem';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})

export class ToDoComponent implements OnInit {

  saved: ToDoItem []
  todos: ToDoItem []
  toDoInput: string = ''
  errorText: string = ''
  edit:boolean = false
  editId: number = 0

  constructor() { }

  ngOnInit(): void {
    // this.saved = localStorage.getItem('todos')
    // this.todos = this.saved || []
    let ak = localStorage.getItem('todos')
    // console.log((localStorage.getItem('todos')).json())
    console.log("ak", ak)

  // this.todos = (localStorage.getItem('todos')!== null) ? JSON.parse(this.saved) : [];
	// localStorage.setItem('todos', JSON.stringify(this.todos));
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
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
