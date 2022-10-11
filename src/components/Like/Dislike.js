import { useState, Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { likeSong } from "../../redux/userSlice/apiCalls";
import { IconButton, CircularProgress } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import styled from "styled-components";
import { getAllLikedSongs, likeOrNot } from "../../redux/songSlice/songSlice";
import { useSnackbar } from "notistack";

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
  const [like, setLike] = useState(true);
  const { enqueueSnackbar } = useSnackbar();
  let songId = props.songId;
  let likeId = props.likeId;
  const dispatch = useDispatch();
  let userId = JSON.parse(localStorage.getItem("user"))._id;

  const handleDisLikeSong = async () => {
    let data = {
      userId: userId,
      songId: songId,
      like: false,
      likeId: likeId,
    };
    dispatch(likeOrNot(data));
    enqueueSnackbar("Đã xóa bài hát khỏi danh sách yêu thích", {
      variant: "success",
    });
    window.location.reload();
  };

  return (
    <Container>
      <IconButton className={"like_btn"} onClick={() => handleDisLikeSong()}>
        <Fragment>
          <FavoriteBorderIcon className={"like_outlined"} />
        </Fragment>
      </IconButton>
    </Container>
  );
};

export default Dislike;
