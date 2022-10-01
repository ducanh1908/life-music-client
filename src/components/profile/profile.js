import React, {useState} from 'react';
import styled from 'styled-components';
import {Outlet} from "react-router";
import SideBarProfile from "./sideBarProfile";
import Information from "./information";
import UpdateProfile from "./updateProfile";
import UpdatePassword from "./updatePassword";
import GuestNavbar from '../GuestNavbar/GuestNavbar';

const Container=styled.div`
margin-top: 70px;
    display:flex;
  justify-content: space-between;
`
const Profile = () => {
    return (
        <Container>
            <GuestNavbar />
            <SideBarProfile  />
            <Outlet/>
        </Container>
    );
};

export default Profile;