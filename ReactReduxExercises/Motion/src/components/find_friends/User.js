import React, { Component } from 'react'
import UserContent from './UserContent'

class User extends Component {
    render() {
        return (
            <>
                { this.props.user.first_name ? <UserContent  user={this.props.user}></UserContent> : null }
            </>
        )
    }
}
export default User