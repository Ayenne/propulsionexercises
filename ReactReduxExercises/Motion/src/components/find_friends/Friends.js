import React, { Component } from 'react';
import { connect } from 'react-redux';
import User from './User.js';

class Friends extends Component {
    render() {
        return (
            <>
            <ul>
            {this.props.users ?
                this.props.users.filter((_,i) => i % 2 === 0).map((user) => {
                    return <User user={user}/>
                }) : null
            }
            </ul>
            <ul>
                {this.props.users ?
                    this.props.users.filter((_, i) => i % 2 === 1).map((user) => {
                        return <User key={user.id} user={user}/>
                    }) : null
                }
            </ul>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      users: state.users
    }
};

const connection = connect(mapStateToProps);
const ConnectedFriends = connection(Friends);
  

export default ConnectedFriends