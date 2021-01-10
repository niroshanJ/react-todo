import React from 'react';
import { Button, Tooltip } from 'antd';
import { CheckCircleOutlined, CloseOutlined, CheckOutlined } from '@ant-design/icons';
import { timeSince } from '../../helpers/time';
import './style.css';

// atomic component
function Todo(props: any) {

  return (
    <div className={props.todo.isDone ? 'todo todo-done' : 'todo todo-pending'}>
      <div style={{ width: '100%' }}>
        <CheckCircleOutlined style={{ fontSize: '35px', color: props.todo.isDone ? '#A9D782' : '#CDE0FA', marginBottom: '15px' }} />
        <p>
          {props.todo.title}
          <br />
          <small><strong>{timeSince(props.todo.dateTime)}</strong></small>
        </p>
        <div className='text-right'>
          <Tooltip title="Delete">
            <Button size='small' style={{ marginRight: '10px' }} type="link" danger onClick={() => { props.deleteTodo(props.todo.id) }} shape="circle" icon={<CloseOutlined />} />
          </Tooltip>
          {!props.todo.isDone ?
            <Tooltip title="Done">
              <Button size='small' type="link" onClick={() => { props.updateTodo(props.todo.id) }} shape="circle" icon={<CheckOutlined />} />
            </Tooltip>
            :
            <></>
          }
        </div>
      </div>
    </div>
  );
}

export default Todo;
