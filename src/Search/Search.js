import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {fetchSong,searchSong} from "../redux/songSlice/songSlice";
import {getAllPlaylist} from "../redux/playlistSlice/playlistAdmin";

const Container = styled.div`
background: linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.1)) ;
overflow: auto;
`

const Songs = styled.div``
const SongItem = styled.div`
display: flex;
margin: 10px;
background-color: #7a7a7a;
padding: 0 20px;
display: flex;
justify-content: space-between;
align-items: center;
`
const SongImage = styled.img`
width: 50px;
height: 50px;
`
const SongName = styled.p`
  color:#fff;
  `
const SongSinger = styled.span`

`;
const Search = () => {
  const dispatch = useDispatch();
  const songs = useSelector(state => state.song.songs)
  const playlists = useSelector(state => state.playlist.playlist);
  console.log(playlists)
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  // useEffect(() => {
  //   // dispatch(fetchSong());
  //   dispatch(getAllPlaylist());
  // },[])
  const handlePlay =(idSong) => {
    // console.log(idSong)
  }
  return (
      <Container>
        {/*<div>*/}
        {/*  {songs.map((song, index)=> (*/}
        {/*      <SongItem key={index} onClick= {() => handlePlay(index)}>*/}
        {/*        <p>{index + 1}</p>*/}
        {/*        <SongImage  src={song.image}/>*/}
        {/*        <SongName>{song.name}</SongName>*/}
        {/*        <a href={song.file} >link</a>*/}
        {/*      </SongItem>*/}
        {/*  ))*/}
        {/*  }*/}
        {/*</div>*/}
        <div>
          {playlists.map((playlist, index)=> (
              <SongItem key={index} >
                <p>{index + 1}</p>
                <SongImage  src={playlist.image}/>
                <SongName>{playlist.name}</SongName>
              </SongItem>
          ))}
        </div>
      </Container>
  )
}

export default Search;

