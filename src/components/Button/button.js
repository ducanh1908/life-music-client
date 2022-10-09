// import React from 'react';
// import { CircularProgress } from "@mui/material";
// import styled from "styled-components";
// const Butto = styled.button`
//   border: none;
//   min-width: 10rem;
//   outline: none;
//   background: var(--grey);
//   color: var(--black);
//   height: 2rem;
//   border-radius: 5rem;
//   font-size: 1.6rem;
//   font-weight: 700;
//   cursor: pointer;
//   padding: 1rem 2rem;
//   transform: scale(1);
//   transition: all 0.1s;
//
//   &:hover {
//     transform: scale(1.05);
//   }
//
//   &:focus-visible {
//     outline: 1px solid var(--black);
//   }
// `
// const Button = ({ label, isFetching, ...rest }) => {
//     return (
//         <Butto {...rest} >
//             {isFetching ? (
//                 <CircularProgress size={25} style={{ color: "black" }} />
//             ) : (
//                 `${label}`
//             )}
//         </Butto>
//     );
// };
//
// export default Button;