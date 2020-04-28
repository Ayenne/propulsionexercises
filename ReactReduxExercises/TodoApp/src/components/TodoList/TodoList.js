import React, { Component } from 'react';
import TodoItem from '../TodoItem/TodoItem.js';



class TodoList extends Component {
    render() {
        return (
          <ul>
            {
                this.props.todos.map((todo, index) => {
                return <TodoItem 
                    key={ index } 
                    todo={ todo }
                    />;
              })
            }
          </ul>
        )
    }
  
}
export default TodoList;