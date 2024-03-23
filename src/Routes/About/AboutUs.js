import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';

import introduce01 from './image/introduce01.jpg';
import introduce02 from './image/introduce02.jpg';
import introduce03 from './image/introduce03.jpg';

import AboutNav from './AboutNav';

const AboutUs = () => {
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
    { first: '우리들의 술 이야기,', second: 'ABOUT RealSool', third: '안녕하십니까? 반갑습니다. \n 찐술을 방문해주신 여러분께 진심으로 감사의 말씀을 드립니다.', fourth: '우리는 대한민국 5,000년 역사와 함께 해온 \n 자랑스러운 전통술을 알리고자 이 자리에 섰습니다.', fifth: '우리는 전통술의 발전을 통해 지역 경제를 활성화하고, \n 나아가 세계 10위의 경제대국에 걸맞은 \n 한국 술의 문화 상품화에 작은 보탬이 되고자 합니다.' }
  ];

  const secondIntro = [
    { first: '우리는 술에 진심입니다.', second: '우리와 함께 해주시겠습니까?', third: '우리의 전통술이 와인, 위스키 그리고 사케 등 \n 세계적인 술과 어깨를 나란히 하는 꿈을 꿉니다.', fourth: '우리는 한국 전통술에 대한 무한한 애정을 가지고 \n 찐술을 방문해주신 여러분의 손을 마주잡고 이 꿈을 현실로 만들고 싶습니다.' }
  ];
  return (
    <div>
      <CustomDiv>
        <Typography variant='h2' color='white' align='center'>
          사이트 소개
        </Typography>
      </CustomDiv>

      <>
        <AboutNav />
      </>
      <Container maxWidth='lg'>
        <>
          <Grid container spacing={5}>

            <Grid item xs={8}>
              {firstIntro.map(line => (
                <div style={{ color: '#a4134b', padding: '45px 0' }}>
                  <div style={{ lineHeight: '0.8' }}>
                    <h2 style={{ fontWeight: '400' }}>{line.first}</h2>
                    <h2>{line.second}</h2>
                  </div>

                  <div style={{ lineHeight: '1', marginTop: '38px', color: 'gray' }}>
                    {line.third.split('\n').map((line, lineIndex) => (
                      <p key={lineIndex}>{line}</p>
                    ))}
                    <div style={{ marginTop: '30px' }}>
                      {line.fourth.split('\n').map((line, lineIndex) => (
                        <p key={lineIndex}>{line}</p>
                      ))}
                    </div>

                    <div style={{ marginTop: '30px' }}>
                      {line.fifth.split('\n').map((line, lineIndex) => (
                        <p key={lineIndex}>{line}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </Grid>
            <Grid item xs={4}>
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '80px 0',
                height: '75%'
              }}>
                <img className='introduce01' src={introduce01} alt='introduce01' style={{ width: '100%', height: '90%' }} />
              </div>
            </Grid>
            <Grid item xs={4}>
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '30px 0',
                height: '75%'
              }}>
                <img className='introduce03' src={introduce03} alt='introduce03' width={'100%'} height={'100%'} />
              </div>
            </Grid>
            <Grid item xs={8}>
              {secondIntro.map(line => (
                <div style={{ padding: '30px 120px' }}>
                  <div style={{ lineHeight: '1', color: '#a4134b' }}>
                    <h2 style={{ fontWeight: '400' }}>{line.first}</h2>
                    <h2>{line.second}</h2>
                  </div>

                  <div style={{ lineHeight: '1', marginTop: '38px', color: 'gray' }}>
                    {line.third.split('\n').map((line, lineIndex) => (
                      <p key={lineIndex}>{line}</p>
                    ))}

                    <div style={{ marginTop: '30px' }}>
                      {line.fourth.split('\n').map((line, lineIndex) => (
                        <p key={lineIndex}>{line}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </Grid>
          </Grid>
        </>
      </Container>
    </div>

  );
};


export default AboutUs;