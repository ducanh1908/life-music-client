import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const DetailSong = () => {

  const dispatch = useDispatch();
    const song = useSelector(state=> state.currentSong.currentSong)
    
  return (
    <div>DetailSong : {song.name} </div>
  )
}

export default DetailSong