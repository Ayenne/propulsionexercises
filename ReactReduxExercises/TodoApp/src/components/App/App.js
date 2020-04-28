import React, { Component } from 'react';
import './App.css';
import TodoList from '../TodoList/TodoList.js';
import NewTodo from '../NewTodo/index.js'
import Filter from '../Filter/index.js'
import { connect } from 'react-redux';

class App extends Component{

  filteredTodos() {
    return this.props.todos.filter((todo) => this.props.filter(todo));
  }
  
  render() {
    return ( 
      <div className="wrapper">
        <Filter filterHandler={(filter) => this.applyFilter(filter)}/>  
        <TodoList todos = {this.filteredTodos()}  /> 
        <NewTodo />  
      </div>
    )   
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    filter: state.filter
  }
};
const connection = connect(mapStateToProps);
const ConnectedApp = connection(App);

export default ConnectedApp;
