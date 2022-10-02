import React, {useState} from 'react';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import styled from 'styled-components';
import ModeIcon from '@mui/icons-material/Mode';
import LockIcon from '@mui/icons-material/Lock';
import HomeIcon from '@mui/icons-material/Home';
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import {updateAvatar} from "../../redux/userSlice/userSlice";
import {unwrapResult} from "@reduxjs/toolkit";
import {useSnackbar} from "notistack";
const Container2 = styled.div`
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
  width: 100%;
  height: 100%;
  padding: 20px;
`
const Title = styled.div`
  margin-left: 50px;
  text-decoration: none;
  font-size: 20px;
  color: black;
`
const InforAvatar=styled.div`
  width: 150px;
  height: 150px;
  overflow: hidden;
  border-radius: 50%;
  position: relative;
  margin: 15px auto;
  border: 1px solid #ddd;
  cursor: pointer;
`
const InfoImg=styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`
const InforSpan=styled.span`
  position: absolute;
  bottom: -15%;
  left: 0;
  width: 100%;
  height: 50%;
  text-align: center;
  color: orange;
  transition: 0.3s ease-in-out;
  background: #fff5;
`
const Input = styled.input`
  position: absolute;
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  opacity: 0;
`
const SideBarProfile = () => {
    const user = useSelector(state=> state.user.user)
    const [avatar, setAvatar] = useState('');
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();
    const changeAvatar = (e) => {
        const file = e.target.files[0]
        setAvatar(file)
    }
    const uploadAvatar = async (e) => {
        e.preventDefault()
        try {
            const action = await updateAvatar(avatar);
            const resultAction = await dispatch(action);
            const user = unwrapResult(resultAction);
            enqueueSnackbar('Cập nhật ảnh đại diện thành công', {variant: "success"});
        } catch (error) {
            console.log(error);
            enqueueSnackbar(error, {variant: "error"});
        }
    };

    return (
        <Container2>
            <form onSubmit={uploadAvatar}>
                <Logo>
                    <InforAvatar>
                        <InfoImg src={avatar ? URL.createObjectURL(avatar) : user.profileImage}
                                 style={{filter:'invert(0)'}}
                                 alt="avatar" />
                        <InforSpan >
                            <i>
                                <CameraAltIcon/>
                            </i>
                            <p >Change</p>
                            <Input type="file" name="file" id="file_up"
                                   accept="image/*" onChange={changeAvatar}/>
                        </InforSpan>
                    </InforAvatar>
                </Logo>
                     <button  type="submit"  >save</button>
            </form>

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