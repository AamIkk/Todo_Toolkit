import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo } from './redux/clices/todoReducer';

const Todo = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todo.todos);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== '') {
      dispatch(addTodo(task));
      setTask('');
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder='Введите задачу'
        />
        <input type='submit' />
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleDelete(todo.id)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;