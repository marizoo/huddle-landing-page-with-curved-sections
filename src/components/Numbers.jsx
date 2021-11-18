import React from 'react'
import styled from 'styled-components'

const Cont = styled.div`
display: flex;
justify-content: space-between;
width: 525px;
max-width: 530px;
margin-top: 80px;
`

const Left = styled.div`
display: flex;
flex-direction: column;
width: 180px;
`


const Right = styled.div`
display: flex;
flex-direction: column;
width: 180px;
`

const IconImg = styled.img`
width: 20%;
`

const Info = styled.span`
font-size: 60px;
font-family: ${({theme}) => theme.fonts.headings};

`

const Desc = styled.p`
font-family: ${({theme}) => theme.fonts.body};
`

const Numbers = () => {
    return (
        <Cont>
            <Left>
                <IconImg src="./images/icon-communities.svg"/>
                <Info>1.4k+</Info>
                <Desc>Communities Formed</Desc>
            </Left>

            <Right>
                <IconImg src="./images/icon-messages.svg"/>
                <Info>2.7m+</Info>
                <Desc>Messages Sent</Desc>
            </Right>
        </Cont>
    )
}

export default Numbers
