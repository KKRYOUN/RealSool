import React, {useState} from "react";
import { Box, Grid, TextField, Typography, Button } from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import PartyEBackgroundImage from '../../Components/PartyComponets/PartyBackgroundImage';

const PartyListWrite = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState(new Date());
  const [description, setDescription] = useState('');
  const [terms, setTerms] = useState('');

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const handleSubmit = () => {
    console.log({
      title,
      date,
      description,
      terms
    });
  };

  return (
    <>
      <PartyEBackgroundImage />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={1} lg={1} />
          <Grid item xs={10} lg={10}>
          <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="모임 제목"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DesktopDatePicker
                label="모임 날짜"
                inputFormat="yyyy/MM/dd"
                value={date}
                onChange={handleDateChange}
                renderInput={(params) => <TextField fullWidth {...params} />}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="모임 상세 설명"
              multiline
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="모임 약관"
              multiline
              rows={4}
              value={terms}
              onChange={(e) => setTerms(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
            >
              모임 생성
            </Button>
          </Grid>
        </Grid>
          </Grid>
          <Grid item xs={1} lg={1} />
        </Grid>
      </Box >
    </>
  );
}

export default PartyListWrite;