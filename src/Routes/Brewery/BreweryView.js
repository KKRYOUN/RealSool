import { React } from "react";
import { useParams } from 'react-router-dom';

import { Container, Typography, Grid, Card, CardContent, CardMedia, CardHeader, Box } from '@mui/material';
import { styled } from '@mui/system';

import menuImage from './Image/menuImage.png';
import background from '../../asset/background.jpg';

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
    <div style={{ backgroundImage: `url(${background})` }}>
      <CustomDiv>
        <Typography variant='h2' color='white' align='center'>
          양조장 보기
        </Typography>
      </CustomDiv>

      <Container maxWidth="lg">
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={12} sm={12} md={12} lg={4}>
            <Box
              sx={{
                backgroundImage: `url(${brewery.image})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: 300,
                width: 300,
                my: 4,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                p: 2,
                border: '2px solid grey'
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={8}>
            <Card>
              <CardHeader
                title={brewery.name}
              />
              <Typography variant="body1">
                주소 : {brewery.address}
              </Typography>
              <Typography variant="body1">
                주종 : {brewery.category}
              </Typography>
              <Typography variant="body1">
                연락처 : {brewery.tel}
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>

    </div>
  )
}

export default BreweryView;