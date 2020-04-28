import React, { Component } from 'react'
import './TodoItem.css'
import store from '../../store';


class TodoItem extends Component {
    render() {
        return <li className={this.props.todo.completed ? "completed" : ""}>
            <span> { this.props.todo.content } </span>
            {!this.props.todo.completed ? this.completeTick() : this.uncompleteTick()}
            <a onClick={() => store.dispatch({type: 'DELETE', payload: this.props.todo})}>x</a>
        </li>
    }

    completeTick() {
      return <a onClick={() => store.dispatch({type: 'TOGGLE', payload: this.props.todo})
    }>v</a>
    }
    uncompleteTick() {
        return <a onClick={() => store.dispatch({type: 'TOGGLE', payload: this.props.todo})
      }>o</a>
      }
}

export default TodoItem;
