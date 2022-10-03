import React from "react";
import styled from "styled-components";
import GuestSide from "./../../components/GuestSide/GuestSide";
import GuestContent from "../../components/GuestContent/GuestContent";
import GuestFooter from "../../components/GuestFooter/GuestFooter";
import GuestNavbar from "./../../components/GuestNavbar/GuestNavbar";
import { Outlet } from "react-router";

const Container = styled.div`
  max-width: 100vw;
  max-height: 100vh;
  background-color: #040404;
  display: grid;
  grid-template-rows: 10vh 78vh 12vh;
grid-row-gap: 5px;
overflow: hidden;
`;

const Body = styled.div`
  display: grid;
  grid-template-columns: 15vw 85vw;
  grid-column-gap: 10px;
  overflow: hidden;
  &::-webkit-scrollbar {
    width: 0.7rem;
    &-thumb {
      background-color: rgba(255, 255, 255,0.6);
    }
  }
`;

const Bottom = styled.div`
  height: 100%;
  width: 100%;
  /* overflow: hidden; */

`;
const Sidebar = styled.div``;
const Content = styled.div`
  height: 78vh;
  max-height: 100%;
  width: 100%;
  overflow-y: hidden;
 
`;
const Navbar = styled.div``;

const Guest = () => {
  return (
    <Container>
      <Navbar>
        <GuestNavbar />
      </Navbar>
      <Body>
        <Sidebar>
          <GuestSide />
        </Sidebar>
        <Content>
          <GuestContent />
          {/* <Outlet /> */}
        </Content>
       
      </Body>
      <Bottom>
        <GuestFooter />
      </Bottom>
    </Container>
  );
};

export default Guest;
