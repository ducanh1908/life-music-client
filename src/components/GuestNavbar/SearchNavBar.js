// import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
// import GuestContent from "../GuestContent/GuestContent";
// import React from "react";
//
// import styled from "styled-components";
// import {useDispatch, useSelector} from "react-redux";
// import {useState} from "react";
// import {searchSongApi} from "../../service/searchService";
// // const Container = styled.div`
// //   grid-column-gap: 10px;
// //   background-color: #040404;
// //   /* position: fixed; */
// //   display: grid;
// //   grid-template-columns: 1fr 2fr 1fr;
// // `;
// const HomeForm = styled.div`
//   display: flex;
//   align-items: center;
//   width: 70%;
//   height: 48px;
//   background-color: #2a2a2a;
//   border-radius: 500px;
//   &:focus {
//     background-color: aqua;
//   }
// `;
// const SearchButton = styled.button`
//   display: flex;
//   height: 30px;
//   width: 30px;
//   background: transparent;
//   color: #fff;
//   border: 0;
//   outline: none;
//   margin-left: 5px;
//   padding: 5px;
//   align-items: center;
// `;
// const Input = styled.input`
//   width: 100%;
//   height: 100%;
//   padding: 0 10px;
//   border: 0;
//   flex: 1;
//   outline: none;
//   background: transparent;
//   color: #fff;
// `;
// const SearchNavBar = () => {
//     const dispatch = useDispatch();
//     const songs = useSelector(state => state.song.songs)
//     const [term,setTerm] = useState('');
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         if(term === '') return alert('Please enter search term')
//         dispatch(searchSongApi(term));
//         setTerm('')
//     }
//     return(
//
//         <HomeForm>
//             <SearchButton>
//                 <SearchOutlinedIcon />
//             </SearchButton>
//             <Input placeholder="Bạn muốn nghe gì..."
//                    onChange={e => setTerm(e.target.value)}
//             />
//
//         </HomeForm>
//     )
// }
// export default SearchNavBar;