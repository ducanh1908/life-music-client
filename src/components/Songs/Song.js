import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { fetchSong } from '../../redux/songSlice/songSlice';
import SearchNavBar from "../GuestNavbar/SearchNavBar";
import {searchSongApi} from "../../service/searchService";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Footer from "../Footer/Footer";


const Container = styled.div`
background: linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.1)) ;
overflow: auto;
`

const Songs = styled.div``
const SongItem = styled.div`
display: flex;
margin: 10px;
background-color: #7a7a7a;
padding: 0 20px;
display: flex;
justify-content: space-between;
align-items: center;
`
const SongImage = styled.img`
width: 50px;
height: 50px;
`
const SongName = styled.p`
  color:#fff;
  `
const SongSinger = styled.span`

`;
const HomeForm = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  height: 48px;
  background-color: #2a2a2a;
  border-radius: 500px;
  &:focus {
    background-color: aqua;
  }
`;
const SearchButton = styled.button`
  display: flex;
  height: 30px;
  width: 30px;
  background: transparent;
  color: #fff;
  border: 0;
  outline: none;
  margin-left: 5px;
  padding: 5px;
  align-items: center;
`;
const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 0 10px;
  border: 0;
  flex: 1;
  outline: none;
  background: transparent;
  color: #fff;
`;



const Song = () => {
  const dispatch = useDispatch();
  const songs = useSelector(state => state.song.songs)
  const [term,setTerm] = useState('');
  console.log(songs.filter(song => song.name.toLowerCase().includes(term)))
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   if(term === '') return alert('Please enter search term')
  //   dispatch(searchSongApi(term));
  //   setTerm('')
  // }

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  useEffect(() => {
  
    dispatch(fetchSong())
  },[currentSongIndex])
 
  const handlePlay =(idSong) => {
   // console.log(idSong)
  }

  return (
    <Container>

      <HomeForm>
        <SearchButton>
          <SearchOutlinedIcon />
        </SearchButton>
        <Input placeholder="Bạn muốn nghe gì..."
               onChange={e => setTerm(e.target.value)}
        />

      </HomeForm>
        {
          songs.filter(song => song.name.toLowerCase().includes(term))
              .map((song, index)=> (
           
            <SongItem key={index} onClick= {() => handlePlay(index)}>
             <p>{index + 1}</p>
            <SongImage  src={song.image}/>
              <SongName>{song.name}</SongName>
              <a href={song.file} >link</a>       
            </SongItem>       
            ))
          }
    </Container>
  )
}

export default Song

