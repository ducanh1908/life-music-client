
import React from "react";
import style from "styled-components";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#3a3a3a",
  ...theme.typography.body2,
  textAlign: "center",
  display: 'flex',
  alignItems: "center",
  height: theme.spacing(12),
  color:'#fff'
}));


const Container = style.div`
height:100vh;
width: 100%;
margin-top: 70px;
border-radius: 5px;
padding: 24px 24px 0;
overflow:scroll;
background: linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.1)) ;

`

const Wrapper = style.div`
`;

const Top = style.div`
`;
const TopTitle = style.h1`
color: #ffffff;
display: flex;
align-items: start;
`;
const ListMe = style.div`
`;
const ListMeImg = style.img`
max-height:100%;
`;
const ListMeTitle = style.span`
font-size: 16px;
font-weight: bold;
margin-left:10px;
`;

const Categories = style.div`
margin-top:20px;
`
const Playlist = style.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr; 
grid-column-gap: 20px;
grid-row-gap: 20px;
margin-top:30px;
`
const PlaylistItem = style.div`
width: 100%;
height: 280px;
background-color: #3a3a3a;
border-radius: 5px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 16px;

`
const PlaylistImage = style.img`
width: 159px;
height:159px;
border-radius: 5px;
`
const PlaylistTitle = style.p`
color: #fff;
font-size:16px;
font-weight: 700;
display: -webkit-box;
-webkit-line-clamp: 1;
-webkit-box-orient: vertical;
text-overflow: ellipsis;
overflow: hidden;
word-wrap: break-word;
padding: 10px 0;
`
const PlaylistSinger = style.span`
padding: 10px 0;
font-size: 14px;
color: #a7a7a7;
`




const GuestContent = () => {
  // const today = new Date();
  // const  time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  
  return (
    <Container>
      <Wrapper>
        <Top>    
          <TopTitle>Chào buổi sáng</TopTitle>
          <Box sx={{ flexGrow: 1, marginTop:2 }}>
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
          </Box>
          <ListMe></ListMe>
        </Top>
    <Categories >
      <TopTitle>Chào buổi sáng</TopTitle>
      <Playlist >
        <PlaylistItem>
          <PlaylistImage  src="https://seed-mix-image.spotifycdn.com/v6/img/artist/0QHgL1lAIqAw0HtD7YldmP/vi/default"/>
          <PlaylistTitle> Tuyển tập của DJ Khaled Mix</PlaylistTitle>
          <PlaylistSinger>Wiz Khalifa, Big Sean, Future và nhiều hơn nữa</PlaylistSinger>
        </PlaylistItem>
        <PlaylistItem>
          <PlaylistImage  src="https://seed-mix-image.spotifycdn.com/v6/img/artist/0QHgL1lAIqAw0HtD7YldmP/vi/default"/>
          <PlaylistTitle> Tuyển tập của DJ Khaled Mix</PlaylistTitle>
          <PlaylistSinger>Wiz Khalifa, Big Sean, Future và nhiều hơn nữa</PlaylistSinger>
        </PlaylistItem>
        <PlaylistItem>
          <PlaylistImage  src="https://seed-mix-image.spotifycdn.com/v6/img/artist/0QHgL1lAIqAw0HtD7YldmP/vi/default"/>
          <PlaylistTitle> Tuyển tập của DJ Khaled Mix</PlaylistTitle>
          <PlaylistSinger>Wiz Khalifa, Big Sean, Future và nhiều hơn nữa</PlaylistSinger>
        </PlaylistItem> <PlaylistItem>
          <PlaylistImage  src="https://seed-mix-image.spotifycdn.com/v6/img/artist/0QHgL1lAIqAw0HtD7YldmP/vi/default"/>
          <PlaylistTitle> Tuyển tập của DJ Khaled Mix</PlaylistTitle>
          <PlaylistSinger>Wiz Khalifa, Big Sean, Future và nhiều hơn nữa</PlaylistSinger>
        </PlaylistItem> <PlaylistItem>
          <PlaylistImage  src="https://seed-mix-image.spotifycdn.com/v6/img/artist/0QHgL1lAIqAw0HtD7YldmP/vi/default"/>
          <PlaylistTitle> Tuyển tập của DJ Khaled Mix</PlaylistTitle>
          <PlaylistSinger>Wiz Khalifa, Big Sean, Future và nhiều hơn nữa</PlaylistSinger>
        </PlaylistItem> <PlaylistItem>
          <PlaylistImage  src="https://seed-mix-image.spotifycdn.com/v6/img/artist/0QHgL1lAIqAw0HtD7YldmP/vi/default"/>
          <PlaylistTitle> Tuyển tập của DJ Khaled Mix</PlaylistTitle>
          <PlaylistSinger>Wiz Khalifa, Big Sean, Future và nhiều hơn nữa</PlaylistSinger>
        </PlaylistItem> <PlaylistItem>
          <PlaylistImage  src="https://seed-mix-image.spotifycdn.com/v6/img/artist/0QHgL1lAIqAw0HtD7YldmP/vi/default"/>
          <PlaylistTitle> Tuyển tập của DJ Khaled Mix</PlaylistTitle>
          <PlaylistSinger>Wiz Khalifa, Big Sean, Future và nhiều hơn nữa</PlaylistSinger>
        </PlaylistItem>
         <PlaylistItem>
          <PlaylistImage  src="https://seed-mix-image.spotifycdn.com/v6/img/artist/0QHgL1lAIqAw0HtD7YldmP/vi/default"/>
          <PlaylistTitle> Tuyển tập của DJ Khaled Mix</PlaylistTitle>
          <PlaylistSinger>Wiz Khalifa, Big Sean, Future và nhiều hơn nữa</PlaylistSinger>
        </PlaylistItem>
      </Playlist>
    </Categories>

    <Categories >
      <TopTitle>Chào buổi sáng</TopTitle>
      <Playlist >
        <PlaylistItem>
          <PlaylistImage  src="https://seed-mix-image.spotifycdn.com/v6/img/artist/0QHgL1lAIqAw0HtD7YldmP/vi/default"/>
          <PlaylistTitle> Tuyển tập của DJ Khaled Mix</PlaylistTitle>
          <PlaylistSinger>Wiz Khalifa, Big Sean, Future và nhiều hơn nữa</PlaylistSinger>
        </PlaylistItem>
        <PlaylistItem>
          <PlaylistImage  src="https://seed-mix-image.spotifycdn.com/v6/img/artist/0QHgL1lAIqAw0HtD7YldmP/vi/default"/>
          <PlaylistTitle> Tuyển tập của DJ Khaled Mix</PlaylistTitle>
          <PlaylistSinger>Wiz Khalifa, Big Sean, Future và nhiều hơn nữa</PlaylistSinger>
        </PlaylistItem>
        <PlaylistItem>
          <PlaylistImage  src="https://seed-mix-image.spotifycdn.com/v6/img/artist/0QHgL1lAIqAw0HtD7YldmP/vi/default"/>
          <PlaylistTitle> Tuyển tập của DJ Khaled Mix</PlaylistTitle>
          <PlaylistSinger>Wiz Khalifa, Big Sean, Future và nhiều hơn nữa</PlaylistSinger>
        </PlaylistItem> <PlaylistItem>
          <PlaylistImage  src="https://seed-mix-image.spotifycdn.com/v6/img/artist/0QHgL1lAIqAw0HtD7YldmP/vi/default"/>
          <PlaylistTitle> Tuyển tập của DJ Khaled Mix</PlaylistTitle>
          <PlaylistSinger>Wiz Khalifa, Big Sean, Future và nhiều hơn nữa</PlaylistSinger>
        </PlaylistItem> <PlaylistItem>
          <PlaylistImage  src="https://seed-mix-image.spotifycdn.com/v6/img/artist/0QHgL1lAIqAw0HtD7YldmP/vi/default"/>
          <PlaylistTitle> Tuyển tập của DJ Khaled Mix</PlaylistTitle>
          <PlaylistSinger>Wiz Khalifa, Big Sean, Future và nhiều hơn nữa</PlaylistSinger>
        </PlaylistItem> <PlaylistItem>
          <PlaylistImage  src="https://seed-mix-image.spotifycdn.com/v6/img/artist/0QHgL1lAIqAw0HtD7YldmP/vi/default"/>
          <PlaylistTitle> Tuyển tập của DJ Khaled Mix</PlaylistTitle>
          <PlaylistSinger>Wiz Khalifa, Big Sean, Future và nhiều hơn nữa</PlaylistSinger>
        </PlaylistItem> <PlaylistItem>
          <PlaylistImage  src="https://seed-mix-image.spotifycdn.com/v6/img/artist/0QHgL1lAIqAw0HtD7YldmP/vi/default"/>
          <PlaylistTitle> Tuyển tập của DJ Khaled Mix</PlaylistTitle>
          <PlaylistSinger>Wiz Khalifa, Big Sean, Future và nhiều hơn nữa</PlaylistSinger>
        </PlaylistItem>
         <PlaylistItem>
          <PlaylistImage  src="https://seed-mix-image.spotifycdn.com/v6/img/artist/0QHgL1lAIqAw0HtD7YldmP/vi/default"/>
          <PlaylistTitle> Tuyển tập của DJ Khaled Mix</PlaylistTitle>
          <PlaylistSinger>Wiz Khalifa, Big Sean, Future và nhiều hơn nữa</PlaylistSinger>
        </PlaylistItem>
      </Playlist>
    </Categories>
         
         

      </Wrapper>
    </Container>
  );
};

export default GuestContent;
