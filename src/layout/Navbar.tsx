import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Image from 'next/image';
import logo from '../../public/logo.png';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';


export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{background: 'white'}}>
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
          <Image 
           src={logo}
           alt="metamagazine logo"
           width={70}
           height={70}
          />  

          <Box 
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              color: 'rgb(120 113 108)'
            }}
          >
            <Typography
              variant='h6'
              sx={{marginRight: '10px'}}
              >
                Explore
             </Typography>
            <Typography
              variant='h6'
              sx={{marginRight: '10px'}}
              >
                Ignore
             </Typography>
          

            <Typography
              variant='h6'
              sx={{marginRight: '10px'}}
              >
                Touch
             </Typography>
            <Typography
              variant='h6'
              sx={{marginRight: '10px'}}
              >
                Taste
             </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
