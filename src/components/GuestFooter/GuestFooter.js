import React, {useState, useEffect} from "react";
import styled from "styled-components";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Audio from './../Audio/Audio';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchSong } from '../../redux/songSlice/songSlice';

const Container = styled.div`
 height:70px;
 bottom: 0;
 right: 0;
  background-color:#040404;
  display:grid;
  grid-template-columns:1fr 2fr;
  position: fixed;
`;

const Song = styled.div`
display:flex;
height: 100%;
justify-content: space-between;
text-align: center;
align-items: center;
`;
const SongImage = styled.img`
width:70px;
height:70px;
margin-left: 10px;
margin-bottom: 10px;
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

.heart {
  overflow: hidden;
  &:hover {
  color: red;
}
}

`;

const AudioPlay = styled.div``;
const GuestFooter = () => {
  const dispatch = useDispatch();
  const songs = useSelector(state => state.song.songs)
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  useEffect(() => {
  
    dispatch(fetchSong())
  },[currentSongIndex])
  return (
    <Container>
      <Song>
        <SongImage src=''/>
        <SongContent>
          <SongName></SongName>
          <SongSinger>Bột giặt OMO</SongSinger>
        </SongContent>
        <SongLike >
          <FavoriteBorderOutlinedIcon className="heart" />
          </SongLike>
      </Song>
      <AudioPlay >
        <Audio song={songs} currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex} />
      </AudioPlay>
    </Container>
  );
};

export default GuestFooter;
