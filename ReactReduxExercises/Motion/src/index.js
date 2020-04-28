import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './store'
import styled from 'styled-components';
import { GlobalStyle } from './styles/index';

const AppContainer = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap');
    display: flex;
    height: 100vh;
    width: 100vw;
    font-family: 'Roboto', 'sans-serif';
`;

ReactDOM.render(
    <Provider store={store}>
        <AppContainer>
            <GlobalStyle />
            <App />
        </AppContainer>
    </Provider>,

    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
