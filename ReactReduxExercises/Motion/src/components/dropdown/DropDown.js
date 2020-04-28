import React, { Component } from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
    position: relative;
`;

const Content = styled.div`
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 120px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 100000;
    right: 100%;
    top: 100%;
    &.show {
        display: block;
    }
`;

let id = 0;
class DropDown extends Component {
    constructor(props) {
        super(props);
        this.triggerId = "myDropdownTrigger" + (id);
        this.contentId = "myDropdownContent" + (id++);
    }

    componentDidMount() {
        /*window.addEventListener('click', (e) => {
            if (e.target.matches('#' + this.triggerId)) return;
            const myDropdown = document.getElementById(this.contentId);
            if (myDropdown === null) return;
            if (myDropdown.classList.contains('show')) {
                myDropdown.classList.remove('show');
            }
        }); */
    }

    showContent() {
        document.getElementById(this.contentId).classList.toggle("show");
    }

    render() {
        return <>
            <Wrapper>
                <div id={this.triggerId} onClick= {() => this.showContent()}>
                    { this.props.mainContent }
                </div>
                <Content id={this.contentId}>
                    { this.props.dropdownContent }
                </Content>
            </Wrapper> 
        </>    
    }
}
export default DropDown;
