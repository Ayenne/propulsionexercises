import React, { Component } from 'react';
import Post from './Post'
import NewPost from './NewPost'
import { connect } from 'react-redux';

class Posts extends Component {
    render() {
        return <>
            <ul>
            <NewPost></NewPost>
                {this.props.posts ?
                    this.props.posts.filter((_, i) => i % 2 === 0).map((post) => {
                        return <Post key={post.id} post={post}/>
                    }) : null
                }
            </ul>
            <ul>
                {this.props.posts ?
                    this.props.posts.filter((_, i) => i % 2 === 1).map((post) => {
                        return <Post key={post.id} post={post}/>
                    }) : null
                }
            </ul>
        </>
    }
}

const mapStateToProps = (state) => {
    return {
      posts: state.posts,
    }
};

const connection = connect(mapStateToProps);
const ConnectedPosts = connection(Posts);

export default ConnectedPosts