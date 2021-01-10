import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { todoAdd } from '../../redux/actions';
import { Form, Input } from 'antd';
import './style.css';

function AddTodo(props: any) {

  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [canAdded, setCanAdded] = useState(false);

  const AddTodo = (event: any) => {
    if (event.keyCode === 13) {
      dispatch(todoAdd({ title }));
      setTitle('');
      setCanAdded(false);
    }
  }

  const todoHandler = (value: any) => {
    setTitle(value);
    if (value.length > 0) {
      setCanAdded(true);
    } else {
      setCanAdded(false);
    }
  }

  return (
    <div className="todo-add">
      <Form layout="horizontal">
        <Form.Item style={{ marginTop: '20px' }}>
          <Input onKeyDown={(e: any) => { AddTodo(e) }} style={{ width: '100%' }} size="large" placeholder="Type your ToDo" value={title} onChange={(e) => { todoHandler(e.target.value) }} />
          {canAdded ? <label><small>Press Enter to save</small></label> : <>&nbsp;</>}
        </Form.Item>
      </Form>
    </div >
  );
}

export default AddTodo;
