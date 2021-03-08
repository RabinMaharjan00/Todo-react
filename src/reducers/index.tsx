import {combineReducers} from 'redux'
import { TodoReducer } from './todoReducer';

const rootReducer = combineReducers({
  todoList: TodoReducer
});

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>;