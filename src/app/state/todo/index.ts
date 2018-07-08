import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromTodos from './todo.reducer';
import { State as TodoState } from './todo.reducer';

export const getTodosState = createFeatureSelector<TodoState>('todo');

export const getAllTodos = createSelector(
    getTodosState,
    fromTodos.getAllTodos
  );

export const getLoading = createSelector(
  getTodosState,
  fromTodos.getLoading
);

export const getError = createSelector(
  getTodosState,
  fromTodos.getError
);