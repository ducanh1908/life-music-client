import React from 'react';
import Avatar from '@mui/material/Avatar';
import styled from 'styled-components';
import ModeIcon from '@mui/icons-material/Mode';
import LockIcon from '@mui/icons-material/Lock';
import HomeIcon from '@mui/icons-material/Home';
import {NavLink} from "react-router-dom";
import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';
const Container2 = styled.div`
margin-top:10px;
  background-color: grey;
    width:30%;
  height: 100vh;
`
const Logo=styled.div`
align-items: center;
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 10px;
  
`
const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  padding: 10px;
`
const MenuItem = styled.div`
  display: flex;
  justify-content: start;
  border-top: 1px solid cornsilk;
  width: 80%;
  height: 100%;
  padding: 20px;
`
const Title = styled.div`
  margin-left: 50px;
  text-decoration: none;
  font-size: 20px;
  color: black;
`
const SideBarProfile = () => {
    const user = useSelector(state=> state.user.user)
    return (
        <Container2>
            <Logo>
                <Avatar alt="Cindy Baker" src={user.profileImage} sx={{width:150 ,height:150}}/>
            </Logo>
            <Typography>
                {user.fullname} fasdfasd
            </Typography>
            <Menu>
                <MenuItem>
                    <HomeIcon />
                    <Title>
                        <NavLink to={'/profile'} >
                            Tổng quan tài khoản
                        </NavLink>
                    </Title>
                </MenuItem>
            </Menu>
            <Menu>
                <MenuItem>
                    <ModeIcon />
                    <Title>
                        <NavLink to={'/profile/update'}>
                            Sửa hồ sơ
                        </NavLink>
                    </Title>
                </MenuItem>
            </Menu>
            <Menu>
                <MenuItem>
                    <LockIcon />
                    <Title>
                        <NavLink to={'/profile/password'}>
                            Đổi mật khẩu
                        </NavLink>
                    </Title>

                </MenuItem>
            </Menu>
        </Container2>
    );
};

export default SideBarProfile;