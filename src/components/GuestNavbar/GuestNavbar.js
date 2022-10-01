import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Avatar, Menu, MenuItem, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router';
import { Link } from "react-router-dom";
import styled from "styled-components";
import { logout } from "../../redux/userSlice/userSlice";

const Container = styled.div`

  height:70px;
  width: 100%;
  grid-column-gap: 10px;
  background-color: #040404;
  position: fixed;
  display: grid;
  top: 0;
  left:0;
  z-index:10;
  grid-template-columns: 1fr 2fr 1fr; ;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HomeIcon = styled.a`
  width: 56px;
  height: 56px;
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
  width: 70%;
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
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  margin-right: 20px;
`;

const GuestNavbar = () => {

  const isLoggedInUser = useSelector(state => state.user.user )

  const isLoggedIn = !!isLoggedInUser._id;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  }
  return (
    <Container>
      <Left>
        <Typography
          variant="h5"
          sx={{
            display: { xs: "none", md: "flex" },
            marginLeft: 1,
            fontWeight: 700,
            color: "white",
          }}
        >
          Music Life
        </Typography>
      </Left>
      <Center>
        <HomeIcon href="/home">
          <HomeRoundedIcon
            sx={{ color: "white", width: "56px", height: "56px" }}
          />
        </HomeIcon>
        <HomeForm>
          <SearchButton>
            <SearchOutlinedIcon />
          </SearchButton>
          <Input placeholder="Bạn muốn nghe gì..." />
        </HomeForm>
      </Center>
      <Right>
        <Stack direction="row" spacing={2}>
          {!isLoggedIn && (

            <>
          <Button href="/register" variant="text" sx={{color:'white'}}>Đăng ký</Button>    
          <Button href="/login" variant="text" sx={{color:'white'}}>Đăng Nhập</Button>
            </>
          )}

{isLoggedIn && (
  <Avatar
   onClick={handleClick}
    alt="Duc Anh"
    src={isLoggedInUser.profileImage}
    sx={{ width: 50, height: 50, cursor: 'pointer'}}
  />

)}
        </Stack>
      </Right>

      <Menu
      
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem> <Link to="/profile" >
        Hồ sơ
        </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>Đổi mật khẩu</MenuItem>
        <MenuItem onClick={handleLogout}>Đăng xuất</MenuItem>
      </Menu>
    </Container>
  );
};

export default GuestNavbar;
