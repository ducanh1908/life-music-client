import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchSong } from '../../redux/songSlice/songSlice';
import GuestNavbar from './../GuestNavbar/GuestNavbar';

const Song = () => {

  const dispatch = useDispatch();
  const songs = useSelector(state => state.song.songs)
  console.log(songs)
  useEffect(() => {

    dispatch(fetchSong())
  },[dispatch])
  return (
    <div>
      <GuestNavbar />
        {
          songs.map(song => (
            <div key={song.id}>
              <p>{song.name}</p>
              <img  src={song.image}/>
            </div>

          ))
        }



    </div>
  )
}

export default Song