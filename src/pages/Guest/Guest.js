import React from 'react'
import styled from 'styled-components'  
import GuestSide from './../../components/GuestSide/GuestSide';
import GuestContent from '../../components/GuestContent/GuestContent';
import GuestFooter from '../../components/GuestFooter/GuestFooter';
import GuestNavbar from './../../components/GuestNavbar/GuestNavbar';

const Container = styled.div`
max-width: 100vw;
max-height: 100vh;
overflow: hidden;
display: grid;
grid-template-rows:85vh 15vh;
background-color: #040404;

`

const Wrapper = styled.div`

`
const Body = styled.div`
display: grid;
grid-template-columns: 15vw 85vw;

grid-column-gap:10px;
width: 100%;
padding-bottom: 300px;
`

const Bottom = styled.div``
const Sidebar = styled.div``
const Content = styled.div``
const Navbar = styled.div``

const Guest = () => {
  return (
   <Container>
      <Wrapper>
      <Navbar><GuestNavbar /></Navbar>  
      <Body>

      <Sidebar><GuestSide /></Sidebar>
      <Content ><GuestContent /></Content>
      </Body>
      </Wrapper>
    <Bottom><GuestFooter /></Bottom>
   </Container>
    
  )
}

export default Guest