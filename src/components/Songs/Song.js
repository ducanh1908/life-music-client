import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { fetchSong } from '../../redux/songSlice/songSlice';
import Audio from './../Audio/Audio';
import { useState } from 'react';


const Container = styled.div`
background: linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.1)) ;
overflow: auto;
`

const Songs = styled.div``
const SongItem = styled.div`
display: flex;
margin: 10px;
background-color: #7a7a;
`
const SongImage = styled.img`
width: 50px;
height: 50px;
`
const SongName = styled.p`
  color:#fff`
const SongSinger = styled.span``


const Song = () => {

  const dispatch = useDispatch();
  const songs = useSelector(state => state.song.songs)
  const [idSong, setidSong] = useState(0)
  
  const handlePlay =(idSong) => {
    console.log(idSong)
      setidSong(idSong)
  }
 
  useEffect(() => {
    setidSong(idSong)
    dispatch(fetchSong())
  },[idSong])

  return (
    <Container>
        {
          songs.map((song, index)=> (
           
            <SongItem key={index} onClick= {() => handlePlay(index)}>
              <SongImage  src={song.image}/>
              <SongName>{song.name.split('-',1)}</SongName>
              <a href={song.file} >link</a>
              
            </SongItem>
                 
            ))
          }
    </Container>
  )
}

export default Song