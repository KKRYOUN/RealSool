import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, Typography, Grid, Card, CardContent, CardActions, Button, CardMedia, Pagination } from '@mui/material';
import { styled } from '@mui/system';

import BreweryNav from './BreweryNav';

import menuImage from './Image/menuImage.png';
import background from '../../asset/background.jpg';

const BreweryList = (props) => {
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


  return (
    <div style={{ backgroundImage: `url(${background})` }}>
      <CustomDiv>
        <Typography variant='h2' color='white' align='center'>
          양조장 상세 소개
        </Typography>
      </CustomDiv>

      <BreweryNav />

      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item lg={1} />
          <Grid item lg={10}>
            <Grid container spacing={2} style={{ marginTop: '18px' }}>
              {props.breweries.map((card, index) => (
                <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
                  <Card>
                    <CardContent style={{ height: '295px' }}>
                      <CardMedia
                        component="img"
                        height="140"
                        image={card.image}
                        alt={card.name}
                      />
                      <br />
                      <Typography variant="h5" component="h2" style={{ marginBottom: '15px' }}>
                        {card.name}

                      </Typography>
                      <Typography color="textSecondary">
                        주소 : {card.address}
                      </Typography>
                      <Typography color="textSecondary">
                        종류 : {card.category}
                      </Typography>
                      <Typography color="textSecondary">
                        연락처 : {card.tel}
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: 'flex-end' }}>
                      <Button size="small" component={Link} to={`/brewery/breweryView/${card.num}`}>{card.Link}</Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'center', padding: '40px' }}>
              <Pagination count={10} color="secondary" />
            </Box>
          </Grid>
          <Grid item lg={1} />
        </Grid>
      </Container>
    </div >
  )
}

export default BreweryList;