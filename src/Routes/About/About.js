import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';

import introduce01 from "./image/introduce01.jpg";
import introduce02 from "./image/introduce02.jpg";
import introduce03 from "./image/introduce03.jpg";

const About = () => {
  const CustomDiv = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: `url(${introduce02})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    backgroundPosition: 'center',
    height: '350px',
  });


  return (
    <div>
      <CustomDiv>
        <Typography variant="h2" color="white" align='center'>
          우리술 소개
        </Typography>
      </CustomDiv>
      <Container maxWidth="lg">
        <>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <Typography variant="h6" color="brown" marginTop={"50px"}>
                사이트 소개
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <h2>첫 번째</h2>
              <h2>설명글</h2>
            </Grid>
            <Grid item xs={4}>
              <img className="introduce01" src={introduce01} alt="introduce01" width={"100%"} height={"250px"} />
            </Grid>
            <Grid item xs={4}>
              <img className="introduce03" src={introduce03} alt="introduce03" width={"100%"} height={"250px"} />
            </Grid>
            <Grid item xs={8}>
              <h2>두 번째</h2>
              <h2>설명글</h2>
            </Grid>
          </Grid>
        </>
      </Container>
    </div>

  );
};


export default About;