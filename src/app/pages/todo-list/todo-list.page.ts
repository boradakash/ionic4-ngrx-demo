import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";

import { Todo } from "../../state/todo/todo.model";

import { Store } from "@ngrx/store";
import { AppState } from '../../state/app.reducer';

import * as fromStore from '../../state/app.reducer';
import * as fromTodo from '../../state/todo/todo.actions';
import { getAllTodos, getLoading, getError } from '../../state/todo';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.page.html',
  styleUrls: ['./todo-list.page.scss'],
})
export class TodoListPage implements OnInit {
  todos$: Observable<Array<Todo>>
  loading$: Observable<boolean>;
  error$: Observable<string>;

  constructor(private store: Store<fromStore.AppState>) {
    this.todos$ = this.store.select(getAllTodos);
    this.loading$ = this.store.select(getLoading);
    this.error$ = this.store.select(getError);
  }

  ngOnInit() {
    this.store.dispatch(new fromTodo.GetAllTodos());
  }

}
