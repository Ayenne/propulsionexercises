import React, { Component } from 'react';
import styled from 'styled-components';
import avatar from '../../assets/svgs/avatar.svg';
import Favorite from './Favorite.js';
import store from '../../store';
import { connect } from 'react-redux';
import followAction from '../../store/actions/follow_user';


const UserWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    width: 500px;
    margin: 30px;
    background-color: white; 
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.05), 0 0 1px 0 rgba(0, 0, 0, 0.2);
    padding: 30px;
`;
const Avatar = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50px;
`;
const AvatarWrapper = styled.div`
    margin-top: 5%;
    display: flex;
    justify-content: center;
`;
const Name = styled.p`
    margin-top: 5%;
    display: flex;
    justify-content: center;
    font-size: 22px;

`;
const Location = styled.div`
    margin-top: 5%;
    display: flex;
    justify-content: center;
`;
const Buttons = styled.div`
    display: flex;
    margin-top: 5%;
    align-items: center;
    justify-content: space-evenly;
`;
const Button = styled.button`
    width: 150px;
    height: 40px;
    font-size: 12px;
    border: 0.7px solid rgba(0, 0, 0, 0.16);
    border-radius: 50px;
    background-color: ${(props) => props.clicked ? "#c468ff" : "white"};
    text-decoration: none;
    transition-duration: 0.4s;
    color: ${(props) => props.clicked ? "white" : "black"};
    outline: none;

    :hover {
        background-color: #c468ff;
        color: white;
        cursor: pointer;
    }
`;

const AboutWrapper = styled.div`
    margin-top: 5%;
    display: flex;
    justify-content: center;
`;
const About = styled.p`
    margin-top: 5%;
    display: flex;
    justify-content: center;
    text-align: center;
    width: 400px;
`;
const Favorites = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10%;
    margin-bottom: 10%;
    flex-wrap: wrap;
    width: auto;
    height: auto;
`;


class UserContent extends Component {
    followUser() {
        store.dispatch(followAction(this.props.user.id, this.props.token));
    }

    render() {
        return (
            <>
            <UserWrapper>
                { this.props.user.avatar ? <AvatarWrapper><Avatar src={this.props.user.avatar}></Avatar></AvatarWrapper> : <AvatarWrapper><Avatar src={ avatar }></Avatar></AvatarWrapper> }
                <Name>{this.props.user.first_name} {this.props.user.last_name} </Name>
                <Location>{this.props.user.location}</Location>
                <Buttons>
                    <Button onClick = {() =>this.followUser()} clicked={this.props.user.logged_in_user_is_following}> {this.props.user.logged_in_user_is_following ? "Following" : "Follow" }</Button>
                    <Button>ADD FRIEND</Button>
                </Buttons>
                <AboutWrapper><About>{this.props.user.about_me}</About></AboutWrapper>
                <Favorites> {this.props.user.things_user_likes ? this.props.user.things_user_likes.map((favorite)=>{
                    return <Favorite favorite={favorite}/>}) : null
                            }
                </Favorites>
            </UserWrapper>
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
  const ConnectedUserContent = connection(UserContent);
  
export default ConnectedUserContent;

