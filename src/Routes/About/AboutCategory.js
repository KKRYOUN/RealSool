import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Container, Grid, Typography } from '@mui/material';
import { CardActionArea } from '@mui/material';
import { styled } from '@mui/system';

import introduce01 from './image/introduce01.jpg';
import introduce02 from './image/introduce02.jpg';
import introduce03 from './image/introduce03.jpg';

import AboutNav from './AboutNav';

const AboutCategory = () => {

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
    <div>
      <CustomDiv>
        <Typography variant='h2' color='white' align='center'>
          우리술 종류
        </Typography>
      </CustomDiv>

      <AboutNav />

      <Container maxWidth='lg'>
        <>
          <Grid container spacing={2} columns={16} style={{marginTop: '10px', justifyContent: 'space-around'}}>
            <Grid item xs={8}>
              <Card sx={{ maxWidth: 425 }}>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" style={{ color: '#a4134b', fontWeight: '600' }}>
                      법적 의미
                    </Typography>
                    <CardMedia
                      component="img"
                      height="240"
                      image={introduce01}
                      alt="법적 의미"
                    />
                    <Typography variant="body2" color="text.secondary">
                      {firstIntro.map(line => (
                        <div style={{ lineHeight: '1.4' }}>
                          <h4>{line.first}</h4>
                          <hr />
                          <div style={{ lineHeight: '1.5' }}>
                            <h5>{line.second}</h5>
                            <h5>{line.third}</h5>
                            <h5>{line.fourth}</h5>
                          </div>
                        </div>
                      ))
                      }
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid item xs={6}>
              <Card sx={{ maxWidth: 425 }}>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" style={{ color: '#a4134b', fontWeight: '600' }}>
                      관습적 의미
                    </Typography>
                    <CardMedia
                      component="img"
                      height="240"
                      image={introduce03}
                      alt="관습적 정의"
                    />
                    <Typography variant="body2" color="text.secondary">
                      {secondIntro.map(line => (
                        <div style={{ lineHeight: '1.5', marginTop: '77px' }}>
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
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </>
      </Container>
    </div >
  );
}

export default AboutCategory;