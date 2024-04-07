import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  ListItemButton,
} from "@mui/material";
import { Link } from "react-router-dom";

const Sidemenu = () => {
  return (
    <List component="nav">
      <ListItem>
        <ListItemText primary="마이페이지" />
      </ListItem>
      <ListItemButton component={Link} to="/mypage/mysool">
        {/* inset :  ListItemText 컴포넌트에 사용되는 속성 중 하나로, 
        이 속성이 적용되면 해당 리스트 아이템 텍스트가 약간 안쪽으로 들여쓰기 */}
        <ListItemText primary="나의 찜한술" inset />
      </ListItemButton>
      <ListItemButton component={Link} to="/mypage/myparty">
        <ListItemText primary="나의 참여모임" inset />
      </ListItemButton>
      <Divider />
      <ListItem>
        <ListItemText primary="회원정보" />
      </ListItem>
      <ListItemButton component={Link} to="/mypage/checkpw">
        <ListItemText primary="회원정보변경" inset />
      </ListItemButton>
      <ListItemButton component={Link} to="/mypage/userout">
        <ListItemText primary="회원탈퇴" inset />
      </ListItemButton>
      <Divider />
      <ListItem>
        <ListItemText primary="고객문의" />
      </ListItem>
      <ListItemButton component={Link} to="/mypage/qna">
        <ListItemText primary="1대1 문의사항" inset />
      </ListItemButton>
    </List>
  );
};

export default Sidemenu;
