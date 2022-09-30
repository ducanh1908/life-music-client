import React from 'react'
import Content from '../Content/Content'
import Sidebar from '../Sidebar/Sidebar'
import styled from 'styled-components';

const  Container = styled.div`
display: flex;
justify-content:space-between;
`
const Body = () => {
  return (
    <Container>
        <Sidebar />
        <Content />
    </Container>
  )
}

export default Body