import styled from "styled-components";
import { useState, useEffect, Fragment } from "react";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PlaylistModel from "./PlaylistModel";
import {useDispatch, useSelector} from "react-redux";
import {getSongsByPlaylistId} from "../../redux/songSlice/songSlice";
import {useParams} from "react-router";
const Container = styled.div`
  background-color: whitesmoke;
  position: relative;
`
const Head= styled.div`
  position: relative;
  display: flex;
  height: 310px;
  padding: 2rem;
  background-color: var(--gradient-gray);

  .head_gradient {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: linear-gradient(transparent 0, rgba(0, 0, 0, 0.4) 100%);
  }

  img {
    width: 200px;
    height: 200px;
    box-shadow: 0 4px 60px rgb(0 0 0 / 50%);
  }

  .playlist_info {
    align-self: flex-end;
    margin-left: 2rem;

    h1 {
      font-size: 6rem;
      margin: 0;
    }

    p {
      font-size: 1.4rem;
      margin: 0;
      text-transform: uppercase;
    }

    span {
      font-size: 1.4rem;
    }
  }
`
const Body = styled.div`
  padding: 1rem 3rem;

  .body_nav {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 0;
    color: var(--light-white);
    font-size: 1.4rem;
    text-transform: uppercase;
    border-bottom: 1px solid var(--light-white);
    margin-bottom: 1rem;

    .left {
      display: flex;
      flex: 1;
      padding-left: 2rem;

      span {
        margin-right: 1.5rem;
      }

      p {
        margin: 0;
      }
    }

    .center {
      flex: 1;
      display: flex;
      justify-content: center;

      p {
        margin: 0;
      }
    }

    .right {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      padding-right: 4rem;

      svg {
        width: 2rem;
        height: 2rem;
      }
    }
  }
`
const Playlist = () => {
    const {id}=useParams()
    const [playlist, setPlaylist] = useState({});
    const [model, setModel] = useState(false);
    const dispatch = useDispatch();
    // const listsong = useSelector(state=>state.song)
    // useEffect(()=>{
    //     dispatch(getSongsByPlaylistId(id))
    //     },[dispatch(getSongsByPlaylistId(id))]
    // )
  return (
     <Container>
       <Fragment>
           <Head>
               <div className={'head_gradient'}></div>
               <img
                   src="https://static.thenounproject.com/png/17849-200.png"
                   alt={'avatar'}
                   style={{ background: "#919496" }}
               />
               <div className={'playlist_info'}>
                   <p>Playlist</p>
                   <h1>quyen</h1>
                   <span>ngon</span>
               </div>
               <div className={'actions_container'}>
                   <IconButton onClick={() => setModel(true)}>
                       <EditIcon />
                   </IconButton>
                   <IconButton >
                       <DeleteIcon />
                   </IconButton>
               </div>
           </Head>
           <Body>
               <div className={'body_nav'}>
                   <div className={'left'}>
                       <span>#</span>
                       <p>Title</p>
                   </div>
                   <div className={'center'}>
                       <p>Artist</p>
                   </div>
                   <div className={'right'}>
                       <AccessTimeIcon />
                   </div>
               </div>
           </Body>
           {model && (
               <PlaylistModel
                   closeModel={() => setModel(false)}
                   playlist={playlist}
               />
           )}
       </Fragment>
     </Container>
  );
};

export default Playlist;
