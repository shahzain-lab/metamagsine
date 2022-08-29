import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Image from 'next/image';
import logo from '../../../public/logo.png';


export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1, background: 'white' }}>
      <AppBar position="static" sx={{background: 'white'}}>
        <Toolbar>
          <Image 
           src={logo}
           alt="metamagazine logo"
           width={70}
           height={70}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
