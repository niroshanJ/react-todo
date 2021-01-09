import React from 'react';
import { useDispatch } from 'react-redux';
import { todoDelete, todoDone } from '../../redux/actions';
import './style.css';

// atomic component
function Todo(props: any) {

  const dispatch = useDispatch();

  const deleteTodo = (id: number) => {
    dispatch(todoDelete(id));
  }

  const updateTodo = (id: number) => {
    dispatch(todoDone(id));
  }

  return (
    <div className="todo">
      <p>{props.todo.title} - {props.todo.isDone ? 'Done' : 'Pending'}</p>
      <button onClick={() => { deleteTodo(props.todo.id) }}>x</button>
      <button onClick={() => { updateTodo(props.todo.id) }}>Done</button>
    </div>
  );
}

export default Todo;
