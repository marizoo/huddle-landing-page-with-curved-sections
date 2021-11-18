import React from 'react'
import styled from 'styled-components'

const Cont = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 100px;
`

const Title = styled.h1`
margin-bottom: 20px;
font-family: ${({theme}) => theme.fonts.headings};
`

const Desc = styled.p`
width: 525px;
max-width: 530px;
margin-bottom: 20px;
font-family: ${({theme}) => theme.fonts.body};
text-align: center;
`

const Button = styled.button`
padding: 15px 35px;
color: white;
border-radius: 30px;
background-color: ${({theme}) => theme.colors.pink};
border: none;
font-weight: 500;
`

const ImgOfCard = styled.img`
width: 525px;
max-width: 530px;
margin-top: 70px;
`



const GetStartedCard = () => {
    return (
        <Cont>
            <Title>Build The Community Your Fans Will Love</Title>
                <Desc>Huddle re-imagines the way we build communities. You have a voice, but so does 
                your audience. Create connections with your users as you engage in genuine discussion. 
                </Desc>
                <Button>Get Started for Free</Button>
                <ImgOfCard src="./images/screen-mockups.svg"/>
                
        </Cont>
    )
}

export default GetStartedCard
