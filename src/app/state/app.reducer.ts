import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import * as fromTodo from './todo/todo.reducer';

export interface AppState {
    todo: fromTodo.State;
}
export const appReducer: ActionReducerMap<AppState> = {
    todo: fromTodo.reducer
};
