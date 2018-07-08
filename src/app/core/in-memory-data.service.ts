import { Todo } from '../state/todo/todo.model';

export class InMemoryDataService {
    createDb() {
        const todos: Array<Todo> = [
            { id: 1, name: "Shopping" },
            { id: 2, name: "Meeting" }
        ];

        return { todos };
    }
}