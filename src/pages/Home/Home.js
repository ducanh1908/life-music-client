import React from 'react';
import styled from 'styled-components';

import Navbar from './../../components/Navbar/Navbar';
import Sidebar from './../../components/Sidebar/Sidebar';
import Body from './../../components/Body/Body';
import Guest from './../Guest/Guest';

const  Container = styled.div`
width: 100%;
/* background-color: black; */
` ;
const Wrapper  = styled.div`
display: flex;
`

const Home = () => {
  return (
    <Container>
        {/* <Navbar />
        <Wrapper>
      <Body />
        </Wrapper> */}
        <Guest />
    </Container>
  )
}
export default Home