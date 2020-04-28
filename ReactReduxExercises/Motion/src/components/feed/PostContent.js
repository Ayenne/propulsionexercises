import React, { Component } from 'react';
import Author from './Author';
import PhotoCollection from './PhotoCollection';
import styled from 'styled-components';


const WrapperPost = styled.div`
    height: auto;
    width: auto;
    font-size: 16px;
    line-height: 1.63;
    color: black;
    margin: 32px 0px;
    overflow-wrap: break-word;
`;

const Nested = styled.div`
    padding-left: 30px;
    border-left: 1px solid #aaa;
`;

class PostContent extends Component { 
    render() {
        return <>
            <Author post={this.props.post} />
            <WrapperPost>{this.props.post.content}</WrapperPost>
            { this.props.post.images && this.props.post.images.length > 0 ? <PhotoCollection photos={this.props.post.images}></PhotoCollection> : null}
            { this.props.post.shared ? <Nested><PostContent post={this.props.post.shared} /></Nested> : null}
        </>
    }
}

export default PostContent