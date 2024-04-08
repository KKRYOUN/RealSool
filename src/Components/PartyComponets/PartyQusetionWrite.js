import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

const PartyQuestionWrite = () => {
  const [comment, setComment] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = () => {
    console.log({ comment, name, email });
    setComment('');
    setName('');
    setEmail('');
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
      <Typography component="legend">모임에 대해서 문의 사항을 적어주세요.</Typography>
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

export default PartyQuestionWrite;
