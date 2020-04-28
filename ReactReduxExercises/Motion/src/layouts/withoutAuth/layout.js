import React, { Component } from 'react'
import styled from 'styled-components';
import background from '../../assets/images/background_image.png';
import logo from '../../assets/images/logo_white.png';
import { ReactComponent as AppleIcon } from '../../assets/svgs/apple.svg';
import { ReactComponent as GoogleIcon} from '../../assets/svgs/google.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const LeftSide = styled.div`
    width: 41.6%;
    height: 100%;
    background-image: url(${background}), linear-gradient(102deg, #c468ff, #6e91f6); 
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
`;

const LeftSideMain = styled.div`
    height: 57.25%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
`;

const Logo = styled.img`
    width: 13.33%;
    height: 17.47%;
    object-fit: contain;
`;

const Title = styled.h1`
    color: white;
    font-size: 30px;
    letter-spacing: 0.75px;
    width: 16.5%;
    height: 7.64%;
    margin-top: 3.28%;
`;

const Slogan = styled.p`
    color: white;
    width: 45.75%;
    height: 10.48%;
    opacity: 0.6;
    line-height: 1.5;
    display: flex;
    margin-top: 5.46%;
    text-align: center;
`;

const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 10%;
`;

const AppleIconRect = styled.div`
    border: solid 2px rgba(255,255,255, 0.2);
    border-radius: 100px;
    margin-top: 5%;
    width: 21%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const GoogleIconRect = styled.div`
    border: solid 2px rgba(255,255,255, 0.2);
    border-radius: 100px;
    margin-top: 5%;
    margin-left: 2.66%;
    width: 21%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SocialMedia = styled.div`
    height: 26%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    margin-bottom: 5.25%;
`;

const SoMeLink = styled.div`
    width: 6.67%;
    padding-top: 6.67%;
    opacity: 0.5;
    background-color: #ffffff;
    border: 1px solid white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin: 0 1.33%;
`;

const IconFontAwesome = styled(FontAwesomeIcon)`
    position: absolute;
    top: 50%;
    margin-top: -6px;
`;

const CopyrightSection = styled.div`
    color: white;
    display: flex;
    justify-content: center;
    height: 6.75%;
`;

const CopyrightText = styled.p`
    font-size: 0.75em;
`;

const RightSide = styled.div`
    width: 58.4%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export default class extends Component {
    render() {
        return (
            <>
            <LeftSide>
                <LeftSideMain>
                    <Logo src={logo} />
                    <Title>Motion</Title>
                    <Slogan>Connect with friends and the world around you with Motion.</Slogan>
                </LeftSideMain>
                <IconContainer>
                    <AppleIconRect>
                        <AppleIcon/>
                    </AppleIconRect>
                    <GoogleIconRect>
                        <GoogleIcon/>
                    </GoogleIconRect>
                </IconContainer>
                <SocialMedia>
                    <SoMeLink>
                        <IconFontAwesome icon={faTwitter} />
                    </SoMeLink>
                    <SoMeLink>
                        <IconFontAwesome icon={faFacebookF} />
                    </SoMeLink>
                    <SoMeLink>
                        <IconFontAwesome icon={faInstagram} />
                    </SoMeLink>
                </SocialMedia>
                <CopyrightSection>
                    <CopyrightText>© Motion 2020. All rights reserved.</CopyrightText>
                </CopyrightSection>
            </LeftSide>
            <RightSide>
                {this.props.children}
            </RightSide>
            </>
        )
    }
}