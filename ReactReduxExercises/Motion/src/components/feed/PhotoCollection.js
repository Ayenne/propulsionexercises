import React, { Component } from 'react';
import styled from 'styled-components';


const Photo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 60px;
`;

class PhotoCollection extends Component {
    
    render() {
        return <>
        <Photo> <img src= {this.props.photos[0].image} width="420px" height="420px"/> </Photo> 
        </>
    }
}

export default PhotoCollection