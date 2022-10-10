import { useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { likeSong } from "../../redux/userSlice/apiCalls";
import { IconButton, CircularProgress } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import styled from "styled-components";
import { getAllLikedSongs, likeOrNot } from "../../redux/songSlice/songSlice";

const Container = styled.div`
  .like_btn {
    .like_filled {
      color: var(--primary);
      width: 2.2rem;
      height: 2.2rem;
    }

    .like_outlined {
      color: var(--light-white);
      width: 2.2rem;
      height: 2.2rem;

      &:hover {
        color: var(--white);
      }
    }
  }
`;

const Dislike = (props) => {
  let songId = props.songId;
  let likeId = props.likeId;
  let dislikeStatus = useSelector((state) => 
    state.song.likeOrNotStatus
  )
  const dispatch = useDispatch();
  let userId = JSON.parse(localStorage.getItem('user'))._id;

  const handleLikeSong = async () => {
    let data = {
      userId: userId,
      songId: songId,
      like: false,
      likeId: likeId
    }
     dispatch(likeOrNot(data))
  };


  return (
    <Container>
      <IconButton className={"like_btn"} onClick={() => handleLikeSong()}>
      { dislikeStatus == 'loading' ? (
                    <CircularProgress style={{ color: "#1ed760" }} size="2rem" />
                ) : (
                    <Fragment>
                        <FavoriteBorderIcon className={"like_outlined"} />
                    </Fragment>
                )}
      </IconButton>
    </Container>
  );
};

export default Dislike;
