import React from 'react';
import AddTodo from '../addTodo';
import TodoList from '../todoList';
import { useSelector } from 'react-redux';
import './style.css';

function App() {

  const todoList = useSelector((state: any) => { return state.todo });

  return (
    <div className="App">
      <AddTodo />
      <TodoList todos={todoList} />
    </div>
  );
}

export default App;
