import React from 'react'
import styled from 'styled-components'

const Curve = styled.img`
width: 100%;
`

const Cont = styled.div`
width: 100vw;
`
const Box = styled.div`
display: flex;
width: 100vw;
justify-content: space-between;
align-items: center;
background-color: #F6FBFF;
height: 300px;
`

const Desc = styled.div`
width: 500px;
margin-left: 90px;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
`

const Title = styled.span`
font-size: 20px;
font-family: ${({theme}) => theme.fonts.headings};
`

const Text = styled.p`
font-family: ${({theme}) => theme.fonts.body};
margin-top: 20px;
`

const Illustration = styled.div`
width: 400px;

img {
    object-fit: cover;
    width: 70%;
}
`
const Cont1 = styled.div`
width: 100vw;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Title1 = styled.span`
font-size: 20px;
font-family: ${({theme}) => theme.fonts.headings};
margin-bottom: 20px;
`

const Button = styled.button`
color: white;
background-color: ${({theme}) => theme.colors.pink};
border-radius: 15px;
padding: 10px 45px;
cursor: pointer;
border: none;
margin-bottom: 20px;

`
 


const Sections = () => {
    return (
        <>
        <Cont>
            <Curve src="./images/bg-section-top-desktop-1.svg" />
            <Box>
                <Desc>
                        <Title>Grow Together</Title>
                        <Text>Generate meaningful discussions with your audience and build a strong, loyal community. 
                            Think of the insightful conversations you miss out on with a feedback form. 
                        </Text>
                </Desc>
                <Illustration>
                    <img src="./images/illustration-grow-together.svg" alt="" />
                </Illustration>
            </Box>
            <Curve src="./images/bg-section-bottom-desktop-1.svg"/>
        </Cont>  
        <Cont>
            <Curve src="./images/bg-section-top-desktop-1.svg" />
            <Box>
            <Illustration>
                    <img src="./images/illustration-flowing-conversation.svg" alt="" />
                </Illustration>
                <Desc>
                        <Title>Flowing Conversations</Title>
                        <Text>You wouldn't paginate a conversation in real life, so why do it online? Our threads have 
  just-in-time loading for a more natural flow.

                        </Text>
                </Desc>
                
            </Box>
            <Curve src="./images/bg-section-bottom-desktop-1.svg"/>
        </Cont>  
        <Cont>
            <Curve src="./images/bg-section-top-desktop-1.svg" />
            <Box>
                <Desc>
                        <Title>Your Users</Title>
                        <Text> It takes no time at all to integrate Huddle with your app's authentication solution. This means, 
  once signed in to your app, your users can start chatting immediately.
 
                        </Text>
                </Desc>
                <Illustration>
                    <img src="./images/illustration-your-users.svg" alt="" />
                </Illustration>
            </Box>
            <Curve src="./images/bg-section-bottom-desktop-1.svg"/>
        </Cont> 
        <Cont1>
        <Title1>Ready to Build Your Community? </Title1>
        <Button>Get Started for Free</Button>
        </Cont1>
        </>
    )
}

export default Sections
