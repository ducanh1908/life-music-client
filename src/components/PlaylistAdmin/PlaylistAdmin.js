import styled from "styled-components";
import { useState, useEffect, Fragment } from "react";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PlaylistModel from "../Playlist/PlaylistModel";
import { useDispatch, useSelector } from "react-redux";
// import { getSongsByPlaylistId } from "../../redux/songSlice/songSlice";
import { useParams } from "react-router";
import { getPlaylistById , getSongToPlaylist} from "../../redux/playlistSlice/currentPlaylist";


const Container = styled.div`
  background-color: whitesmoke;
  position: relative;
  border-radius: 10px;
  overflow: auto;
`;
const Head = styled.div`
  position: relative;
  display: flex;
  height: 310px;
  padding: 2rem;
  background-color: transparent;
border-bottom: 1px solid #ccc;
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
`;

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
`;

const Navbar = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`;
const Image = styled.img`
 width: 200px;
    height: 200px;
    box-shadow: 0 4px 60px rgb(0 0 0 / 50%);
`
const PlaylistInfo = styled.div`
margin-left: 20px;
flex:1;
`
const PlaylistName = styled.h1`
font-size:70px;
`
const PlaylistTitle = styled.h1`

`
const PlaylistAction = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
`

const Song = styled.div``

const SongItem = styled.div``

const SongName = styled.h1`

`
const SongImage = styled.img``

const SongInfo = styled.div``

const PlaylistAdmin = () => {
  const { id } = useParams();
  const [list, setPlaylist] = useState({});


  const currentPlaylist = useSelector(
    (state) => state.currentPlaylist.playlist
  );
  const currentSong = useSelector(
    (state) => state.currentPlaylist.playlistAdmin);

  console.log(currentSong)
  const [model, setModel] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPlaylistById(id));
  }, [id]);

  useEffect(()=> {
    dispatch(getSongToPlaylist(id))
  },[]);

  return (
    <Container>
      <Fragment>
       
          <Head>
            <div className={"head_gradient"}></div>
    {
      currentPlaylist &&
   
           ( <Navbar>
              <Image src={currentPlaylist.image}  />
              <PlaylistInfo>
                <PlaylistTitle>Playlist</PlaylistTitle>
                <PlaylistName>{currentPlaylist.name}</PlaylistName>
              </PlaylistInfo>
              
            </Navbar>)
}
          </Head>
        
        <Body>
          <div className={"body_nav"}>
            <div className={"left"}>
              <span>#</span>
              <p>Title</p>
            </div>
            <div className={"center"}>
              <p>Artist</p>
            </div>
            <div className={"right"}>
              <AccessTimeIcon />
            </div>
          </div>
        </Body>
       <Song>

        {
           currentSong && currentSong.map((song)=>(
            <SongItem>
            <SongImage src={song.image} />
            <SongName>{song.name}</SongName>
          </SongItem>

          ))
        }
        
       
       </Song>
        
      </Fragment>
    </Container>
  );
};

export default PlaylistAdmin;
