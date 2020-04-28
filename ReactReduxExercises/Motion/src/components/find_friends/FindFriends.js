import React, { Component } from 'react';
import Navigation from '../../layouts/feed/navigation.js';
import styled from 'styled-components';
import { connect } from 'react-redux';
import store from '../../store/index';
import Friends from './Friends';


const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow: hidden;
`;

const FriendsContainer = styled.div`
    height: 90%;
    background-color: #f8f8f9;
    display: flex;
    justify-content: center;
    align-content: center; 
    overflow: auto;
    
`;

class FindFriends extends Component {

    componentDidMount() {
        fetch('https://motion.propulsion-home.ch/backend/api/users/',{
            method: 'GET',
            headers: new Headers({'Authorization': 'Bearer ' + this.props.token})
        }) 
        .then((response) => response.json())
        .then((results) => {
            console.log(results)
            store.dispatch({type: "FETCH_USERS", payload: results})
        });
    }

    render() {
        return (
            <>
            <Container>
                <Navigation active="find_friends"/>
                <FriendsContainer>
                    <Friends></Friends>
                </FriendsContainer>
            </Container>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      token: state.token,
    }
  };
  const connection = connect(mapStateToProps);
  const ConnectedFindFriends = connection(FindFriends);
  
export default ConnectedFindFriends;
