import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

const mapStateToProps = (state) => {
    return {
        token : state.token
    }
};

export function withAuth (WrappedComponent) {
    class WithAuth extends Component {
        render() {
            return <>
                {this.props.token
                    ? <WrappedComponent token={this.props.token} {...this.props} />
                    : <Redirect to='/login' />}
            </>;
        }
    };
    return connect(mapStateToProps)(WithAuth);
}


export function withoutAuth (WrappedComponent) {
    class WithoutAuth extends Component {
        render() {
            return <>
                {!this.props.token
                    ? <WrappedComponent {...this.props} />
                    : <Redirect to='/' />}
            </>;
        }
    };
    return connect(mapStateToProps)(WithoutAuth);
}