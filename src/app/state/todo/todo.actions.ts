import { Action } from "@ngrx/store";
import { Todo } from "./todo.model";

export const GET_ALL_TODOS = '[TODO] Get All Todos';
export const GET_ALL_TODOS_SUCCESS = '[TODO] Get All Todos Success';
export const GET_ALL_TODOS_FAIL = '[TODO] Get All Todos Fail';

export const GET_TODO = '[TODO] Get Todo';
export const GET_TODO_SUCCESS = '[TODO] Get Todo Success';
export const GET_TODO_FAIL = '[TODO] Get Todo Fail';

//Get Todo List
export class GetAllTodos implements Action {
    readonly type = GET_ALL_TODOS;
}

export class GetAllTodosSuccess implements Action {
    readonly type = GET_ALL_TODOS_SUCCESS;
    constructor(public payload: Todo[]) { }
}

export class GetAllTodosFail implements Action {
    readonly type = GET_ALL_TODOS_FAIL;
    constructor(public payload: any) { }
}

//Get todo by id
export class GetTodo implements Action {
    readonly type = GET_TODO;
    constructor(public payload: number) { }
}

export class GetTodoSuccess implements Action {
    readonly type = GET_TODO_SUCCESS;
    constructor(public payload: Todo) { }
}

export class GetTodoFail implements Action {
    readonly type = GET_TODO_FAIL;
    constructor(public payload: any) { }
}

export type TodoActions =
    GetAllTodos
    | GetAllTodosSuccess
    | GetAllTodosFail
    | GetTodo
    | GetTodoSuccess
    | GetTodoFail;