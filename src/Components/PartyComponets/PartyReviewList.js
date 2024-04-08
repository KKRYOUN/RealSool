import React from 'react';
import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  LinearProgress,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Rating,
  Typography,
} from '@mui/material';
import ReplyIcon from '@mui/icons-material/Reply';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const PartyReviewList = ({ setValue }) => {

  // 예시 데이터 2 : 댓글 정보
  const comments = [
    { id: 1, author: 'ryun', content: '가가가가', timestamp: '0101', likes: 3 },
    { id: 2, author: 'sole', content: '나나나나', timestamp: '0202', likes: 33 },
    { id: 3, author: 'hyun', content: '다다다다', timestamp: '0303', likes: 333 },
    { id: 4, author: 'sara', content: '라라라라', timestamp: '0404', likes: 3333 },
    { id: 5, author: 'jaee', content: '마마마마', timestamp: '0505', likes: 33333 },
    { id: 6, author: 'wooo', content: '바바바바', timestamp: '0606', likes: 333333 },
  ];

  // 예시 데이터 3 : 별점 정보
  const ratingDistribution = {
    5: 500,
    4: 250,
    3: 150,
    2: 50,
    1: 5
  };

  // 후기 작성 버튼을 누르면 후기 작성 탭 메뉴로 이동
  const handleWriteReviewClick = () => { setValue('5'); };

  const totalReviews = Object.values(ratingDistribution).reduce((a, b) => a + b, 0);
  const averageRating = Object.entries(ratingDistribution).reduce((total, [rating, count]) => total + parseInt(rating) * count, 0,) / totalReviews;

  return (
    <>
      <Box>
        <Grid container spacing={2}>
          {/* 별점 영역 */}
          <Grid item xs={4} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
            <Rating value={averageRating} precision={0.1} readOnly />
            <Typography variant="h5">{`${averageRating.toFixed(1)} / 5`}</Typography>
            <Typography variant="subtitle1">{`${totalReviews} reviews`}</Typography>
          </Grid>

          {/* 막대 차트 영역 */}
          <Grid item xs={4} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
            {Object.entries(ratingDistribution).map(([rating, count]) => (
              <Box key={rating} sx={{ display: 'flex', alignItems: 'center', width: '90%', my: 1 }}>
                <Typography variant="body2" color="textSecondary" sx={{ minWidth: '35px' }}>
                  {`${rating} Star`}
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={(count / totalReviews) * 100}
                  sx={{ flexGrow: 1, height: 20, mx: 1 }}  // 굵기를 10px로 조정
                />
                <Typography variant="body2" color="textSecondary" sx={{ minWidth: '50px' }}>
                  {`${count} Reviews`}
                </Typography>
              </Box>
            ))}
          </Grid>

          {/* 댓글 작성 버튼 영역 */}
          <Grid item xs={4} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
            <Button variant="outlined" startIcon={<StarBorderIcon />} sx={{ my: 2 }} onClick={handleWriteReviewClick}  >
              후기 작성
            </Button>
          </Grid>
        </Grid>
      </Box>
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
};

export default PartyReviewList;