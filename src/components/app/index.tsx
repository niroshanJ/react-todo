import React from 'react';
import AddTodo from '../addTodo';
import TodoList from '../todoList';
import { useSelector } from 'react-redux';
import { Row, Col } from 'antd';
import './style.css';

function App() {

  const todoList = useSelector((state: any) => { return state.todo });
  return (
    <div className="App">
      <Row justify="space-around" align="middle">
        <Col span={10} style={{ padding: '25px', height: window.innerHeight + 'px' }}>
          <AddTodo />
          <TodoList todos={todoList} />
        </Col>
      </Row>
    </div>
  );
}

export default App;
