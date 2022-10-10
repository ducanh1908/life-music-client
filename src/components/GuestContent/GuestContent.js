import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
// import { style } from "@mui/material/styles";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import { getAllPlaylist } from "./../../redux/playlistSlice/playlistAdmin";
import Slider from "./../Slider/Slider";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { InstallDesktopSharp } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: "#3a3a3a",
//   ...theme.typography.body2,
//   textAlign: "center",
//   display: 'flex',
//   alignItems: "center",
//   height: theme.spacing(12),
//   color:'#fff',
// }));

const Container = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 10px;
  padding: 24px 24px 0;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 0.8rem;
    border-radius: 10px;
    &-thumb {
      background-color: rgba(255, 255, 255, 0.6);
    }
  }
  background: linear-gradient(
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.1)
  );
`;

const Wrapper = styled.div``;

const Top = styled.div``;
const TopTitle = styled.h1`
  color: #ffffff;
  display: flex;
  align-items: start;
`;
const ListMe = styled.div``;
const ListMeImg = styled.img`
  max-height: 100%;
`;
const ListMeTitle = styled.span`
  font-size: 16px;
  font-weight: bold;
  margin-left: 10px;
`;

const Categories = styled.div`
  margin-top: 20px;
`;
const Playlist = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  margin-top: 30px;
  .playlist-item {
    text-decoration: none;
  }
`;
const PlaylistItem = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  -webkit-box-shadow: 0px 0px 5px 3px rgba(255, 255, 255, 0.2);
  box-shadow: 0px 0px 5px 3px rgba(255, 255, 255, 0.1);
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
const PlaylistImage = styled.img`
  width: 159px;
  height: 159px;
  border-radius: 5px;
`;
const PlaylistTitle = styled.p`
  color: #fff;
  font-size: 16px;
  display: block;
  font-weight: 700;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  word-wrap: break-word;
  /* padding: 10px 0; */
`;
const PlaylistSinger = styled.span`
  padding: 10px 0;
  font-size: 14px;
  color: #a7a7a7;
`;
const Header = styled.div`
  height: 250px;
`;

const NewSong = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
`;
const SongInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 10px;
  flex: 1;
`;
const SongItem = styled.div`
  background-color: transparent;

  display: flex;
  justify-items: center;
  align-items: center;
  color: #fff;
  height: 80px;
  .move-icon {
    display: none;
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    .move-icon {
     display: block;
     backgroundColor: "#fff",
    }
  }
`;

const SongImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 10px;
  margin-left: 10px;
`;
const SongName = styled.span`
  display: flex;
  
`;
const SongSinger = styled.span``;

const GuestContent = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const idPop = open ? 'simple-popover' : undefined;


  const playlistAdmin = useSelector(
    (state) => state.playlistAdmin.playlistAdmin
  );
  const { id } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPlaylist());
  }, [id]);

  const handleClickPlaylist = (id) => {
    console.log(id);
  };
  return (
    <Container>
      <Wrapper>
        <Header>
          <Slider />
        </Header>
        <Top>
          <TopTitle>Mới phát hành</TopTitle>
          <NewSong>
            <SongItem>
              <SongImg src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/2/b/8/d/2b8dbff3412931b01539c1aac4a3f905.jpg" />
              <SongInfo>
                <SongName>Nguyệt Thượng Hạ Lưu</SongName>
                <SongSinger>Đạt G</SongSinger>
              </SongInfo>
              <IconButton >
              <MoreVertIcon className="move-icon" aria-describedby={idPop} variant="contained" onClick={handleClick}/>
              </IconButton>
            </SongItem>
           
          </NewSong>
          
          
      <Popover
        id={InstallDesktopSharp}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
      </Popover>
          {/* <Box sx={{ flexGrow: 1, marginTop:2 }}>
            <Grid container spacing={2} >
              <Grid item xs={4}>
                <Item >
                  <ListMeImg src="https://images.unsplash.com/photo-1492681290082-e932832941e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                  <ListMeTitle>Lil Baby</ListMeTitle>
                  <PlayArrowRoundedIcon />
                </Item>
              </Grid>
              <Grid item xs={4}>
                 <Item>
                  <ListMeImg src="https://images.unsplash.com/photo-1492681290082-e932832941e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                  <ListMeTitle>Lil Baby</ListMeTitle>
                </Item>
              </Grid>
              <Grid item xs={4}>
                 <Item>
                  <ListMeImg src="https://images.unsplash.com/photo-1492681290082-e932832941e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                  <ListMeTitle>Lil Baby</ListMeTitle>
                </Item>
              </Grid>
              <Grid item xs={4}>
                 <Item>
                  <ListMeImg src="https://images.unsplash.com/photo-1492681290082-e932832941e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                  <ListMeTitle>Lil Baby</ListMeTitle>
                </Item>
              </Grid>
            </Grid>
          </Box> */}
          {/* <ListMe></ListMe> */}
        </Top>
        <Categories>
          <TopTitle>Chào buổi sáng</TopTitle>
          <Playlist>
            {playlistAdmin &&
              playlistAdmin.map((playlist) => (
                <PlaylistItem key={playlist._id}>
                  <NavLink
                    className="playlist-item"
                    to={`playlists/${playlist._id}`}
                  >
                    <PlaylistImage src={playlist.image} />
                    <PlaylistTitle> {playlist.name}</PlaylistTitle>
                    <PlaylistSinger>{playlist.singer}</PlaylistSinger>
                  </NavLink>
                </PlaylistItem>
              ))}
          </Playlist>
          <TopTitle>Chào buổi sáng</TopTitle>
          <Playlist>
            {playlistAdmin &&
              playlistAdmin.map((playlist) => (
                <PlaylistItem key={playlist._id}>
                  <NavLink
                    className="playlist-item"
                    to={`playlists/${playlist._id}`}
                  >
                    <PlaylistImage src={playlist.image} />
                    <PlaylistTitle> {playlist.name}</PlaylistTitle>
                    <PlaylistSinger>{playlist.singer}</PlaylistSinger>
                  </NavLink>
                </PlaylistItem>
              ))}
          </Playlist>
          <TopTitle>Chào buổi sáng</TopTitle>
          <Playlist>
            {playlistAdmin &&
              playlistAdmin.map((playlist) => (
                <PlaylistItem key={playlist._id}>
                  <NavLink
                    className="playlist-item"
                    to={`playlists/${playlist._id}`}
                  >
                    <PlaylistImage src={playlist.image} />
                    <PlaylistTitle> {playlist.name}</PlaylistTitle>
                    <PlaylistSinger>{playlist.singer}</PlaylistSinger>
                  </NavLink>
                </PlaylistItem>
              ))}
          </Playlist>
        </Categories>

        {/* <Footer /> */}
      </Wrapper>
    </Container>
  );
};

export default GuestContent;
