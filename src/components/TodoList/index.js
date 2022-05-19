import React from 'react';
import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from '../../redux/actions';
import {v4 as uuidv4} from "uuid"
import { todoRemainingSelector } from '../../redux/selectors';

export default function TodoList() {
  const [todoName, setTodoName] = React.useState('');
  const [prioriry, setPrioriry] = React.useState('Medium');

  const dispatch = useDispatch();

  const todoList = useSelector(todoRemainingSelector);

  const handleInputChangeTodoName = (e) => {
    setTodoName(e.target.value);
  }

  const handlePrioriryChage = (value) => {
    setPrioriry(value);
  }

  const handleAddButtonClick = () => {
    // dispatch
    dispatch(addTodo({
      id: uuidv4(), 
      name: todoName,
      prioriry: prioriry,
      completed: false
    }));

    setTodoName('');
    setPrioriry('Medium');
  }

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {todoList.map(todo => (
          <Todo key={todo.id} name={todo.name} prioriry={todo.prioriry} completed={todo.completed} />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={todoName} onChange={handleInputChangeTodoName} />
          <Select defaultValue="Medium" value={prioriry} onChange={handlePrioriryChage}>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
