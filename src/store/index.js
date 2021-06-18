import {createStore,combineReducers} from "redux";
import {TodoListReducer}from '../reducers/TodoListReducer'


const combReducers = combineReducers({
    TodoList:TodoListReducer
})

export const store = createStore(combReducers)