import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "./firebase";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";
import {
  getUploadedSongs,
  uploadSong,
  deleteSongById,
  loading,
  changeDeleteSongStatus,
} from "../../redux/songSlice/songSlice";

import "./uploadfile.css";
import styled from "styled-components";
import $ from "jquery";

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { getCategories } from "../../redux/cateSlice/cateSlice";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { fetchPlaylist } from "../../redux/playlistSlice/playlistSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function AddNewFile() {
  const [fileUpload, setFileUpload] = useState(null);
  const [newSong, setNewSong] = useState({});
  const [editSong, setEditSong] = useState({});
  const [open, setOpen] = React.useState(false);
  const [updateSong, setUpdateSong] = React.useState({});
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));

  let { uploadSongs, status, deleteSongStatus } = useSelector(
    (state) => state.song
  );
  let { playlists } = useSelector((state) => state.playlist)

  console.log("uploadSongs", uploadSongs);
  console.log('status upload', status)
  let categories = useSelector((state) => state.cate.categories);

  // let isSongUploadedSuccess =
  //   "success" === useSelector((state) => state.song.status);


  // const getUploadSongs = (isSongUploadedSuccess) => {
  //   if (isSongUploadedSuccess) {
  //     dispatch(getUploadedSongs({ _id: user._id }));
  //   } else {
  //     console.log("tai bai hat that bai");
  //   }
  // };

  const uploadFile = async () => {
    try {
      if (fileUpload == null) return;
      dispatch(loading("loading"));
      const fileRef = ref(storage, `files/${fileUpload.name + v4()}`);
      await uploadBytes(fileRef, fileUpload).then(async (snapshot) => {
        await getDownloadURL(snapshot.ref).then(async (url) => {
          await getDuration(url).then((length) => {
            let duration = length / 60;
            duration = duration.toFixed(2);
            setNewSong({
              name: fileUpload.name.split(".")[0],
              file: url,
              duration: duration,
            });
          });
        });
      });
      // dispatch(upSong(newSong));
      // dispatch(uploadSong(newSong));
    } catch (err) {
      console.log("uploadFile", err.message);
    }
  };

  const getDuration = (src) => {
    try {
      return new Promise(function (resolve) {
        var audio = new Audio();
        $(audio).on("loadedmetadata", function () {
          resolve(audio.duration);
        });
        audio.src = src;
      });
    } catch (err) {
      console.log("getDuration ", err.message);
    }
  };

  const addSongToPlaylist = (id) => {

  };

  const deleleSong = (songId) => {
    try {
      if (window.confirm("Press a button!") === true) {
        dispatch(deleteSongById(songId));
        dispatch(changeDeleteSongStatus('idle'));
      }
    } catch (err) {
      console.log("deleleSong ", err.message);
    }
  };

  const handleSong = (obj) => {
    try {
      let select = obj.target.value.split(",")[0];
      let songId = obj.target.value.split(",")[1];
      let name = obj.target.value.split(",")[2];
      let image = obj.target.value.split(",")[3];
      let singer = obj.target.value.split(",")[4];
      if (select == 1) {
        addSongToPlaylist(songId);
      } else if (select == 2) {
        deleleSong(songId);
      } else if (select == 3) {
        setEditSong({ name: name, image: image, singer: singer });
        setOpen(true);
      }
    } catch (err) {
      console.log("handleSong", err.message);
    }
  };

  const handleChange = (event) => {
    setUpdateSong(() => {[event.target.name] = event.target.value});
  };
  
  const handleClose = () => setOpen(false);

  useEffect(() => {
    dispatch(fetchPlaylist(user._id));
    dispatch(getCategories());
    dispatch(getUploadedSongs({ _id: user._id }));
  }, []);

  useEffect(() => {
    dispatch(uploadSong(newSong));
  }, [newSong]);

  useEffect(() => {
    dispatch(getUploadedSongs({ _id: user._id }));
  }, [status == "success", deleteSongStatus == "success"]);

  const Container = styled.div`
    @font-face {
      font-family: "MyWebFont";
      src: url("webfont.eot"); /* IE9 Compat Modes */
      src: url("webfont.eot?#iefix") format("embedded-opentype"),
        /* IE6-IE8 */ url("webfont.woff2") format("woff2"),
        /* Super Modern Browsers */ url("webfont.woff") format("woff"),
        /* Pretty Modern Browsers */ url("webfont.ttf") format("truetype"),
        /* Safari, Android, iOS */ url("webfont.svg#svgFontName") format("svg"); /* Legacy iOS */
    }

    background-color: #7a7a7a;

    .image-upload > input {
      display: none;
    }
  `;
  const change = (e) => {
    setFileUpload(e.target.files[0]);
  };
  return (
    <Container>
      <div className="scrollbar" id="style-1">
        {/* <div className="image-upload">
          <label htmlFor="file-input">
            <img src="https://icons.iconarchive.com/icons/iconsmind/outline/32/Upload-2-icon.png" />
          </label>
          <input
            id="file-input"
            type="file"
            onChange={(event) => {
              setFileUpload(event.target.files[0]);
            }}
          />
        </div> */}
        {/* <button onClick={uploadFile}>Upload</button> */}
        <div>
          <Button
            variant="contained"
            component="label"
            onChange={(event) => {
              setFileUpload(event.target.files[0]);
            }}
          >
            Chọn tệp
            <input hidden accept="file/*" multiple type="file" />
          </Button>
          {status == "loading" ? (
            <LoadingButton
              loading
              loadingPosition="start"
              startIcon={<SaveIcon />}
              variant="outlined"
            >
              Loading...
            </LoadingButton>
          ) : (
            <Button variant="contained" onClick={uploadFile}>
              Up tệp
            </Button>
          )}
        </div>
        <h1>Tải bài hát lên</h1>
        <table>
          <thead>
            <tr>
              <th colSpan={2}>Bài hát</th>
              <th colSpan={3}></th>
              <th>Thời gian</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {uploadSongs.songs &&
              uploadSongs.songs.map((song, index) => (
                <tr key={index}>
                  <td>
                    <img width={50} src={song.image} alt="" />
                  </td>
                  <td>{song.name}</td>
                  <td></td>
                  <td>
                    <select>
                      <option value={"2"}>Công khai</option>
                      <option value={"1"}>Cá nhân</option>
                    </select>
                  </td>
                  <td></td>
                  <td>{song.duration}</td>
                  <td>
                    <select onChange={(e) => handleSong(e)}>
                      <option value={""}>-- Chọn --</option>
                      <option value={`1,${song._id}`}>
                        Thêm bài hát vào playlist{" "}
                      </option>
                      <option value={`2,${song._id}`}>Xóa bài hát</option>
                      <option
                        value={`3,${song._id}, ${song.name}, ${song.image}, ${song.singerName}`}
                      >
                        Chỉnh sửa
                      </option>
                    </select>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <div className="force-overflow"></div>
      </div>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Chỉnh sửa
            </Typography>

            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 3, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label={`${editSong.name}`}
                variant="outlined"
                name="name"
                onChange={handleChange}
              />
              <TextField id="outlined-basic" label="Ca sĩ" variant="outlined" name="singerName" onChange={handleChange} />
              <img
                src={`${editSong.image}?w=100&h=100&fit=crop&auto=format`}
                alt={`${editSong.name}`}
                loading="lazy"
              />
              <TextField
                id="outlined-select-currency"
                select
                label="Thể loại"
                name="cate"
                onChange={handleChange}
              >
                {categories &&
                  categories.map((cate, index) => (
                    <MenuItem key={index} value={cate._id}>
                      {cate.name}
                    </MenuItem>
                  ))}
              </TextField>
              <Button variant="contained" onClick={() => {setOpen(false)}}>Đóng</Button>
              <Button variant="contained" >Lưu</Button>
            </Box>
          </Box>
        </Modal>
      </div>
    </Container>
  );
}

export default AddNewFile;
