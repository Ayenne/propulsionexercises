import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../store';
import styled from 'styled-components';
import SearchBarIcon from '../../assets/svgs/search_icon.svg'

const Bar = styled.div`
    display: flex;
    height: 80px;
    background-color: #f8f8f9; 
    border-bottom: 1px solid #ddd;
    justify-content: center;
    width: 100%;
`;

const Content = styled.div`
    width: 1030px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Search = styled.div`
    display: flex;
`;

const SearchIcon = styled.img``;

const Input = styled.input`
    border: none;
    display: flex;
    background-color: #f8f8f9;
    
    font-size: 16px;
    width: 600px;
    padding: 20px;

    :focus {
        outline-width: 0;
    }
`;

const Filter = styled.div`
    display: flex;
`;

const Button = styled.button`
    background: none;
    border: none;
    height: 78px;
    padding: 0px 20px;
    color: ${(props) => props.clicked ? "black" : "#777"};

    :focus {
        outline: none;
    }
    :hover {
        cursor: pointer;
        background: #f3f3f3;
    }
    border-bottom: ${(props) => props.clicked ? 2 : 0}px solid black;

`;

class PostsFilter extends Component {
    state = {
        query : "",
    }

    changeCategory(category) {
        if (category === this.props.category) category = 'ALL';
        store.dispatch({type: "CHANGE_CATEGORY", payload: category});
    }

    search(e) {
        e.preventDefault();
        store.dispatch({type: "SEARCH_POSTS", payload: this.state.query});
    }

    render() {
        return <>
            <Bar>
                <Content>
                    <Search>
                        <SearchIcon src={SearchBarIcon}></SearchIcon>
                        <form onSubmit={(e) => this.search(e)}>
                            <Input
                                type = "text"
                                placeholder = "Search posts..."
                                value = {this.state.query}
                                onChange = {e => this.setState({query: e.target.value})}
                            />
                        </form>
                    </Search>
                    <Filter>
                        <Button onClick={() => this.changeCategory("LIKED")} clicked={this.props.category === "LIKED"}>Liked</Button>
                        <Button onClick={() => this.changeCategory("FRIENDS")} clicked={this.props.category === "FRIENDS"}>Friends</Button>
                        <Button onClick={() => this.changeCategory("FOLLOW")} clicked={this.props.category === "FOLLOW"}>Follow</Button>
                    </Filter>
                </Content>
            </Bar>
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        category: state.category
    }
};

const connection = connect(mapStateToProps);
const ConnectedPostsFilter = connection(PostsFilter);
  

export default ConnectedPostsFilter