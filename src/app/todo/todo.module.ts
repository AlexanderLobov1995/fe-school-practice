import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { TodoHeaderComponent } from './todo-header/todo-header.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';

@NgModule({
  declarations: [TodoComponent, TodoHeaderComponent, TodoListComponent, TodoItemComponent],
  imports: [
    CommonModule
  ],
  exports: [TodoComponent]
})
export class TodoModule { }
