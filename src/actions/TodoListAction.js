export function getData(state){
    return state.TodoList.data
}

export function setData(data){
    return{
        type:"set-todo-list-data",
        payload:data
    };
}

export function addTodoListData(data){
    return{
        type:"add-todo-list-data",
        payload:data
    };
}

export function deleteTodoListData(data){
    return{
        type:"delete-todo-list-data",
        payload:data
    };
}

export function updateTodoListData(data){
    return{
        type:"update-todo-list-data",
        payload:data
    };
}
