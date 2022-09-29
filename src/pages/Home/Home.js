import React from 'react';
import Body from './../../components/Body/Body';
import styled from 'styled-components'

import Navbar from './../../components/Navbar/Navbar';

const  Container = styled.div`
width: 100%;
background-color: black;
padding: 10px;
` ;
const Wrapper  = styled.div`
display: flex;
`

const Home = () => {
  return (
    <Container>
        <Navbar />
        <Wrapper>

        </Wrapper>
    </Container>
  )
}
export default Home