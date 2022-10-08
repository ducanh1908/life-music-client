import React, {useEffect,useState} from "react";
import styled from "styled-components";
import Audio from "./Audio";
import DetailSong from "./DetailSong";
import SongList from "./SongList";
import { useDispatch } from 'react-redux';
import { fetchSong } from './../../redux/songSlice/songSlice';
import { useSelector } from 'react-redux';


const Container = styled.div`

  display: grid;
  grid-template-rows: 75vh 15vh;
`;
const Wraper = styled.div`
`
const Body = styled.div`
height: 100%;
overflow: auto;

`
const Footer = styled.div`
height: 100%;
  background-color: #333;
display: grid;
grid-template-columns: 1fr 2fr;
`

const HomeFooter = () => {
  const dispatch = useDispatch()
const song = useSelector(state => state.song.songs)
const [trackIndex, setTrackIndex] = useState(-1)

  useEffect(() => {
    dispatch(fetchSong())
  },[])

  const onTrackSelect = (index)=> {
    setTrackIndex(index)
  }
  return (
    <Container>
     {
      song && (
      <Wraper>
      <Body>
        
        <SongList song = {song} onTrackSelect={onTrackSelect} />
      </Body>
      <Footer>
        <DetailSong song = {song}  trackIndex={trackIndex}/>
        <Audio song={song} trackIndex={trackIndex} setTrackIndex={setTrackIndex} />
      </Footer>
      </Wraper>
      )
     }
    </Container>
  );
};

export default HomeFooter;
