import React, { Component } from 'react';
import loginAction from '../store/actions/login';
import store from '../store/index';
import styled from 'styled-components';
import { BaseButton } from '../styles/buttons';
import { ReactComponent as Avatar} from '../assets/svgs/avatar.svg';
import { ReactComponent as Password} from '../assets/svgs/password.svg';
import Layout from '../layouts/withoutAuth/layout';

const SignUp = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
    height: 14.29%;
`;

const SignUpText = styled.h3`
    margin-bottom: 1.25%;
    margin-right: 1.67%;
    font-size: 0.875em;
`;

const SignUpRect = styled.div`
    border-radius: 30px;
    box-shadow: 0 10px 30px 0 var(--black-7);
    border: solid 1px rgba(0, 0, 0, 0.2);
    margin-right: 4.76%;
    width: 14.29%;
    height: 33.33%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SignUpRectText = styled.h4`
    font-size: 0.625em;
    text-align: center;
    letter-spacing: 1;
`;

const SignIn = styled.div`
    display: flex;
    height: 20.95%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
`;

const SignInText = styled.p`
    font-size: 250%;
    height: 27.27%;
`;

const UnsernameContainer = styled.div`
    height: 12.5%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    flex-direction: row;
    border-bottom: 1px solid rgba(0, 0, 0, 0.16);
    width: 50%;
    margin: 0 auto;
`;

const AvatarIcon = styled(Avatar)`
    margin-right: 23px;
    margin-bottom: 18px;
`;

const PasswordContainer = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    flex-direction: row;
    border-bottom: 1px solid rgba(0, 0, 0, 0.16);
    height: 10%;
    width: 50%;
    margin: 0 auto;
`;

const PasswordIcon = styled(Password)`
    margin-right: 23px;
    margin-bottom: 18px;
`;

const Input = styled.input.attrs(props => ({size: props.small ? 5 : undefined,
}))`
    border-radius: 3px;
    border: none;
    display: block;
    margin: 0 0 1em;
    padding: ${props => props.padding};

    ::placeholder {
        font-size: 16px;
        line-height: 1.63;
        height: 26px;
        margin-bottom: 18px;
    }

    :focus {
        outline-width: 0;
    }
`;

const LogIn = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    height: 42.26%;
`;

const SignInButtonText = styled.p`
    font-size: 0.75em;
    letter-spacing: 1px;
    width: 52px;
    height: 14px;
    color: #ffffff;

`;

class TopBar extends Component {
    render() {
        return <>
            <SignUp>
                <SignUpText>{this.props.title}</SignUpText>
                <SignUpRect>
                    <SignUpRectText>{this.props.action}</SignUpRectText>
                </SignUpRect>
            </SignUp>
        </>
    }
};

class Login extends Component {
    state = {
        email: '',
        password: '',
    };

    LogIn(e) {
        e.preventDefault();
        store.dispatch(loginAction(this.state.email, this.state.password));
    }
 
    render() {
        return (
            <Layout>
                <TopBar title="Don't have an account?" action="SIGN UP"></TopBar>
                <SignIn>
                    <SignInText>Sign In</SignInText>
                </SignIn>
                <UnsernameContainer>
                    <AvatarIcon/>
                    <form onSubmit={(e) => this.LogIn(e)}>
                        <Input
                            type = "text"
                            placeholder = "Username"
                            value = {this.state.email}
                            onChange = {e => this.setState({"email": e.target.value})}
                        />
                    </form>
                </UnsernameContainer>
                <PasswordContainer>
                    <PasswordIcon/>
                    <form onSubmit={(e) => this.LogIn(e)}>
                        <Input
                            type = "password"
                            placeholder = "Password"
                            value = {this.state.password}
                            onChange = {e => this.setState({"password": e.target.value})}
                        />
                    </form>
                </PasswordContainer>
                <LogIn>
                    <BaseButton>
                        <SignInButtonText>SIGN IN</SignInButtonText>
                    </BaseButton>
                </LogIn>
            </Layout>
        )
    }
}

export default Login;