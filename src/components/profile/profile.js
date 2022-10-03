import React, {useState} from 'react';
import styled from 'styled-components';
import {Outlet} from "react-router";
import SideBarProfile from "./sideBarProfile";
import Information from "./information";
import UpdateProfile from "./updateProfile";
import UpdatePassword from "./updatePassword";
import GuestNavbar from '../GuestNavbar/GuestNavbar';
import GuestFooter from './../GuestFooter/GuestFooter';

const Container=styled.div`
    background-color: #333;
    width: 100%;
    height: 100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    overflow: hidden;
`
const Body = styled.div`
display:flex;
`
const Profile = () => {
    return (
        <Container>
            <GuestNavbar />
            <Body>
                  <SideBarProfile  /> 
            <Outlet/>
            </Body>
          
            
        </Container>
    );
};

export default Profile;