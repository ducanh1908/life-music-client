import ControlPointIcon from "@mui/icons-material/ControlPoint";
import DownloadForOfflineOutlinedIcon from "@mui/icons-material/DownloadForOfflineOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { createPlaylist, fetchPlaylist } from './../../redux/playlistSlice/playlistSlice';
import { yupResolver } from "@hookform/resolvers/yup";
import LinearProgress from "@mui/material/LinearProgress";
import { unwrapResult } from "@reduxjs/toolkit";
import { useSnackbar } from "notistack";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import InputField from "../../components/FormControler/InputField/InputField";
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router';

const Container = styled.div`
  height: 100%;
  width: 100%;

  border-radius: 5px;
  background: linear-gradient(
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.1)
  );
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Menu = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  color: #b3b3b3;
`;
const MenuItem = styled.div`
.item-link {
  display: flex;
  padding: 8px 0;
  text-decoration: none;
  color: #b3b3b3;
  cursor: pointer;
  &:hover {
    color: #fff;
  }
}
 
`;
const ItemIcon = styled.div``;
const ItemDesc = styled.p`
  margin-left: 10px;
  font-size: 16px;
  font-weight: 500;
`;
const Hr = styled.div`
  border: 1px solid #a7a7a7;
  width: 80%;
`;

const CreateList = styled.div`
  color: #b3b3b3;
  cursor: pointer;
  &:hover {
    color: #fff;
  }
`;
const ListTitle = styled.p`
  padding: 10px 0;
  font-weight: 500;
`;
const Form = styled.div`
 width: 100%;
display: flex;
flex-direction: column;
align-items: center;

`
const style = {
  position: "absolute",
  display: "flex",
 flexDirection: "column",
 alginItem:"center",
 justifyContent: "center",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4
};
const schema = yup
  .object()
  .shape({
    playlist: yup.string()
    .required("Tên Playlist không được để trống")
    .min(2, "Tên Playlist quá ngắn")
    .max(25, "Tên Playlist quá 25 ký tự "),
  })
  .required();
const GuestSide = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const user = useSelector(state=> state.user.user);
const playlist = useSelector(state=> state.playlist.playlist);
console.log(playlist);
  const { enqueueSnackbar } = useSnackbar();
  const form = useForm({
    defaultValues: {
      playlist: "",
    },
    resolver: yupResolver(schema),
  });
  
  useEffect(()=> {
    dispatch(fetchPlaylist)
  },[])


const handleSubmit = async (data) => {
  console.log(data)
  try {
    const action = await createPlaylist(data);
      const resultAction = await dispatch(action);
      const playlist = unwrapResult(resultAction);
      enqueueSnackbar("Bạn đã đăng ký thành công", { variant: "success" });
      navigate('/playlist')
 
  } catch (error) {
    console.log(error.message);
    enqueueSnackbar(error.message, { variant: "error" });

  }
};
const { isSubmitting } = form.formState;
  return (
    <Container>
      <Wrapper>
        <Menu>
          <MenuItem>
            <NavLink className='item-link' to={"/library"}>
              <ItemIcon>
                {" "}
                <LibraryMusicIcon />
              </ItemIcon>
              <ItemDesc>Thư viện</ItemDesc>
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink className='item-link'  onClick={handleOpen}>
              <ItemIcon>
                {" "}
                <ControlPointIcon />
              </ItemIcon>
              <ItemDesc>Tạo playlist</ItemDesc>
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink className='item-link'>
              <ItemIcon>
                <FavoriteIcon />
              </ItemIcon>
              <ItemDesc>Bài hát đã thích</ItemDesc>
            </NavLink>
          </MenuItem>

          <MenuItem>
            <NavLink className='item-link' to={"/upload"}>
              <ItemIcon>
                <DownloadForOfflineOutlinedIcon />
              </ItemIcon>
              <ItemDesc>Tải lên bài hát</ItemDesc>
            </NavLink>
          </MenuItem>

          <MenuItem>
            <NavLink className='item-link' to={"/list"}>
              <ItemIcon>
                <DownloadForOfflineOutlinedIcon />
              </ItemIcon>
              <ItemDesc>Bài hát</ItemDesc>
            </NavLink>
          </MenuItem>
        </Menu>
        <Hr />


        <CreateList>
          <ListTitle> Danh sách bài hát của tôi</ListTitle>
        </CreateList>
        
      </Wrapper>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           Tạo Playlist
          </Typography>
        
            <form onSubmit={form.handleSubmit(handleSubmit)}>
              {isSubmitting && (
                <LinearProgress
                sx={{width:'100%',color: "grey.500" }}
                color="secondary" 
                />
              )}      
                <Form>
              <InputField name="playlist" form={form} />
              <Button sx={{ mt:1,p:2,width:'50%' ,borderRadius:'500px'}} disabled={isSubmitting} type="submit"  variant="contained" color="inherit">
              Thêm mới
              </Button>
          </Form>
            </form>
          
        </Box>
      </Modal>
    </Container>
  );
};

export default GuestSide;
