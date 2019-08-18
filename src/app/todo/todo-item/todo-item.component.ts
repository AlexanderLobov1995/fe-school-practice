import {Component, Input} from '@angular/core';
import {Todo} from '../todo.interfaces';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() item: Todo;

  selectItem(item: Todo): void {
    alert(item.description);
  }
}
