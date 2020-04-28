import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap');

    *{
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 400;
    margin: 0;
    padding: 0;
    }
    *,
     *::after,
    *::before {
        box-sizing: inherit;
    }

    html {
        box-sizing: border-box;
        font-size: 62.5%; 
        margin: 0;
    } 

    #root {
        margin: 0;
    }
    body {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        
    }
`;

export const theme = {

}
