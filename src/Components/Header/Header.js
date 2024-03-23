import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../asset/REAL_SOOL_LOGO.png';
import { AppBar, Box, Grid, Toolbar, Typography, Button } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#a4134b', width: '100%', margin: 0 }}>
      <Toolbar>
        <Grid container spacing={2} alignItems="center" style={{ flexWrap: 'nowrap' }}>
          <Grid item xs={12} sm={6} md={4} lg={6}>
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
            <Box display="flex" justifyContent="center" width="100%">
              <Button color="inherit" size="large" component={Link} to="/about">
                우리술 소개
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={1}>
            <Box display="flex" justifyContent="center" width="100%">
              <Button color="inherit" size="large" component={Link} to="/brewery">
                양조장
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={1}>
            <Box display="flex" justifyContent="center" width="100%">
              <Button color="inherit" size="large" component={Link} to="/sool">
                우리술 정보
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={1}>
            <Box display="flex" justifyContent="center" width="100%">
              <Button color="inherit" size="large" component={Link} to="/party">
                찐들의 모임
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Box display="flex" justifyContent="center" width="100%">
              <Button color="inherit" size="large" component={Link} to="/#">
                로그인/회원가입
              </Button>
            </Box>
          </Grid>
          
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;