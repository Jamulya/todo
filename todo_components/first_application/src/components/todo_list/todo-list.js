import React from 'react';
import TodoListItem from '../todo_item/todo-list-item';



const TodoList = () => {
  return (
     <div>
        <ul>
            <li><TodoListItem todo='eat breakfast' /></li>
            <li><TodoListItem todo='drink cola' /></li>
            <li><TodoListItem todo='see sky' /></li>
            <li><TodoListItem todo='eat burger' /></li>
         </ul>
     </div>
    
 )
}

export default TodoList;