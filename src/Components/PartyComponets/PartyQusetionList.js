import React from 'react';
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography
} from '@mui/material';
import ReplyIcon from '@mui/icons-material/Reply';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';

const PartyQusetionList = () => {

  // 예시 데이터 2 : 댓글 정보
  const comments = [
    { id: 1, author: 'ryun', content: '가가가가', timestamp: '0101', likes: 3 },
    { id: 2, author: 'sole', content: '나나나나', timestamp: '0202', likes: 33 },
    { id: 3, author: 'hyun', content: '다다다다', timestamp: '0303', likes: 333 },
    { id: 4, author: 'sara', content: '라라라라', timestamp: '0404', likes: 3333 },
    { id: 5, author: 'jaee', content: '마마마마', timestamp: '0505', likes: 33333 },
    { id: 6, author: 'wooo', content: '바바바바', timestamp: '0606', likes: 333333 },
  ];

  return (
    <>
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {comments.map((comment) => (
          <React.Fragment key={comment.id}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt={comment.author} src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary={comment.author}
                secondary={
                  <>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {comment.content}
                    </Typography>
                    {" — " + comment.timestamp}
                  </>
                }
              />
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <IconButton aria-label="like">
                  <ThumbUpAltIcon />
                </IconButton>
                <Typography variant="caption">{comment.likes} Likes</Typography>
                <IconButton aria-label="reply">
                  <ReplyIcon />
                </IconButton>
              </Box>
            </ListItem>
            <Divider variant="inset" component="li" />
          </React.Fragment>
        ))}
      </List>
    </>
  );
}

export default PartyQusetionList;