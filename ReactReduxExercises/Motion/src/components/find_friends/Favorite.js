import React, { Component } from 'react';
import styled from 'styled-components';

const FavoritesWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const FavoriteContent = styled.p`
    color: black;
    background-color: #f8f8f9;
    margin-left: 10px;
    border-radius: 25%;
    min-width: 80px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20%;
`;

class Favorite extends Component {
    render() {
        console.log(this.props)
        return (
            <FavoritesWrapper>
                <FavoriteContent> {this.props.favorite } </FavoriteContent>
            </FavoritesWrapper>
        )
    }
}

export default Favorite