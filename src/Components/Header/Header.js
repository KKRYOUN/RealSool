import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#9c27b0' }}> {/* 이 부분에서 배경색을 설정합니다. */}
      <Toolbar>
        {/* 로고가 위치할 자리, 이미지나 텍스트 로고를 넣을 수 있습니다. */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          우리술 소개
        </Typography>
        
        {/* 네비게이션 아이템 */}
        <Button color="inherit">우리술 소개</Button>
        <Button color="inherit">양조장</Button>
        <Button color="inherit">우리술 정보</Button>
        <Button color="inherit">찐들의 모임</Button>
        
        {/* 로그인 버튼 */}
        <Button color="inherit">로그인/회원가입</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;