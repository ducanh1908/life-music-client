import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useSelector } from 'react-redux';
import styled from 'styled-components';


const Container = styled.div`
background: transparent;
width:80%;
height:100%;
`
const Audio = (props) => {
const {song} = props
console.log(song);

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
          src ={song[0].file}
          volume={0.5}     
          onClickNext={handleClickNext}
          onClickPrevious={handleClickPre}  // Try other props!
        />
      </Container>
  )
}

export default Audio