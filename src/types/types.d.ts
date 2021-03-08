interface Todo {
    id:string,
    text:string,
    completed:boolean;
}

interface TodoState {
    todo: Todo[]
}

interface TodoAction {
    type:string,
    payload:Todo
}
