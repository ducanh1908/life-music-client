import React from 'react';
import styled from 'styled-components'
import BodyProfile from "./bodyProfile";
import SideBarProfile from "./sideBarProfile";
const Container=styled.div`
    display:flex;
  justify-content: space-between;
`
const Profile = () => {
    return (
        <Container>
            <SideBarProfile/>
            <BodyProfile/>
        </Container>
    );
};

export default Profile;