import { Email, Facebook, Instagram, Phone, Twitter } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Cont = styled.div`
height: 500px;
background-color: black;
color: white;
display: flex;
align-items: center;
padding: 90px;
padding-top: 150px;
position: relative;
width: 100vw;
justify-content: space-between;
font-family: Arial, Helvetica, sans-serif;
`
const Curve = styled.img`
width: 100vw;
position: absolute;
top: 0;
left: 0;
z-index: 3;
`

const Left = styled.div`
display: flex;
flex-direction: column;
width: 250px;
`
const LogoBox = styled.div`
display: flex;
align-items: center;



span {
    font-size: 45px;
    font-family: Arial, Helvetica, sans-serif;
    margin-left: 15px;
    margin-bottom: 15px;
    font-weight: 700;
}
`

const Logo = styled.img`
width: 35px;
color: white;
margin-bottom: 25px;
`


const Desc = styled.p`
width: 100%;
line-height: 25px;
font-size: 0.8rem;
margin-bottom: 18px;

`

const ContactBox = styled.div`
display: flex;
align-items: center;
`

const Icon = styled.div`
margin-right: 16px;
`

const Info = styled.p`
font-size: 0.8rem;
`

const SocialMedia = styled.div`
display: flex;
align-items: center;
margin: 25px 0;
width: 100px;
justify-content: space-between;
`


const Right = styled.div`
display: flex;
flex-direction: column;
width: 250px;

`

const RightTextBox = styled.div`
display: flex;
flex-direction: column;
`
const RightTitle = styled.span`
font-weight: 700;
margin-bottom: 20px;
letter-spacing: 1px;
`


const RightDesc = styled.p`
font-size: .8rem;
margin-bottom: 20px;

`

const RightSubscribeBox = styled.div`
display: flex;
`
const Input = styled.input`
width: 150px;
height: 20px;
border-radius: 5px;
border:none;
`

const Button = styled.button`
padding: 10px 25px;
border-radius: 5px;
background-color: ${({theme}) => theme.colors.pink};
color: white;
border: none;
height: 23px;
display: flex;
align-items: center;
justify-content: center;
font-size: 0.7rem;
margin-left: 20px;
`

const Footer = () => {
    return (
        <Cont>
        <Curve src="./images/bg-section-bottom-desktop-2.svg"/>
            <Left>
                <LogoBox>
                    <Logo src="./images/icon-messages.svg"/>
                    <span>Huddle</span>
                </LogoBox>
                
                <Desc>Lorem ipsum, dolor sit amet consetur adipisicing elit quisquam lorem, blanditiis maiores explicabo?</Desc>
                <ContactBox>
                    <Icon><Phone/></Icon>
                    <Info>Phone: +1-9876-5432-123</Info>
                </ContactBox>
                <ContactBox>
                    <Icon><Email/></Icon>
                    <Info>example@huddle.com</Info>
                </ContactBox>
                <SocialMedia>
                    <Facebook/>
                    <Instagram/>
                    <Twitter/>
                </SocialMedia>
            </Left>


            <Right>
                <RightTextBox>
                    <RightTitle>NEWSLETTER</RightTitle>
                     <RightDesc>
                     To recieve tips on how to grow your community, sign up to our weekly newsletter. We’ll never 
  send you spam or pass on your email address
                     </RightDesc>
                </RightTextBox>
                <RightSubscribeBox>
                    <Input type="text" />
                    <Button>Subscribe</Button>
                </RightSubscribeBox>
                
            </Right>
        </Cont>
    )
}

export default Footer
