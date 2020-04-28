import React, { Component } from 'react';
import styled from 'styled-components';
import Time from 'react-time';
import avatar from '../../assets/svgs/avatar.svg'
import deleteAction from '../../store/actions/delete_post';
import DropDown from '../dropdown/DropDown';
import menuIcon from '../../assets/svgs/menu.svg';
import store from '../../store';
import { connect } from 'react-redux';

const AuthorDetails = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Left = styled.div`
    display: flex;
    align-items: center;
`;

const Right = styled.div``;

const AuthorRender = styled.p`
    margin-top: 5px;
    font-size: 14px;
    color: #000000;
    width: auto;
`;

const Avatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50px;
    border: 1px black;
`;

const Date = styled(Time)`
    margin-top: 5px;
    font-size: 14px;
    opacity: 0.5;
    color: #000000;
    width: auto; 
`;

const NameDate = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
`;
const MenuSpace = styled.div`
    padding: 10px 15px;
    :hover {
        opacity: 0.8;
        cursor: pointer;
    }
`;

const Menu = styled.img`
    width: 4px;
    height: 16px;
    outline: none;
`;

const Button = styled.a`
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

class Author extends Component {
    deletePost() {
        console.log("in da click")
        store.dispatch(deleteAction(this.props.post.id, this.props.token));
    }
    render() {
        return (
            <>
            <AuthorDetails>
                <Left>
                    { this.props.post.user.avatar ? <Avatar src={this.props.post.user.avatar}></Avatar> : <Avatar src={ avatar }></Avatar>}
                    <NameDate>
                        <AuthorRender>{this.props.post.user.first_name} {this.props.post.user.last_name}</AuthorRender>
                        <Date 
                            value={this.props.post.created}
                            titleFormat = "YYYY/MM/DD HH:mm"
                            relative
                        />
                    </NameDate>
                </Left>
                <Right>
                    {!this.props.post.is_from_logged_in_user ? null :
                    <DropDown
                    dropdownContent = { <>              
                            <Button onClick={() => this.deletePost()}>Delete</Button>
                            </>
                        }
                        mainContent = {
                            <MenuSpace><Menu src= {menuIcon}/></MenuSpace>
                        } 
                    />}
                </Right>                
            </AuthorDetails>
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
const ConnectedAuthor = connection(Author);
export default ConnectedAuthor