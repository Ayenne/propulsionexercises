import React, { Component } from 'react'
import store from '../../store';


class Filter extends Component {

    showDone() {
        console.log('showDone')
        store.dispatch({type: 'FILTER', payload: (todo) => {return todo.completed === true}});
    }
    showNotDone() {
        store.dispatch({type: 'FILTER', payload: (todo) => {return todo.completed === false}});
    }
    showAll() {
        store.dispatch({type: 'FILTER', payload: (todo) => {return true}});
    }


    render() {
        return (
            <div>
                <button onClick={e => this.showDone()}> Done </button>
                <button onClick={e => this.showNotDone()}> Not done </button>
                <button onClick={e => this.showAll()}> All </button>
            </div>
        )
    }
}


export default Filter