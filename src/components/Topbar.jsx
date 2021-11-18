import React from 'react'
import styled from 'styled-components'

const Cont = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
height: 70px;
`

const LogoRight = styled.img`
width: 150px;
margin-left: 70px;
`

const LogoLeft = styled.button`
padding: 5px 15px;
border-radius: 15px;
color: ${({theme}) => theme.colors.lightPink};
border: 1px solid ${({theme}) => theme.colors.lightPink};
background-color: white;
margin-right: 70px;
`

const Topbar = () => {
    return (
        <Cont>
            <LogoRight src="./images/logo.svg" alt="site's logo"/>
            <LogoLeft>Try it Free</LogoLeft>

        </Cont>
    )
}

export default Topbar
