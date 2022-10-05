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
import $ from "jquery";

function AddNewFile() {
  const [fileUpload, setFileUpload] = useState(null);
  const [newSong, setNewSong] = useState({});

  let uploadSongs = useSelector((state) => state.song.uploadSongs);
  console.log("uploadSongs", uploadSongs);

  let isSongUploadedSuccess =
    "success" === useSelector((state) => state.song.status);
  const user = JSON.parse(localStorage.getItem("user"));

  const dispatch = useDispatch();

  

  const getUploadSongs = (isSongUploadedSuccess) => {
    if (isSongUploadedSuccess) {
      dispatch(getUploadedSongs({ _id: user._id }));
    } else {
      console.log("tai bai hat that bai");
    }
  };

  const uploadFile = async () => {
    try {
      if (fileUpload == null) return;
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
            console.log("duration", duration);
          });
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
    return new Promise(function (resolve) {
      var audio = new Audio();
      $(audio).on("loadedmetadata", function () {
        resolve(audio.duration);
      });
      audio.src = src;
    });
  };

  useEffect(() => {
    dispatch(getUploadedSongs({ _id: user._id }));
  }, []);

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
        </div>
        <button onClick={uploadFile}>Upload</button>
        <h1>Tải bài hát lên</h1>
        <table>
          <thead>
            <tr>
              <th colSpan={2}>Bài hát</th>
              <th colSpan={3}></th>
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
                  <td>
                    <select id="cars">
                      <option value={{status: 2}}>Public</option>
                      <option value={{status: 1}}>Private</option>
                    </select>
                  </td>
                  <td></td>
                  <td>{song.duration}</td>
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
