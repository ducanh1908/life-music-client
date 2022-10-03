import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';


const Container = styled.div`
background: linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.1)) ;
overflow: auto;
`

const Songs = styled.div``
const SongItem = styled.div`
display: flex;
margin: 10px;
background-color: #7a7a7a;
padding: 0 20px;
display: flex;
justify-content: space-between;
align-items: center;
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
 

  return (
    <Container>
        {
          songs.map((song, index)=> (
           
            <SongItem key={index} onClick= {() => handlePlay(index)}>
             <p>{index + 1}</p>
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