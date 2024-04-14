import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button } from '@mui/material';

const BreweryNav = () => {
  return (
    <AppBar position="static" style={{ margin: '-33px auto 0', backgroundColor: '#6a4843', maxWidth: '77%', alignItems: 'center'}}>
    {/* <AppBar position="static" style={{ margin: '-33px auto 0', backgroundColor: 'transparent', maxWidth: '77%', alignItems: 'center'}}> */}
      <Toolbar>
        
        {/* 네비게이션 아이템 */}
        <Button color="inherit" component={Link} to="/brewery" style={{fontSize: '17px', marginRight: '55px'}}>양조장 지도</Button>
        <Button color="inherit" component={Link} to="/brewery/breweryList" style={{fontSize: '17px', marginRight: '55px'}}>양조장 상세 소개</Button>

      </Toolbar>
    </AppBar>
  );
};

export default BreweryNav;