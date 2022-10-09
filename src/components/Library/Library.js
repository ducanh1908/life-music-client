import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import { Fragment} from "react";
import {useSelector} from "react-redux";
import { useDispatch } from 'react-redux';
import {fetchSong} from "../../redux/songSlice/songSlice";
import {getPlaylistAndUser} from "../../redux/playlistSlice/playlistSlice";
import {NavLink} from "react-router-dom";
import PlaylistShowLibrary from "../Playlist/playlistShowLibrary";
import DetailSong from "../HomeFooter/DetailSong";
import Audio from "../HomeFooter/Audio";
const Total = styled.div`
  display: grid;
  grid-template-rows: 75vh 15vh;
`
const Container=styled.div`
  //padding: 2rem 0;
  //flex-direction: column;
  //position: relative;
  //min-height: 80vh;
  background-color: grey;
  overflow: auto;
  
  

  .results_container {
    margin: 2rem;
    display: grid;
    z-index: 2;
    grid-template-columns: 1.5fr 2fr;

    .songs_container {
      flex: 2;
    }

    .playlists_container {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
`
const SongItem = styled.div`
  display: flex;
  margin: 10px;
   background-color: #7a7a7a; 
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const SongImage = styled.img`
  width: 50px;
  height: 50px;
`;
const SongName = styled.p`
  color:#fff;
  `
const SongSinger = styled.span`

`;
const Footer = styled.div`
height: 20%;
  background-color: #333;
display: grid;
grid-template-columns: 1fr 2fr;
`

const Library = () => {
    const dispatch = useDispatch()
    const songs = useSelector((state) => state.song.songs);
    const isLoggedInUser = useSelector(state => state.user.user )
    const isLoggedIn = !!isLoggedInUser._id;
    const user = useSelector(state=> state.user.user);
    const playlists = useSelector (state => state.playlist.playlists);
    const [trackIndex, setTrackIndex] = useState(-1)
    const handleClick = (id, index) => {
        setTrackIndex(index);
    };
    useEffect(()=> {
        dispatch(getPlaylistAndUser(user._id))
    },[])
    useEffect(() => {
        dispatch(fetchSong())
    },[])
    return (
        <Total>
            <Container>
                <div className={"results_container"}>
                    <div className={"songs_container"}>
                        {songs && songs.map((song,index)=>(
                            <Fragment key={song._id}>
                                <SongItem onClick={() => handleClick(song._id, index)}>
                                    <SongImage src={song.image}></SongImage>
                                    <SongName>{song.name}</SongName>
                                    <SongSinger>{song.singer}</SongSinger>
                                </SongItem>
                            </Fragment>

                        ))}
                    </div>

                    <div className={"playlists_container"}>
                        {
                            playlists &&(
                                isLoggedIn &&
                                (
                                    <PlaylistShowLibrary playlists={playlists}/>
                                )
                            )

                        }
                    </div>
                </div>
            </Container>
            {songs &&
                <Footer>
                    <DetailSong song = {songs}  trackIndex={trackIndex}/>
                    <Audio song={songs} trackIndex={trackIndex} setTrackIndex={setTrackIndex} />
                </Footer>}
        </Total>

    );
};

export default Library;