
import React from 'react'
import styled from 'styled-components'
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Avatar from '@mui/material/Avatar';
const Container = styled.div`
    width: 100%;
    height: 70px;
    display:flex;
    align-items: center;
    justify-content: space-between;
    background-color: #000000;
`;
const Logo = styled.div`
flex: 1;
`;
const Center = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: center;
`;
const HomeIcon = styled.a`
width: 50px;
height: 50px;
padding: 10px;
background-color: #2a2a2a;
color: #ffff;
border-radius: 50%;
margin-right: 10px;
display: flex;
align-items: center;
justify-content: center;
`;
const HomeForm = styled.div`
display: flex;
align-items: center;
width: 100%;
height: 48px;
background-color: #2a2a2a;
border-radius: 500px;
&:focus {
 background-color: aqua;
}
`;
const SearchButton = styled.button`
display: flex;
height: 30px;
width: 30px;
background: transparent;
color: #fff;
border: 0;
outline: none;
margin-left: 5px;
padding: 5px;
align-items: center;
`;
const Input = styled.input`
width: 100%;
height: 100%;
padding: 0 10px;
border: 0;
flex: 1;
outline: none;
background: transparent;
color: #fff;
`
const Profile = styled.div`
padding: 10px;
flex: 1;
display: flex;
justify-content:end;
cursor: pointer;
`;

const Navbar = () => {
  return (
    <Container>
      <Logo>
      <LibraryMusicOutlinedIcon style={{ width: 40, height: 40, color:"white" }} />
      </Logo>
      <Center>
        <HomeIcon href='#'>
          <HomeOutlinedIcon  style={{ width: 40, height: 40, color:"white" }}/>
        </HomeIcon>
        <HomeForm>
          <SearchButton>
            <SearchOutlinedIcon />
          </SearchButton>
          <Input placeholder='Bạn muốn nghe gì .'/>
        </HomeForm>
      </Center>
      <Profile>
      <Avatar  src='https://i.pinimg.com/736x/c5/16/ed/c516ed9fdeffcdcf8345b71dd221b616.jpg' sx={{border: "1px solid #2a2a2a" }}/>
      </Profile>
     



    </Container>
  )
}

export default Navbar