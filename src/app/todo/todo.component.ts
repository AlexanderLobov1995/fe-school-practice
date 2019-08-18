import { Component } from '@angular/core';
import {Todo} from './todo.interfaces';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  ownerName = 'Ivan Ivanov';
  todos: Todo[] = [
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

  selectTodo (todo: Todo): void {
    alert(todo.description);
  }
}
