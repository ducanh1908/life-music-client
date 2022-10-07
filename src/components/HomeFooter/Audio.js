import React, { useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getSongById } from "../../redux/songSlice/currentSong";
import { useEffect, useRef } from "react";

function Audio({ song, trackIndex }) {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(trackIndex);

  const {
    name = "",
    file = "",
    image = "",
  } = currentTrackIndex !== -1 ? song[currentTrackIndex] : {};
  console.log(song[trackIndex]);
  // let songSrc = `${file}`
  // const songRef = useRef(new Audio(songSrc))

  const dispatch = useDispatch();
  const handleClickNext = () => {
    console.log(+1);
  };
  const handleClickPre = () => {
    console.log(-1);
  };
  useEffect(() => {
    // songRef.current.pause()
    // songRef.current = new Audio(songSrc)
    // songRef.current.play()

    setCurrentTrackIndex(trackIndex);
  }, [trackIndex]);

  console.log("onTrackSelect", { currentTrackIndex, name });

  return (
    <div className="playing">
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
