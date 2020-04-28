import React, { Component } from 'react';
import { connect } from 'react-redux';
import logoutAction from '../../store/actions/logout';
import store from '../../store/index';
import styled from 'styled-components';
import Navigation from '../../layouts/feed/navigation';
import Posts from './Posts';
import PostsFilter from './PostsFilter';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%; 
    overflow: hidden;
`;

const FeedPage = styled.div`
    height: 80%;
    background-color: #f8f8f9;
    display: flex;
    justify-content: center;
    overflow: auto; 
`;

class Feed extends Component{
    componentDidMount() { this.fetchPosts() }
    componentDidUpdate(prevProps) {
        if (this.props.query === prevProps.query &&
            this.props.category === prevProps.category) {
            return;
        }
        this.fetchPosts();
    }
    fetchPosts() {
        const base_address = 'https://motion.propulsion-home.ch/backend/api/social/posts/';
        let suffix = '';
        if (this.props.category === "LIKED") {
            suffix = "likes"
        } else if (this.props.category === "FRIENDS") {
            suffix = "friends"
        } else if (this.props.category === "FOLLOW") {
            suffix = "following"
        }
        if (this.props.query.length > 0) suffix += "?search=" + this.props.query;
        fetch(base_address + suffix, {
            method: 'GET',
            headers: new Headers({'Authorization': 'Bearer ' + this.props.token})
        })
        .then((response) => response.json())
        .then((results) => {
            store.dispatch({type: "FETCH_POSTS", payload: results})
        });    
    }

   render() {
        return (
           <>
            <Container>
                <Navigation active="feed"></Navigation>
                <PostsFilter></PostsFilter>
                <FeedPage>
                    <Posts></Posts>
                </FeedPage>
               </Container>
           </>
        )
    }   
}
const mapStateToProps = (state) => {
    return {
        posts: state.posts,
        token: state.token,
        query: state.query,
        category: state.category,
    }
};
const connection = connect(mapStateToProps);
const ConnectedFeed = connection(Feed);
  
export default ConnectedFeed;