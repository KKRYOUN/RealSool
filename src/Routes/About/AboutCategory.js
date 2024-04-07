import { React, useState } from 'react';
import { Box, Tab, Typography, Grid, Container } from '@mui/material';

import { styled } from '@mui/system';
import { TabContext, TabPanel, TabList } from '@mui/lab';

import introduce02 from './image/introduce02.jpg';
import category1 from './image/category1.png';
import category2 from './image/category2.png';
import category3 from './image/category3.png';
import category4 from './image/category4.png';
import category5 from './image/category5.png';
import background from '../../asset/background.jpg';
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

  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const category = [
    {
      num: 1, title: '탁주', letter: `곡류(쌀, 밀, 보리 등) 원료에 국(누룩, 입국 등)과 물을 섞어 일정한 온도에서 발효시킨 술덧을 체 등으로 걸러 제조한 술이다.
    '탁하게 빚은 술'이라고 하여 탁주, '방금 막 거른 술'이라고하여 막걸리라고도 한다.
    탁주의 주원료는 멥쌀, 밀누룩 그리고 물이다. 멥쌀 고두밥을 찐 뒤에 이를 식혀서 물과 함께 빻은 누룩을 비벼 항아리에 담는다.
    항아리를 25도 전후의 따뜻한 곳에 놓아두면 술이 발효되기 시작하여 빠르게는 4~5일 만에, 더디게는 7~8일 만에 완성된다.`},
    {
      num: 2, title: '약/청주', letter: `막걸리와 같은 방식으로 술을 빚고 발효시킨 술덧에서 술지게미를 걸러내어 맑게 만든 술이다.
    곡류 중 쌀을 원료로 하고 누룩을 1% 이상 사용하면 약주, 1% 미만을 사용하면 일본 사케 방식인 청주라고 한다.` },
    {
      num: 3, title: '증류주', letter: `막걸리, 약주, 청주와 같은 발효주를 증류하여 만든 술로, 주세법상의 증류식소주, 일반 증류주, 리큐르 등이 있다.
    대표적인 한국 증류주인 소주는 '불로 익혀 만든 진한 술'이라는 뜻으로, 곡물을 발효시켜 증류한 술인 증류식 소주와 주정을 물에 희석하여 제조한 희석식 소주가 있다.` },
    { num: 4, title: '과실주', letter: `과실을 발효시켜 만든 술을 말한다. 지역 대표 과실의 특성을 살려 만드는 경우가 많으며, 포도, 복분자, 머루, 사과, 복숭아, 딸기 등 다양한 과실이 사용된다.` },
    { num: 5, title: '기타주류', letter: `	주세법상의 주정, 발효주류, 증류주류에 속하지 않는 주류를 총칭한다.` }
  ]

  return (
    <div style={{ backgroundImage: `url(${background})` }}>
      <CustomDiv>
        <Typography variant='h2' color='white' align='center'>
          우리술 종류
        </Typography>
      </CustomDiv>

      <AboutNav />

      <Container maxWidth='lg'>
        <TabContext value={value}>
          <Box>
            <TabList onChange={handleChange}>
              <Tab label="탁주" value="1" />
              <Tab label="약/청주" value="2" />
              <Tab label="증류주" value="3" />
              <Tab label="과실주" value="4" />
              <Tab label="기타주류" value="5" />
            </TabList>
          </Box>


          <TabPanel value="1">
            <div>
              <Grid container spacing={5}>
                  <div style={{
                    marginTop: '40px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                    <img className='category1' src={category1} alt='category1' style={{ width: '100%' }} />
                  </div>
                <Grid xs={12} sm={12} md={12} lg={12} style={{backgroundColor: '#eee', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap'}}>
                  <Grid item xs={12} sm={12} md={2} lg={2} style={{width: '100%' }}>
                    <Typography variant="h4" style={{ color: '#ac7f5e', verticalAlign: 'middle', textAlign: 'center' }}>
                      탁주
                    </Typography>
                  </Grid>

                  <Grid item xs={12} sm={12} md={8} lg={8} style={{ width: '100%', verticalAlign: 'middle', display: 'table-cell' }}>
                    <Typography variant="body1">
                      {category[0].letter}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </TabPanel>

          <TabPanel value="2">
          <div>
              <Grid container spacing={5}>
                  <div style={{
                    marginTop: '40px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                    <img className='category2' src={category2} alt='category2' style={{ width: '100%' }} />
                  </div>
                <Grid xs={12} sm={12} md={12} lg={12} style={{backgroundColor: '#eee', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap'}}>
                  <Grid item xs={12} sm={12} md={2} lg={2} style={{width: '100%' }}>
                    <Typography variant="h4" style={{ color: '#a87e00', verticalAlign: 'middle', textAlign: 'center' }}>
                    약/청주
                    </Typography>
                  </Grid>

                  <Grid item xs={12} sm={12} md={8} lg={8} style={{ width: '100%', verticalAlign: 'middle', display: 'table-cell' }}>
                    <Typography variant="body1">
                      {category[1].letter}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </TabPanel>
          <TabPanel value="3">
          <div>
              <Grid container spacing={5}>
                  <div style={{
                    marginTop: '40px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                    <img className='category3' src={category3} alt='category3' style={{ width: '100%' }} />
                  </div>
                <Grid xs={12} sm={12} md={12} lg={12} style={{backgroundColor: '#eee', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap'}}>
                  <Grid item xs={12} sm={12} md={2} lg={2} style={{width: '100%' }}>
                    <Typography variant="h4" style={{ color: '#466c8f', verticalAlign: 'middle', textAlign: 'center' }}>
                    증류주
                    </Typography>
                  </Grid>

                  <Grid item xs={12} sm={12} md={8} lg={8} style={{ width: '100%', verticalAlign: 'middle', display: 'table-cell' }}>
                    <Typography variant="body1">
                      {category[2].letter}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </TabPanel>
          <TabPanel value="4">
          <div>
              <Grid container spacing={5}>
                  <div style={{
                    marginTop: '40px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                    <img className='category4' src={category4} alt='category4' style={{ width: '100%' }} />
                  </div>
                <Grid xs={12} sm={12} md={12} lg={12} style={{backgroundColor: '#eee', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap'}}>
                  <Grid item xs={12} sm={12} md={2} lg={2} style={{width: '100%' }}>
                    <Typography variant="h4" style={{ color: '#b44d5e', verticalAlign: 'middle', textAlign: 'center' }}>
                    과실주
                    </Typography>
                  </Grid>

                  <Grid item xs={12} sm={12} md={8} lg={8} style={{ width: '100%', verticalAlign: 'middle', display: 'table-cell' }}>
                    <Typography variant="body1">
                      {category[3].letter}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </TabPanel>
          <TabPanel value="5">
          <div>
              <Grid container spacing={5}>
                  <div style={{
                    marginTop: '40px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                    <img className='category5' src={category5} alt='category5' style={{ width: '100%' }} />
                  </div>
                <Grid xs={12} sm={12} md={12} lg={12} style={{backgroundColor: '#eee', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap'}}>
                  <Grid item xs={12} sm={12} md={2} lg={2} style={{width: '100%' }}>
                    <Typography variant="h4" style={{ color: '#738c2e', verticalAlign: 'middle', textAlign: 'center' }}>
                    기타주류
                    </Typography>
                  </Grid>

                  <Grid item xs={12} sm={12} md={8} lg={8} style={{ width: '100%', verticalAlign: 'middle', display: 'table-cell' }}>
                    <Typography variant="body1">
                      {category[4].letter}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </TabPanel>
        </TabContext>
      </Container>
    </div >
  );
}

export default AboutCategory;