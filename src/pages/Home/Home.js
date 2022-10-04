import React from "react";
import { Outlet } from "react-router";
import styled from "styled-components";
import GuestFooter from "../../components/GuestFooter/GuestFooter";
import GuestNavbar from "./../../components/GuestNavbar/GuestNavbar";
import GuestSide from "./../../components/GuestSide/GuestSide";
const Container = styled.div`
  max-width: 100vw;
  max-height: 100vh;
  background-color: #040404;
  display: grid;
  grid-template-rows:10vh 90vh;
  grid-row-gap: 5px;
  overflow: hidden;
`;

const Body = styled.div`
display: grid;
grid-column-gap: 10px;

grid-template-columns: 15vw 85vw;
overflow: hidden;
  &::-webkit-scrollbar {
    width: 0.7rem;
    &-thumb {
      background-color: rgba(255, 255, 255,0.6);
    }
  }
`
const Home = () => {
  return ( 
  <Container>
   <GuestNavbar />
   <Body>
      <GuestSide />
      <Outlet />
   </Body>
   <GuestFooter />
  </Container> 
  );
};
export default Home;
