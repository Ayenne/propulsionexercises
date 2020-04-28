import React, { Component } from 'react';


class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: true,
        }
    setInterval(this.counter, 80)
    }

    counter = () => {
        this.setState(previousState => {
            return {
                active: !previousState.active
            }
        })
    }

    createCells() {
        const cells = [];
        for (let i = 0; i < 5; i++){
            for (let j = 0; j < 5; j++){
                if (Math.random() * 10 > 5){
                    cells.push(<div className="active" key={i-j}></div>);
                } else {
                    cells.push(<div className="not-active" key={i-j}></div>);
                } 
            }  
        }
        return cells;
    }
    render() {
        return this.createCells();
    }
}

export default Board;