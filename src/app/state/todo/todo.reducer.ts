import * as fromTodo from "./todo.actions";
import { Todo } from './todo.model';

export interface State {
    todos: Todo[],
    loading: boolean;
    error: string;
}

export const initialState: State = {
    todos: [],
    loading: false,
    error: ''
};

export function reducer(state = initialState, action: fromTodo.TodoActions): State {
    switch (action.type) {

        case fromTodo.GET_ALL_TODOS: {
            return {
                ...state,
                loading: true
            };
        }

        case fromTodo.GET_ALL_TODOS_SUCCESS: {
            return {
                ...state,
                loading: false,
                todos:action.payload
            };
        }

        case fromTodo.GET_ALL_TODOS_FAIL: {
            return {
                ...state,
                loading: false,
                error: 'error loading todos'
            };
        }

        case fromTodo.GET_TODO: {
            return {
                ...state,
                loading: true
            };
        }

        case fromTodo.GET_TODO_SUCCESS: {
            return {
                ...state,
                loading: false
            };
        }

        case fromTodo.GET_TODO_FAIL: {
            return {
                ...state,
                loading: false,
                error: 'error loading todo'
            };
        }

        default: {
            return state;
        }
    }
}

export const getAllTodos = (state: State) => state.todos;
export const getLoading = (state: State) => state.loading;
export const getError = (state: State) => state.error;
