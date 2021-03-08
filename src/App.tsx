import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header/Header';
import TodoForm from './components/TodoForm/TodoForm';
import Todo from './components/Todo/Todo'
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { addTodo } from './action/todoAction';
import { RootState } from './reducers';
import Footer from './components/Footer/Footer';

function App():React.ReactElement {
  const todos = useSelector((state:RootState) => state.todoList);
  const dispatch:Dispatch<any> = useDispatch()
  const addTodos = (todo:Todo) => {
    dispatch(addTodo(todo))
  }
  return (
    <div className="App">
      <Header />
      {todos.todo?.length > 0 && (
        <div className="todo-list mt-4">
          {todos?.todo?.map((data,index) => (
            <Todo todo={data} key={data.id} index={index} />
          ))}
        </div>
      )}
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <div className="input-group mb-3">
            <TodoForm saveTodo={addTodos} />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
