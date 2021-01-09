import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { todoAdd } from '../../redux/actions';
import './style.css';

function AddTodo(props: any) {

  const dispatch = useDispatch();

  const [title, setTitle] = useState('');

  const AddTodo = () => {
    dispatch(todoAdd({ title }));
  }

  return (
    <div className="todo-add">
      <input value={title} onChange={(e) => { setTitle(e.target.value) }} />
      <button onClick={AddTodo}>Add</button>
    </div>
  );
}

export default AddTodo;
