import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { Todo } from '../../state/todo/todo.model';

@Injectable()
export class TodoService {
    private todoUrl = 'api/todos';
    constructor(private httpClient: HttpClient) { }

    getTodos(): Observable<Array<Todo>> {
        return this.httpClient.get<Todo[]>(this.todoUrl);
    }

    getTodo(id: number): Observable<Todo> {
        return this.getTodos().pipe(
            map(todos => todos.find(todo => todo.id === id))
        );
    }

    save(todo: Todo): Observable<Todo> {
        if (todo.id) {
            return this.put(todo);
        }
        return this.post(todo);
    }

    delete(todo: Todo): Observable<Todo> {
        const url = `${this.todoUrl}/${todo.id}`;

        return this.httpClient
            .delete<void>(url)
            .pipe(switchMap(() => of(todo)));
    }

    private post(todo: Todo): Observable<Todo> {
        return this.httpClient.post<Todo>(this.todoUrl, todo);
    }


    private put(todo: Todo): Observable<Todo> {
        const url = `${this.todoUrl}/${todo.id}`;

        return this.httpClient
            .put(url, todo)
            .pipe(switchMap(() => of(todo)));
    }
}