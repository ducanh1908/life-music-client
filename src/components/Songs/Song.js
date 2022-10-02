import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchSong } from '../../redux/songSlice/songSlice';
import GuestNavbar from './../GuestNavbar/GuestNavbar';
import styled  from 'styled-components';
const Container = styled.div`
height:100vh;
width: 85vw;
right: 0;
margin-top: 70px;
border-radius: 5px;
padding: 24px 24px 0;
overflow:scroll;
background-color: #fff;
position: absolute;
overflow: hidden;

/* background: linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.1)) ; */


`
const Song = () => {

  const dispatch = useDispatch();
  const songs = useSelector(state => state.song.songs)
  console.log(songs)
  useEffect(() => {

    dispatch(fetchSong())
  },[dispatch])
  return (
    <Container>
      
        {
          songs.map(song => (
            <div key={song._id}>
              <p>{song.name}</p>
              <img  src={song.image}/>
              <a href={song.file}>link</a>
            </div>

          ))
        }

    </Container>
  )
}

export default Song