import React from 'react';
import { Container, Grid, Typography, Card, CardContent, CardMedia, Box } from '@mui/material';
import { styled } from '@mui/system';

import introduce01 from './image/introduce01.jpg';
import introduce02 from './image/introduce02.jpg';
import introduce03 from './image/introduce03.jpg';
import background from '../../asset/background.jpg';
import AboutNav from './AboutNav';

const AboutSool = () => {

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

  const firstIntro = [
    {
      first: `'전통주 등의 산업진흥에 관한 법률'에 따라 다음에 해당하는 술을 말한다.`,
      second: '1. 주류 부문의 무형문화재 보유자가 제조한 술',
      third: '2. 대한민국 식품 명인이 제조한 술',
      fourth: '3. 농어업경영제 또는 생산자 단체가 지역농수산물을 주원료로 제조한 술(지역 특산주)'
    }
  ];

  const secondIntro = [
    {
      first: '한 나라나 지역 등에 과거에서 이어져오는 양조법으로 만든 술로, \n 전통적인 양조법을 계승 및 보존하여 빚는 술을 칭한다.',
      second: '한국 정서 및 시대상을 반영하는 술로서 과거의 생활방식, 역사와 문화가 담겨있는 술로 정의할 수 있다.'
    }
  ];

  return (
    <div style={{ backgroundImage: `url(${background})` }}>
      <CustomDiv>
        <Typography variant='h2' color='white' align='center'>
          전통주 정의
        </Typography>
      </CustomDiv>

      <AboutNav />

      <Container maxWidth='lg' style={{height: '600px '}}>
        <>
          <Grid container spacing={2} columns={12} style={{ marginTop: '10px', justifyContent: 'space-evenly' }}>
            <Grid item xs={12} sm={10} md={6} lg={6}>
              <Card style={{ height: '530px', backgroundColor: '#eee' }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" style={{ color: '#a4134b', fontWeight: '600' }}>
                    법적 의미
                  </Typography>
                  <Box display="flex" justifyContent="center">
                  <CardMedia
                    component="img"
                    height="250"
                    style={{ width : '80%', marginBottom: '26px'}}
                    image={introduce01}
                    alt="법적 의미"
                  />
                  </Box>
                  {firstIntro.map(line => (
                    <div style={{ lineHeight: '1.4', marginTop: '13px' }}>
                      <Typography variant="body1" color="text.secondary">
                        {line.first}
                      </Typography>
                      <hr />
                      <div>
                        <Typography variant="body2" color="text.secondary" style={{ marginTop: '18px' }}>
                          {line.second}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" style={{ lineHeight: '2'}}>
                          {line.third}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {line.fourth}
                        </Typography>
                      </div>
                    </div>
                  ))
                  }
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={10} md={6} lg={6}>
              <Card style={{ height: '530px', backgroundColor: '#eee' }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" style={{ color: '#a4134b', fontWeight: '600' }}>
                    관습적 의미
                  </Typography>
                  <Box display="flex" justifyContent="center">
                  <CardMedia
                    component="img"
                    height="250"
                    style={{ width : '80%'}}
                    image={introduce03}
                    alt="관습적 정의"
                  />
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {secondIntro.map(line => (
                      <div style={{ lineHeight: '1.5', marginTop: '71px' }}>
                        <hr />
                        {line.first.split('\n').map((line) => (
                          <h5 style={{ margin: 1.2, padding: 0, marginTop: '19px' }}>{line}</h5>
                        ))}
                        <h5>{line.second}</h5>
                      </div>
                    ))
                    }
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </>
      </Container>
    </div >
  );
}

export default AboutSool;