import { Component, Input , OnInit} from '@angular/core';
import {Todo} from '../../Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
    @Input() todo!: Todo;
    constructor(){

    }
    ngOnInit():void{

    }
}
