import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button } from '@mui/material';

const AboutNav = () => {
  return (
    <AppBar position="static" style={{ margin: '-33px auto 0', backgroundColor: '#a4134b', maxWidth: '75%', alignItems: 'center'}}>
      <Toolbar>
        
        {/* 네비게이션 아이템 */}
        <Button color="inherit" component={Link} to="/about" style={{fontSize: '17px', marginRight: '55px'}}>사이트 소개</Button>
        <Button color="inherit" component={Link} to="/about/aboutSool" style={{fontSize: '17px', marginRight: '55px'}}>전통주 정의</Button>
        <Button color="inherit" component={Link} to="/about/aboutCategory" style={{fontSize: '17px'}}>우리술 종류</Button>

      </Toolbar>
    </AppBar>
  );
};

export default AboutNav;