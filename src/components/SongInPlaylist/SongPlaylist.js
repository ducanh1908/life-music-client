import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { setCurrentSong } from "../../redux/audioPlayer";
// import Like from "../Like";
import { IconButton } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
// import PlaylistMenu from "../PlaylistMenu";
import styled from "styled-components";
import Like from "../Like/like";
import PlaylistMenu from "../Playlist/PlaylistMenu";
const Container = styled.div`
  width: 100%;
  height: 6rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  //grid-template-columns: 1fr 1fr;

  &:hover {
    background-color: var(--light-black);
  }

  .left {
    display: flex;
    flex: 1;

    .play_btn {
      margin: 0 0.5rem;

      svg {
        width: 2rem;
        height: 2rem;
        color: var(--white);
      }
    }

    img {
      width: 4rem;
      height: 4rem;
      object-fit: cover;
    }

    p {
      font-size: 1.4rem;
      font-weight: 500;
      margin-left: 1rem;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .center {
    flex: 1;

    p {
      text-align: center;
      font-size: 0.8rem;
      margin: 0;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .right {
    display: grid;
    align-items: center;
    justify-content: flex-end;
    position: relative;
    flex: 1;
    grid-template-columns: 1fr 1fr 1fr;
    p {
      margin: 0 0.5rem 0 1rem;
      font-size: 1.2rem;
    }

    .menu_btn {
      svg {
        width: 2rem;
        height: 2rem;
        color: var(--white);
      }
    }
  }
`;

const SongPlaylist = ({
  
  song,
  index,
  currentPlaylist,
  handleRemoveSong,
  onTrackSelect,
}) => {
  const [menu, setMenu] = useState(false);
  // const { currentSong } = useSelector((state) => state.audioPlayer);
  const dispatch = useDispatch();
  const handleClick = (id, index) => {
    onTrackSelect(index);
  };

  return (
    <Container>
      <div className={"left"}>
        <IconButton
          onClick={() => handleClick(song._id, index)}
          className={"play_btn"}
        >
          <PlayArrowIcon />
        </IconButton>
        <img src={song.image} alt="song_img" />
        <p>{song.name}</p>
      </div>
      <div className={"center"}>
        <p>{song.singer}</p>
      </div>
      <div className={"right"}>
        <Like song={song} />
        <p>{song.duration}</p>
        <IconButton className={"menu_btn"} onClick={() => setMenu(true)}>
          <MoreHorizIcon />
        </IconButton>
        {menu && (
          <PlaylistMenu
            currentPlaylist={currentPlaylist}
            song={song}
            handleRemoveSong={handleRemoveSong}
            closeMenu={() => setMenu(false)}
          />
        )}
      </div>
    </Container>
  );
};

export default SongPlaylist;
