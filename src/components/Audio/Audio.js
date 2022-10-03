import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { fetchSong } from '../../redux/songSlice/songSlice';


const Container = styled.div`
background: transparent;
width:80%;
height:100%;
`
const Audio = (props) => {
const {song} = props

const handleClickNext = () => {
    
}
const handleClickPre = () => {
  
}
  return (
    <Container>

        <AudioPlayer className='player-music ' 
      layout="stacked-reverse"
      showSkipControls={true}
      showJumpControls={false}
            src={''}
          volume={0.5}     
          onClickNext={handleClickNext}
          onClickPrevious={handleClickPre}  // Try other props!
        />
      </Container>
  )
}

export default Audio