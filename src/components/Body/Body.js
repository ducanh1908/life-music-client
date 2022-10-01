import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Sidebar from './../Sidebar/Sidebar';
import Content from './../Content/Content';

const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#b3b3b3',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Body() {
  return (
    <Box sx={{ flexGrow: 1, marginTop:'70px'}}>
      <Grid container spacing={1}>
        
        <Grid item xs={2}>
          <Item><Sidebar /></Item>
        </Grid>
        <Grid item xs={10}>
          <Item><Content /></Item>
        </Grid>
        
      </Grid>
    </Box>
  );
}
