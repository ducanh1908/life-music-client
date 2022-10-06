import React, {useEffect,useState} from "react";
import styled from "styled-components";
import Audio from "./Audio";
import DetailSong from "./DetailSong";
import SongList from "./SongList";
import { useDispatch } from 'react-redux';
import { fetchSong } from './../../redux/songSlice/songSlice';
import { useSelector } from 'react-redux';


const Container = styled.div`
  background-color: #7a7a7a;
  display: grid;
  grid-template-rows: 75vh 15vh;
`;
const Body = styled.div`
height: 100%;
overflow: auto;

`
const Footer = styled.div`
height: 100%;
display: flex;
`


const HomeFooter = () => {
  const dispatch = useDispatch()
const song = useSelector(state => state.song.songs)
const [trackIndex, settrackIndex] = useState(-1)

  useEffect(() => {
    dispatch(fetchSong())
  },[trackIndex])

  const onTrackSelect = (index)=> {
    settrackIndex(index)
  }
  return (
    <Container>
     {
      song && (
      <>
      <Body>
        <SongList song = {song} onTrackSelect={onTrackSelect} />
      </Body>
      <Footer>
        <DetailSong />
      {
        trackIndex !== 1&&  <Audio song={song} trackIndex={trackIndex} />
      }
      </Footer>
      </>
      )
     }
    </Container>
  );
};

export default HomeFooter;
