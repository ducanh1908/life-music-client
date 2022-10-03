import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import { uploadSong, upSong } from "../../redux/songSlice/songSlice";
import { storage } from "./firebase";

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import styled from 'styled-components';

function AddNewFile() {
  const [fileUpload, setFileUpload] = useState(null);
  const [fileUrls, setFileUrls] = useState([]);
  const [newSong, setNewSong] = useState()

  const dispatch = useDispatch();
  const uploadFile = async () => {
    if (fileUpload == null) return;
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
background-color: #7a7a7a ;
`
  return (
    <Container>
      <h1>Tải bài hát lên</h1>
    
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
