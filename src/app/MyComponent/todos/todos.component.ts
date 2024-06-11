import { Component } from '@angular/core';
import { Todo } from "../../Todo";
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
    todos:Todo[];
    constructor(){
      this.todos = [
        {
          sno:1,
          title: "This is a title1",
          desc: "Description1",
          active: true 
        },
        {
          sno: 2,
          title: "This is a title2",
          desc: "Description2",
          active: true 
        },
        {
          sno: 3,
          title: "This is a title3",
          desc: "Description3",
          active: true 
        }
      ]
    }
      ngOnInit(): void{

    }
}
