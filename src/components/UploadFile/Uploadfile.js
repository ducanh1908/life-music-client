import { useState, useEffect } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase";
import { v4 } from "uuid";
import { useDispatch } from "react-redux";
import { uploadSong, upSong } from "../../redux/songSlice/songSlice";

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import GuestNavbar from './../GuestNavbar/GuestNavbar';
import styled from 'styled-components';

function AddNewFile() {
  const [fileUpload, setFileUpload] = useState(null);
  const [fileUrls, setFileUrls] = useState([]);
  const [newSong, setNewSong] = useState()

  const dispatch = useDispatch();
  const uploadFile = async () => {
    if (fileUpload == null) return;
    const user = JSON.parse(localStorage.getItem('user'));
    const fileRef = ref(storage, `files/${fileUpload.name + v4()}`);
    await uploadBytes(fileRef, fileUpload).then(async (snapshot) => {
    await getDownloadURL(snapshot.ref).then((url) => {


         setNewSong({name: fileUpload.name, file: url})
         setFileUrls((prev) => [...prev, url]);
      });
    });
    dispatch(upSong(newSong));
    dispatch(uploadSong(newSong));
  };

const Container = styled.div`
`
const Wrapper = styled.div`
margin-top: 70px;

`
  return (
    <Container>
    
  
    <input
        type="text"  
      />
    <input
        type="text"  
      /> <input
      type="text"
    />
    <input
        type="file"
        onChange={(event) => {
          setFileUpload(event.target.files[0]);
        }}
      />
      <button onClick={uploadFile}>Upload</button>
      {fileUrls.map((url, index) => (
        <AudioPlayer
        autoPlay={false}
        src={url}
        onPlay={e => console.log("onPlay")}
      />
      ))}
   

      
    </Container>
  );
}

export default AddNewFile;
