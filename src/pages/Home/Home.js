import React from 'react';
import styled from 'styled-components';

import Navbar from './../../components/Navbar/Navbar';

const  Container = styled.div`
width: 100%;
background-color: black;

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