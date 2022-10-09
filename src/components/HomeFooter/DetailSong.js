import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import  styled from 'styled-components';

const Container = styled.div `
display: flex;
/* align-items: center; */
justify-content: flex-start;
padding: 20px;
`
const Song = styled.div`
`
const SongImage = styled.img`
width: 60px;
height: 60px;
`
const SongName = styled.span`
margin: 20px;
  color: palevioletred;
`
const SongSinger = styled.div`
`
const DetailSong = ({song, trackIndex}) => {
  let {
    name = "",
    file = "",
    image = "",
  } = trackIndex !== -1 ? song[trackIndex] : {};

  console.log({name})
  return (
     
    <Container>
      <SongImage src={image} />
      <SongName >{name.slice(0, 15)} </SongName> 
      </Container>
  )
}

export default DetailSong