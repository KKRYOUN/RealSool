import React from 'react';
import { Typography } from '@mui/material';
import { styled } from '@mui/system';

import BreweryNav from './BreweryNav';

import menuImage from './Image/menuImage.png';
import background from '../../asset/background.jpg';

const BreweryMap = () => {
  const CustomDiv = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: `url(${menuImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    backgroundPosition: 'center',
    height: '350px'
  });
  return (
    <div style={{backgroundImage: `url(${background})`}}>
      <CustomDiv>
        <Typography variant='h2' color='white' align='center'>
          양조장 지도
        </Typography>
      </CustomDiv>

      <BreweryNav />

    </div>
  )
}

export default BreweryMap;