import React from 'react'
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { removeTodo } from '../../action/todoAction';


interface Props {
    todo: Todo,
    index:number;
}
const Todo = (props: Props): React.ReactElement => {

    
     const dispatch:Dispatch<any> = useDispatch()

     const handleDelete = (data:Todo) => {
         dispatch(removeTodo(data));
     } 

     const handleCompleteTodo = (data:Todo) => {
         dispatch({
           type: "COMPLETE_TODO",
           payload:data
         });
     }
    const { todo,index } = props
    return (
      <>
        <div className="todo">
          <div
            style={{
              textDecoration: todo.completed === true ? "line-through" : "",
            }}
          >
            {index + 1} &nbsp;&nbsp; {todo.text}
          </div>
         
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <input
                    type="checkbox"
                    name="todo"
                    aria-label="Checkbox for complete task"
                    disabled={todo.completed}
                    onClick={() => handleCompleteTodo(todo)}
                  />
                 
                </div>
                <button
                  type="submit"
                  className="btn btn-danger btn-sm ml-2"
                  disabled={!todo.completed}
                  onClick={() => handleDelete(todo)}
                >
                  <i className="fas fa-trash-alt fa-xs"></i>
                </button>
              </div>
           
        </div>
      </>
    );

}

export default Todo
