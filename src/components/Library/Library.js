import React,{useEffect} from 'react';
import styled from "styled-components";
import { Fragment} from "react";
import {useSelector} from "react-redux";
import { useDispatch } from 'react-redux';
import {fetchSong} from "../../redux/songSlice/songSlice";
import {getPlaylistAndUser} from "../../redux/playlistSlice/playlistSlice";
import {NavLink} from "react-router-dom";
import PlaylistShowLibrary from "../Playlist/playlistShowLibrary";
const Container=styled.div`
  //padding: 2rem 0;
  //display: flex;
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
  /* background-color: #7a7a7a; */
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

const Library = () => {
    const dispatch = useDispatch()
    const songs = useSelector((state) => state.song.songs);
    const isLoggedInUser = useSelector(state => state.user.user )
    const isLoggedIn = !!isLoggedInUser._id;
    const user = useSelector(state=> state.user.user);
    const playlists = useSelector (state => state.playlist.playlists);
    useEffect(()=> {
        dispatch(getPlaylistAndUser(user._id))
    },[])
    console.log("songs",songs);
    useEffect(() => {
        dispatch(fetchSong())
    },[])
    return (
        <Container>
          <div className={"results_container"}>
              <div className={"songs_container"}>
                  {songs && songs.map((song)=>(
                      <Fragment key={song._id}>
                          <SongItem >
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
    );
};

export default Library;