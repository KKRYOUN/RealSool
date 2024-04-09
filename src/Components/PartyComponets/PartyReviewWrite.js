import React, { useState } from 'react';
import { Box, TextField, Button, Tooltip, Typography, Rating } from '@mui/material';

const PartyReviewWrite = () => {
  const [comment, setComment] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState(null);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleRatingChange = (event, newValue) => {
    setRating(newValue);
  };

  const handleSubmit = () => {
    // 댓글, 이름, 이메일, 별점 제출 로직 처리
    console.log({ comment, name, email, rating });
    // 이곳에 서버로 데이터를 전송하는 코드를 추가합니다.
    setComment('');
    setName('');
    setEmail('');
    setRating(null);
  };

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > :not(style)': { m: 1, width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
      <Typography component="legend">모임에 대한 당신의 경험을 적어주세요~!</Typography>
      <Box
        sx={{
          display: 'flex',
          width: 240,
          m: 1
        }}
      >
        <Tooltip title='원하는 별점이 있는 곳에 마우스 커서를 갖다 놓으세요'>
          <Rating
            name="simple-controlled"
            value={rating}
            onChange={handleRatingChange}
          />
        </Tooltip>
      </Box>
      <TextField
        label="Review"
        multiline
        rows={4}
        value={comment}
        onChange={handleCommentChange}
        required
      />
      <TextField
        label="Name"
        value={name}
        onChange={handleNameChange}
        required
      />
      <TextField
        label="Email"
        value={email}
        onChange={handleEmailChange}
        required
      />
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
        <Button variant="outlined" onClick={() => console.log('Cancelled')}>
          취소
        </Button>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          등록
        </Button>
      </Box>
    </Box>
  );
};

export default PartyReviewWrite;
