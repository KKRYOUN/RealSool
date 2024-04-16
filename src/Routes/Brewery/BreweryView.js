import { React } from "react";
import { useParams } from 'react-router-dom';

import { Typography, Box, Table, TableCell, TableContainer, TableRow, Grid, Card, CardContent, CardActions, Button, CardMedia } from '@mui/material';
import { styled } from '@mui/system';

import menuImage from './Image/menuImage.png';

const BreweryView = ({ breweries }) => {
  const CustomDiv = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: `url(${menuImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    backgroundPosition: 'center',
    height: '350px'
  });

  let { num } = useParams(); // useParams 훅을 사용하여 URL에서 breweryId 값 얻기
  num = parseInt(num, 10); // 10진법으로 변환

  // num를 사용하여 breweries 배열에서 해당 양조장 정보 찾기
  const brewery = breweries.find(brewery => brewery.num === num);

  return (
    <div>
      <CustomDiv>
        <Typography variant='h2' color='white' align='center'>
          양조장 상세 소개
        </Typography>
      </CustomDiv>

      <Box
        height={50}
        width='80%'
        my={4}
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={4}
        sx={{ borderTop: '3px solid', borderBottom: '1px solid' }}
        margin='20px auto'
        padding='16px 0'
      >
        <Typography variant='h5' align='center'>
          {brewery.name}
        </Typography>
      </Box>

      <Box
        height={480}
        width="80%"
        my={4}
        display='flex'
        alignItems='center'
        justifyContent='center'
        sx={{
          backgroundImage: `url(${brewery.image})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        margin='30px auto'
      />

      <Box
        width='80%'
        margin='0 auto'>
        <TableContainer sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Table sx={{ borderTop: '2px solid' }} aria-label="simple table">
            <TableRow>
              <TableCell align="center" sx={{ backgroundColor: "#f2f0ed", borderBottom: "1px solid #bfbfbf", width: '16%' }}>
                <Typography variant='body1' align='center' style={{ fontWeight: 'bold' }}>
                  주&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;소
                </Typography>
              </TableCell>
              <TableCell sx={{ borderBottom: "1px solid #bfbfbf" }}>{brewery.address}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center" sx={{ backgroundColor: "#f2f0ed", borderBottom: "1px solid #bfbfbf" }}>
                <Typography variant='body1' align='center' style={{ fontWeight: 'bold' }}>
                  주&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;종
                </Typography>
              </TableCell>
              <TableCell sx={{ borderBottom: "1px solid #bfbfbf" }}>{brewery.category}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center" sx={{ backgroundColor: "#f2f0ed", borderBottom: "1px solid #bfbfbf" }}>
                <Typography variant='body1' align='center' style={{ fontWeight: 'bold' }}>
                  연&nbsp;락&nbsp;처
                </Typography>
              </TableCell>
              <TableCell sx={{ borderBottom: "1px solid #bfbfbf" }}>{brewery.tel}</TableCell>
            </TableRow>
          </Table>
        </TableContainer>
      </Box>

      <Grid item style={{ width: '80%', margin: '16px auto 0' }}>
        <Typography variant='body1' align='center' p={2} style={{ fontWeight: 'bold', backgroundColor: '#313a46', color: '#fff' }}>
          주요 제품
        </Typography>
      </Grid>
      <Grid container spacing={2} style={{ marginTop: '18px', width: '80%', margin: '0 auto', paddingLeft: 0 }}>
        {brewery.drinks.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
            <Card variant="outlined">
              <Box
                height={300}
                width="80%"
                display='flex'
                alignItems='center'
                justifyContent='center'
                sx={{
                  backgroundImage: `url(${card.image})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                }}
                margin='0 auto'
              >
              </Box>
              <CardContent style={{ height: '60px', textAlign: 'center', backgroundColor: '#f5f5f5' }}>
                <Typography variant="h6" component="h2" style={{ marginBottom: '5px' }}>
                  {card.name}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {card.ml} | {card.percent}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Grid item style={{ width: '80%', margin: '30px auto 0', textAlign:'center' }}>
        <Button variant="contained" style={{ backgroundColor: '#a4134b', width: '160px', height: '50px'}} href="/brewery/breweryList">
          목록
        </Button>
      </Grid>
    </div>
  )
}

export default BreweryView;