import React, { Component } from 'react'
import store from '../../store';

class NewTodo extends Component {
    state = {
        taskName: '',
    };

    addItem() {
        store.dispatch({type: 'ADD', payload: this.state.taskName});
        this.setState({taskName: ""});
    }
       
    render() {
        return (
            <div>Add new task
                <br></br>
                <input 
                    type = "text"
                    placeholder = "Type here..."
                    value = {this.state.taskName}
                    onChange = {e => this.setState({"taskName": e.target.value})}
                    />
                <button onClick={e => this.addItem()}> Add new </button>
            </div>
        )
    }
}

export default NewTodo