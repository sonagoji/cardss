import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import './AppBar2.css';

const AppBar2 = () => {
  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "green" }}>
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ fontFamily: 'Cursive' ,textAlign:'center'}}>
            Products
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default AppBar2;