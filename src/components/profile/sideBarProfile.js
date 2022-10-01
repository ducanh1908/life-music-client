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

  background-color: transparent;
    width:30vw;
  height: 100vh;
  border-radius:10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  `
const Logo=styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  padding: 10px;
  
`
const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 80%;
  padding: 10px;
`

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  border-top: 1px solid cornsilk;
  width: 100%;
  height: 100%;
  padding: 20px;

  .icon {
    width: 50px;
    height: 50px;
    color:#7a7a7a
  }

`
const Title = styled.div`
padding-left: 10px;
  font-size: 24px;
  color: #7a7a7a;
  .nav_link {
    text-decoration: none;
    font-size: 24x;
    color: #7a7a7a;
    &:hover {
   color: #fff
   }
  }
`
const SideBarProfile = () => {
    const user = useSelector(state=> state.user.user)
    return (
        <Container2>
            <Logo>
                <Avatar alt="Cindy Baker" src={user.profileImage} sx={{width:150 ,height:150}}/>
            </Logo>
            <Typography variant = 'h4' component='h2'>
                {user.fullname} fasdfasd
            </Typography>
            <Menu>
                <MenuItem>
                    <HomeIcon  className='icon'/>
                    <Title>
                        <NavLink  className= "nav_link"to={'/profile'} >
                            Tổng quan tài khoản
                        </NavLink>
                    </Title>
                </MenuItem>
            
                <MenuItem>
                    <ModeIcon  className='icon' />
                    <Title>
                        <NavLink className= "nav_link" to={'/profile/update'}>
                            Sửa hồ sơ
                        </NavLink>
                    </Title>
                </MenuItem>
            
                <MenuItem>
                    <LockIcon   className='icon'/>
                    <Title>
                        <NavLink className= "nav_link" to={'/profile/password'}>
                            Đổi mật khẩu
                        </NavLink>
                    </Title>

                </MenuItem>
            </Menu>
        </Container2>
    );
};

export default SideBarProfile;