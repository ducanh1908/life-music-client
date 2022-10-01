import React from "react";
import style from "styled-components";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  // padding: theme.spacing(1),
  textAlign: "center",
  display: 'flex',
  alignItems: "center",
  height: theme.spacing(12),
  color: theme.palette.text.secondary,
}));

const Container = style.div`
padding: 24px 24px 0;
background-color: #333333;
height: 100vh;
flex: 1;
overflow:scroll;
`;

const Wrapper = style.div`
`;

const Top = style.div`
`;
const TopTitle = style.h1`
color: #ffffff;
display: flex;
align-items: start;
`;
const ListMe = style.div`
`;
const ListMeImg = style.img`
max-height:100%;

`;
const ListMeTitle = style.span`
font-size: 16px;
font-weight: bold;
margin-left:10px;
`;
const Content = () => {
  return (
    <Container>
      <Wrapper>
        <Top>
          
          <TopTitle>Chào buổi sáng</TopTitle>
          <Box sx={{ flexGrow: 1, marginTop:2 }}>
            <Grid container spacing={2} >
              <Grid item xs={4}>
                <Item>
                  <ListMeImg src="https://images.unsplash.com/photo-1492681290082-e932832941e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                  <ListMeTitle>Lil Baby</ListMeTitle>
                </Item>
              </Grid>
              <Grid item xs={4}>
                 <Item>
                  <ListMeImg src="https://images.unsplash.com/photo-1492681290082-e932832941e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                  <ListMeTitle>Lil Baby</ListMeTitle>
                </Item>
              </Grid>
              <Grid item xs={4}>
                 <Item>
                  <ListMeImg src="https://images.unsplash.com/photo-1492681290082-e932832941e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                  <ListMeTitle>Lil Baby</ListMeTitle>
                </Item>
              </Grid>
            </Grid>
          </Box>
          <ListMe></ListMe>
        </Top>
      </Wrapper>
    </Container>
  );
};

export default Content;
