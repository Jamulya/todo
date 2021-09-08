import React from 'react';

import TodoTitle from '../components/todo_title/todo-title';
import TodoSearch from '../components/todo_search/todo-search';
import TodoList from '../components/todo_list/todo-list';

const App = () => {
  return (
    <div className='block_green'>  
    <TodoTitle/>
    <TodoSearch/>
    <TodoList/>
    </div>
  )
}

export default App