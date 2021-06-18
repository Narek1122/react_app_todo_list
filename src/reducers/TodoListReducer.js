


export function TodoListReducer(state = {}, action) {
    switch (action.type){
        case 'set-todo-list-data':
            return{
                ...state,
                data:[...action.payload]
            }
            break;
        case 'add-todo-list-data':
            return{
                data:[...state.data,action.payload]
            }
            break;
        case 'delete-todo-list-data':
            return{
                data:[...action.payload]
            }
            break;
        case 'update-todo-list-data':
            return{
                data:[...action.payload]
            }
            break;
    }

    return state
}