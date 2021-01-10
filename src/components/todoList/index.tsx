import React from 'react';
import Todo from '../todo';
import { useDispatch } from 'react-redux';
import { todoDelete, todoDone } from '../../redux/actions';
import './style.css';

//  Molecule component
function TodoList(props: any) {

  const dispatch = useDispatch();

  const deleteTodoHandler = (id: number) => {
    dispatch(todoDelete(id));
  }

  const updateTodoHandler = (id: number) => {
    dispatch(todoDone(id));
  }

  return (
    <div className="todo-list">
      {props.todos.map((todo: any) => { return <Todo deleteTodo={() => { deleteTodoHandler(todo.id) }} updateTodo={() => { updateTodoHandler(todo.id) }} key={todo.id} todo={todo} /> })}
    </div>
  );
}

export default TodoList;
