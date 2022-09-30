import React from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import styled from 'styled-components';
const Audio = () => {

    const Container = styled.div`
    background: transparent;
    width:80%;
    height:100%;
    `

  return (
    <Container>

        <AudioPlayer className='player-music'
          src="https://hanzluo.s3-us-west-1.amazonaws.com/music/wuyuwuqing.mp3"
          volume={0.5}       // Try other props!
        />
      </Container>
  )
}

export default Audio