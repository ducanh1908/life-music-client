import React, {useState} from 'react';
import styled from 'styled-components';
import {Outlet} from "react-router";
import SideBarProfile from "./sideBarProfile";
import Information from "./information";
import UpdateProfile from "./updateProfile";
import UpdatePassword from "./updatePassword";

const Container=styled.div`
    display:flex;
  justify-content: space-between;
`
const Profile = () => {
    return (
        <Container>
            <SideBarProfile />
            <Outlet/>
        </Container>
    );
};

export default Profile;