import React from 'react';
import logo from '../../asset/REAL_SOOL_LOGO.png'
import { AppBar, Grid, Toolbar, Typography, Button } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#a4134b' }}>
      <Toolbar>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4} lg={7}>
            {/* xs: extra-small devices (모바일)
                sm: small devices (태블릿)
                md: medium devices (작은 랩탑)
                lg: large devices (대형 랩탑, 데스크탑)
                모바일에서는 전체 너비(12), 태블릿에서는 반 너비(6), 작은 랩탑에서는 1/3 너비(md), 대형 랩탑에서는 1/4 너비(lg)를 차지
            */}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <img src={logo} alt="REAL_SOOL_LOGO" style={{ maxHeight: '50px' }} />
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={1}>
            <Button color="inherit">우리술 소개</Button>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={1}>
            <Button color="inherit">양조장</Button>
          </Grid>
          
          <Grid item xs={12} sm={6} md={4} lg={1}>
            <Button color="inherit">우리술 정보</Button>
          </Grid>
          
          <Grid item xs={12} sm={6} md={4} lg={1}>
            <Button color="inherit">찐들의 모임</Button>
          </Grid>
          
          <Grid item xs={12} sm={6} md={4} lg={1}>
            <Button color="inherit">로그인/회원가입</Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;