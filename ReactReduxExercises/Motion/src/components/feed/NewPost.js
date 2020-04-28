import React, { Component } from 'react'
import styled from 'styled-components';
import Avatar from '../../assets/images/users/greta.jpg'
import SendIcon from '../../assets/svgs/send_button.svg'
import store from '../../store';
import newPostAction from '../../store/actions/new_post.js';
import { connect } from 'react-redux';

const PostWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 500px;
    margin: 30px 15px;
    background-color: white;
    border-radius: 4px;
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.05), 0 0 1px 0 rgba(0, 0, 0, 0.2);
    padding: 30px;
    justify-content: space-between;
`;

const UserAvatar = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 60px;
`;

const Input = styled.input`
    border: none;
    background-color: white;
    font-size: 16px;
    line-height: 1.63;
    width: 300px;
    padding: 15px;
    :focus {
        outline-width: 0;
    }
`;

const SendButton = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50px;
    background-image: linear-gradient(102deg, #c468ff 0%, #6e91f6);
    display: flex;
    align-items: center;
    justify-content: center;
    :hover {
        cursor: pointer;
        opacity: 0.9;
    }
`;

const Send = styled.img`
    width: 21px;
    height: 18px; 
`;

class NewPost extends Component {
    state = {
        message: ''
    }

    post(e) {
        e.preventDefault();
        const data = {content: this.state.message} 
        store.dispatch(newPostAction(data, this.props.token));
        this.setState({message: ''})
    }
    render() {
        return (
            
            <PostWrapper>
                <UserAvatar src={Avatar}/>
                <form onSubmit={(e) => this.post(e)}>
                <Input
                    type = "text"
                    placeholder = "What's on your mind, Greta?"
                    value = {this.state.message}
                    onChange = {e => this.setState({message: e.target.value})}
                />
                </form>
                <SendButton><Send src={SendIcon}/></SendButton>
            </PostWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      token: state.token,
    }
  };
  const connection = connect(mapStateToProps);
  const ConnectedNewPost = connection(NewPost);
  
export default ConnectedNewPost;
