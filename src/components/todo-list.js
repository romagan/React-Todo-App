import React from 'react';

import TodoListItem from '.components/todo-list-item';

const TodoList = () => {
  return (
    <ul>
      <li><TodoListItem /></li>
      <li><TodoListItem /></li>
    </ul>
  )
};

export default TodoList;
