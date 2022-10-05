import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getSongById } from '../../redux/songSlice/currentSong';


const Container = styled.div`
height: 100%;
`

const SongImage = styled.img`
width: 40px;
height: 40px;
`
const SongList = ({song}) => {
  const dispatch= useDispatch();

  const handleClick = (id) => {
    dispatch(getSongById(id))
  }
  return (
    <Container>
      {
        song.length > 0 && (
        song.map((item, index)=> (
          <div key={item._id}  onClick = {()=> handleClick(item._id)}>
            <SongImage src={item.image} />
            <p>{item.name}</p>
            <p> {item.author}</p>
          </div>

        ))

        )
      }


    </Container>
  )
}

export default SongList