import { COMPLETE_TODO } from './../action/actionType';

import {ADD_TODO,REMOVE_TODO} from '../action/actionType'

const initialState:TodoState = {
    todo:[]
}

export const TodoReducer = (state:TodoState = initialState,action:TodoAction) => {
    switch(action.type) {
        case ADD_TODO:
            const newTodo:Todo = {
                id:action.payload.id,
                text:action.payload.text,
                completed:action.payload.completed
            }
            return {
                ...state,
                todo:[...state.todo,newTodo]
            }
        case COMPLETE_TODO:
             const completeId = action.payload.id;
             const index = state.todo?.findIndex(
               (index) => index.id === completeId
             );
             state.todo[index].completed = true
            return {
                ...state,
                todo:state.todo
            }
        case REMOVE_TODO:
            const {id} = action.payload
            const dataIndex = state.todo?.findIndex(index => index.id === id)
            state.todo?.splice(dataIndex,1)
            return {
                ...state,
                todo:state.todo
            }
        default:
            return state
    }
}