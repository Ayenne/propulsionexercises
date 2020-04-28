import React, { Component } from 'react';
import PostContent from './PostContent';
import styled from 'styled-components';
import store from '../../store';
import { connect } from 'react-redux';
import likeAction from '../../store/actions/like_post';
import Share from '../../assets/svgs/share.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";	


const PostWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    width: 500px;
    margin: 30px 15px;
    background-color: white;
    border-radius: 4px;
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.05), 0 0 1px 0 rgba(0, 0, 0, 0.2);
    padding: 30px;
`;

const IconWrapper = styled.div`
    display: flex;
`;

const Action = styled.button`
    background: none;
    border: none;
    display: flex;
    color: ${(props) => props.clicked ? "#a95adb" : "#aaa"};
    :focus {
        outline-width: 0;
    }
    :hover {
        cursor: pointer;
        opacity: 0.8;
    }
`;

const ShareIcon = styled.img`
    color: ${(props) => props.clicked ? "#c468ff" : ""};
`;

const Text = styled.p`
    color: black;
    font-size: 14px;
    margin: 0px 32px 0 8px;
`;

const LikesCounter = styled.p`
    opacity: 0.5;
    font-size: 14px;
    flex-grow: 1;
    text-align: right;
`; 

const HeartIcon = styled(FontAwesomeIcon)``;

class Post extends Component {
    likePost() {
        store.dispatch(likeAction(this.props.post.id, this.props.token)); 
    }

    render() {
        return <>
               <PostWrapper>
                   <PostContent post={this.props.post}></PostContent>
                   <IconWrapper>
                        <Action onClick={() => this.likePost()} clicked={this.props.post.logged_in_user_liked}>
                            <HeartIcon icon={faHeart} />
                            <Text>Like</Text>
                        </Action>
                        <Action>
                            <ShareIcon src={ Share } />
                            <Text>Share</Text>
                        </Action>
                        <LikesCounter>{ this.props.post.amount_of_likes } {this.props.post.amount_of_likes === 1 ? 'like' : 'likes'} </LikesCounter>
                    </IconWrapper>
                </PostWrapper>
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.token,
    }
};
const connection = connect(mapStateToProps);
const ConnectedPost = connection(Post);
  
export default ConnectedPost;