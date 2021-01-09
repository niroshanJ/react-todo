import React from 'react';
import Todo from '../todo';
import './style.css';

//  Molecule component
function TodoList(props: any) {
  return (
    <div className="todo-list">
      {props.todos.map((todo: any) => { return <Todo key={todo.id} todo={todo} /> })}
    </div>
  );
}

export default TodoList;
