import { useState, Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import styled from "styled-components";
import { getAllLikedSongs, likeOrNot } from "../../redux/songSlice/songSlice";
import { useSnackbar } from "notistack";
import FavoriteIcon from "@mui/icons-material/Favorite";

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

const Like = (props) => {
  const { enqueueSnackbar } = useSnackbar();
  let songId = props.track._id;
  let likeId = props.track.like;

  const dispatch = useDispatch();
  let userId = JSON.parse(localStorage.getItem("user"))._id;

  var isliked;

  const CheckLike = (data) => {
    if (data) {
      let likedlist = JSON.parse(JSON.stringify(data));
      let array = [];
      likedlist &&
        likedlist.forEach((element) => {
          array.push(element._id);
        });
      if (array.includes(songId)) return true;
      return false;
    }
  };
  isliked = CheckLike(props.allLikedSongs);

  const handleLikeSong = async () => {
    let data = {
      userId: userId,
      songId: songId,
      like: !isliked,
      likeId: likeId,
    };
    dispatch(likeOrNot(data));
    dispatch(getAllLikedSongs(userId));

    if (!isliked) {
      enqueueSnackbar("Đã thêm bài hát vào danh sách yêu thích", {
        iconVarian: "success",
      });
    } else {
      enqueueSnackbar("Đã xóa bài hát khỏi danh sách yêu thích", {
        iconVarian: "success",
      });
    }
  };

  return (
    <Container>
      <IconButton className={"like_btn"} onClick={handleLikeSong}>
        <Fragment>
          {isliked ? (
            <FavoriteIcon className={"like_filled"} />
          ) : (
            <FavoriteBorderIcon className={"like_outlined"} />
          )}
        </Fragment>
      </IconButton>
    </Container>
  );
};

export default Like;

// import { useState, Fragment, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { IconButton } from "@mui/material";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import styled from "styled-components";
// import { likeOrNot } from "../../redux/songSlice/songSlice";
// import { useSnackbar } from "notistack";
// import FavoriteIcon from "@mui/icons-material/Favorite";

// const Container = styled.div`
//   .like_btn {
//     .like_filled {
//       color: var(--primary);
//       width: 2.2rem;
//       height: 2.2rem;
//     }

//     .like_outlined {
//       color: var(--light-white);
//       width: 2.2rem;
//       height: 2.2rem;

//       &:hover {
//         color: var(--white);
//       }
//     }
//   }
// `;

// const Like = (props) => {
//   const [islike, setIsLiked] = useState(true);
//   const { enqueueSnackbar } = useSnackbar();
//   let songId = props.track._id;
//   let likeId = props.track.like;

//   const dispatch = useDispatch();
//   let userId = JSON.parse(localStorage.getItem("user"))._id;

//   const CheckLike = (data) => {
//     if(data) {
//       let likedlist = JSON.parse(JSON.stringify(data));
//       let array = [];
//       likedlist && likedlist.forEach(element => {
//           array.push(element._id)
//       });
//       if(array.includes(songId)) return true;
//       return false
//     }
//   }
//   setIsLiked(CheckLike(props.allLikedSongs));

//   const toggle = () => {
//     setIsLiked(!islike);
//   }

//   const handleLikeSong = async () => {
//     let data = {
//       userId: userId,
//       songId: songId,
//       like: islike,
//       likeId: likeId,
//     };
//     console.log("data handleLikeSong", data);
//     toggle();
//     dispatch(likeOrNot(data));
//     if(islike) {
//       enqueueSnackbar("Đã thêm bài hát vào danh sách yêu thích", {
//         iconVarian: "success",
//       });
//     } else {
//       enqueueSnackbar("Đã xóa bài hát khỏi danh sách yêu thích", {
//         iconVarian: "success",
//       });
//     }

//   };

//   return (
//     <Container>
//       <IconButton className={"like_btn"} onClick={() => handleLikeSong()}>
//           <Fragment>
//             {islike ? (
//               <FavoriteBorderIcon className={"like_outlined"} />
//             ) : (
//               <FavoriteIcon className={"like_filled"} />
//             )}
//           </Fragment>
//       </IconButton>
//     </Container>
//   );
// };

// export default Like;
