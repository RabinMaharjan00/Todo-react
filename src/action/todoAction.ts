import { Dispatch } from 'redux';
import {ADD_TODO,REMOVE_TODO} from './actionType'

export const addTodo = (todo:Todo) => (dispatch:Dispatch) => {
    dispatch({
        type:ADD_TODO,
        payload:todo
    })
}

export const removeTodo = (todo:Todo) => (dispatch:Dispatch) => {
    dispatch({
        type:REMOVE_TODO,
        payload:todo
    })
}