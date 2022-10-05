import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";
import {
  getUploadedSongs,
  uploadSong,
  upSong,
} from "../../redux/songSlice/songSlice";
import { storage } from "./firebase";

import "./uploadfile.css";
import styled from "styled-components";

function AddNewFile() {
  const [fileUpload, setFileUpload] = useState(null);
  const [newSong, setNewSong] = useState({});

  let uploadSongs = useSelector((state) => state.song.uploadSongs);
  console.log("uploadSongs", uploadSongs);

  let isSongUploadedSuccess =
    "success" === useSelector((state) => state.song.status);
  const user = JSON.parse(localStorage.getItem("user"));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUploadedSongs({ _id: user._id }));
  }, []);

  const getUploadSongs = (isSongUploadedSuccess) => {
    if (isSongUploadedSuccess) {
      dispatch(getUploadedSongs({ _id: user._id }));
    } else {
      // tải bài hát thất bại
    }
  };

  const uploadFile = async () => {
    try {
      if (fileUpload == null) return;
      const fileRef = ref(storage, `files/${fileUpload.name + v4()}`);
      await uploadBytes(fileRef, fileUpload).then(async (snapshot) => {
        await getDownloadURL(snapshot.ref).then((url) => {
          setNewSong({ name: fileUpload.name.split(".")[0], file: url });
        });
      });
      // dispatch(upSong(newSong));
      dispatch(uploadSong(newSong));
      getUploadSongs(isSongUploadedSuccess);
    } catch (err) {
      console.log(err.message);
    }
  };

  const getDuration = (src) => {
    return new Promise(function(resolve) {
        var audio = new Audio();
        $(audio).on("loadedmetadata", function(){
            resolve(audio.duration);
        });
        audio.src = src;
    });
}
  const getAllFileDuration = (uploadSongs) => {
    uploadSongs.map((song) => {
      
      // getDuration(song.file)
      // .then(function(length) {
      //     console.log('length',length)
      //     uploadSong.length = length
      // });
    })
  }


  const Container = styled.div`
    background-color: #7a7a7a;

    .image-upload > input {
      display: none;
    }
  `;
  return (
    <Container>
        <div class="scrollbar" id="style-1">
      <div class="image-upload">
        <label for="file-input">
          <img src="https://icons.iconarchive.com/icons/iconsmind/outline/32/Upload-2-icon.png" />
        </label>
        <input
          id="file-input"
          type="file"
          onChange={(event) => {
            setFileUpload(event.target.files[0]);
          }}
        />
      </div>
        <button onClick={uploadFile}>Upload</button>
        <h1>Tải bài hát lên</h1>
        <table>
          <thead>
            <tr>
              <th colSpan={2}>Bài hát</th>
              <th>Thời gian</th>
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
                </tr>
              ))}
          </tbody>
        </table>
        <div class="force-overflow"></div>
      </div>
    </Container>
  );
}

export default AddNewFile;
