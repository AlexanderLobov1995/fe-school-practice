import { Component } from '@angular/core';
import {Todo} from '../todo.interfaces';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  todoItems: Todo[] = [
    {
      id: 1,
      name: 'Buy food',
      description: 'Buy food description'
    },
    {
      id: 2,
      name: 'Pay for internet',
      description: 'Pay for internet description'
    },
    {
      id: 3,
      name: 'Clean the house',
      description: 'Clean the house description'
    },
    {
      id: 4,
      name: 'Walk the dog',
      description: 'Walk the dog description'
    }
  ];

}
