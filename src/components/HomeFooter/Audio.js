import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import "react-h5-audio-player/lib/styles.css";


import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getSongById } from '../../redux/songSlice/currentSong';

function Audio() {
  const song = useSelector(state=> state.currentSong.currentSong)
 const dispatch = useDispatch()
    const handleClickNext = () => {
        dispatch(getSongById(song._id + 1))
    }
    const handleClickPre = () => {
      dispatch(getSongById(song._id - 1))
        
    }
  return (
    <div className='playing'>
      <AudioPlayer
        className="player-music"
        src={song.file}
        layout="stacked-reverse"
        showSkipControls={true}
        showJumpControls={false}
        onClickNext={handleClickNext}
        onClickPrevious={handleClickPre}
      />
    </div>
  );

}

export default Audio;