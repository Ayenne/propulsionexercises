import React, { Component } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import postsIcon from '../../assets/svgs/posts_logo.svg';
import findFriends from '../../assets/svgs/icon-friends.svg';
import bellIcon from '../../assets/svgs/notification_bell.svg';
import profileIcon from '../../assets/images/users/greta.jpg'
import menuIcon from '../../assets/svgs/menu.svg';
import store from '../../store/index';
import logoutAction from '../../store/actions/logout';
import DropDown from '../../components/dropdown/DropDown';


const Navigation = styled.div`
    height: 10%;
    width: 100%;
    display: flex;
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.05), 0 0 1px 0 rgba(0, 0, 0, 0.1);
    z-index: 2;
`;

const NavigationLeft = styled.div`
    width: 50%;
    display: flex;
    justify-content: flex-start;
`;

const MotionLogoContainer = styled.div`
    display: flex;
    align-items: center;
`;

const MotionLogo = styled.img`
    width: 26px;
    height: 26px;
    margin-left: 40px;
`;

const Title = styled.p`
    margin-left: 12px;
    width: 70px;
    height: 25px;
    align-items: center;
    font-size: 22px;
`;

const PostsIconContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: 7.57%;
    border-bottom: ${props => props.active ? 2 : 0}px solid #c468ff;
    :hover {
        border-bottom: 2px solid #c468ff;
    }
`;

const PostsIcon = styled.img`
    width: 24px;
    height: 24px;
    filter: ${props => !props.active ? "brightness(120%) saturate(0%)" : "brightness(0) saturate(100%) invert(63%) sepia(80%) saturate(4688%) hue-rotate(239deg) brightness(102%) contrast(101%)"};
`;

const PostsIconText = styled.p`
    font-size: 16px;
    margin-left: 12px;
`;

const FindFriends = styled.div`
    margin-left: 50px;
    display: flex;
    align-items: center;
    border-bottom: ${props => props.active ? 2 : 0}px solid #c468ff;
    :hover {
        border-bottom: 2px solid #c468ff;
    }
`;

const Links = styled(Link)`
    text-decoration: none;
    color: black;
`;

const FindFriendsIcon = styled.img`
    width: 24px;
    height: 24px;
    filter: ${props => !props.active ? "invert(79%) sepia(2%) saturate(26%) hue-rotate(343deg) brightness(87%) contrast(86%);" : "brightness(0) saturate(100%) invert(63%) sepia(80%) saturate(4688%) hue-rotate(239deg) brightness(102%) contrast(101%)"};
`;

const FindFriendsText = styled.p`
    margin-left: 15px;
    width: 100px;
    height: 19px;
`;

const NavigationRight = styled.div`
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 30px;
`;

const BellIconContainer = styled.div`
    display: flex;
    padding: 15px;
`;

const BellIcon = styled.img`
    align-self: center;
`;

const NotificationBubble = styled.div`
    margin-bottom: 40px;
    width: 21px;
    height: 21px;
    border-radius: 50%;
    background-image: linear-gradient(133deg, #c468ff 3%, #6e91f6 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 50px;
`;

const NotificationCounter = styled.p`
    font-size: 10px;
    color: #ffffff;
`;

const ProfileIcon = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50px;
    margin-right: 36px;
    align-self: center;
    margin-top: 14%;
`;

const Menu = styled.img`
    width: 4px;
    height: 16px;
    opacity: 0.8;
    align-self: center;
    outline : none;
    border: none;
    
`;

const Button = styled.a`
    float: none;
    margin: none;
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
    border: none;
    outline: none;
    background-color: #f9f9f9;
    cursor: pointer;
    :hover {
        background-color: #ddd;
    }
`;

const LinkToProfile  = styled(Link)`
    float: none;
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
    border: none;
    outline: none;
    background-color: #f9f9f9;
    cursor: pointer;
    :hover {
        background-color: #ddd;
    }
`;

export default class extends Component {
    render() {
        return (
            <>
            <Navigation>
                <NavigationLeft>
                    <MotionLogoContainer>
                        <Links to='/'><MotionLogo src= {logo}/></Links>
                        <Links to='/'><Title>Motion</Title></Links>
                    </MotionLogoContainer>
                    <PostsIconContainer active={this.props.active === "feed"}>
                        <Links to='/'><PostsIcon src = {postsIcon} active={this.props.active === "feed"}/></Links>
                        <Links to='/'><PostsIconText>Posts</PostsIconText></Links>
                    </PostsIconContainer>
                    <FindFriends active={this.props.active === "find_friends"}>
                       <Links to='/findfriends'><FindFriendsIcon src= {findFriends} active={this.props.active === "find_friends"}/></Links>
                       <Links to='/findfriends'><FindFriendsText>Find Friends</FindFriendsText></Links>
                    </FindFriends>
                </NavigationLeft>
                <NavigationRight>
                    <BellIconContainer>
                        <BellIcon src= {bellIcon} />
                    </BellIconContainer>
                    <NotificationBubble>
                        <NotificationCounter>3</NotificationCounter>
                    </NotificationBubble>
                    <Links><ProfileIcon src= {profileIcon} /></Links>
                    <DropDown
                    dropdownContent = { <>              
                        <LinkToProfile to="/myprofile">My profile</LinkToProfile>
                        <Button onClick = {() => store.dispatch(logoutAction())}>Log out</Button>
                        </>
                    }
                    mainContent = {
                        <Menu src= {menuIcon}/>
                    }
                    />                   
                </NavigationRight>
            </Navigation>
            </>
        )
    }
}


