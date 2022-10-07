import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Player from "../Player/Player";



const Container = styled.div`
  background: linear-gradient(
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.1)
  );
  overflow: auto;
`;

const Songs = styled.div``;
const SongItem = styled.div`
  display: flex;
  margin: 10px;
  /* background-color: #7a7a7a; */
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const SongImage = styled.img`
  width: 50px;
  height: 50px;
`;
const SongName = styled.p`
  color: #fff;
`;
const SongSinger = styled.span``;



const Song = (props) => {
  const song = useSelector((state) => state.song.songs);
  const onTrackSelect =(index) => {
console.log(index)
  }

  return (
    <Container>
      
      {song.map((item, index) => (
          <SongItem key={item.id} onClick ={ () => onTrackSelect(index)}>
            <SongImage src={item.image}></SongImage>
            <SongName>{item.name}</SongName>
            <SongSinger>{item.singer}</SongSinger>
          </SongItem>

      ))}

    </Container>

  );
};

export default Song;
