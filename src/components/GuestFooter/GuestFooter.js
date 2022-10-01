import React from "react";
import styled from "styled-components";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Audio from './../Audio/Audio';
const Container = styled.div`
  height: 100%;
  background-color: #333;
  display:grid;
  grid-template-columns:1fr 2fr;
`;

const Song = styled.div`
display:flex;
justify-content: space-between;
text-align: center;
align-items: center;
`;
const SongImage = styled.img`
width:90px;
height:90px;
margin-left: 10px;
`;

const SongContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 10px;
  flex: 1;
`;
const SongName = styled.p`
cursor: pointer;
font-size: 16px;
  font-weight: bold;
  color: #fff;
`;
const SongSinger = styled.span`
cursor: pointer;

font-size:14px;
font-weight: 300;
color: #a7a7a7;
`;

const SongLike = styled.div`
text-align: start;
flex:1;
color: #fff;
`;

const AudioPlay = styled.div``;

const GuestFooter = () => {
  
  return (
    <Container>
      <Song>
        <SongImage src="https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>
        <SongContent>
          <SongName>Waiting for you</SongName>
          <SongSinger>Bột giặt OMO</SongSinger>
        </SongContent>
        <SongLike >
          <FavoriteBorderOutlinedIcon />
          </SongLike>
      </Song>
      <AudioPlay >
        <Audio />
      </AudioPlay>
    </Container>
  );
};

export default GuestFooter;
