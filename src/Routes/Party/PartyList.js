import React from 'react';
import { styled } from '@mui/system';
import { Box, Container, Typography, Grid, Card, CardContent, CardActions, Button, CardMedia, Pagination } from '@mui/material';
import DrinkPartyImage from '../../asset/DrinkPartyIImage.jpg'
import PartyLsitImage from '../../asset/PartyListImage.jpg';

const PartyList = () => {

    const CustomDiv = styled('div')({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `url(${DrinkPartyImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover', // '100% 100%'를 'cover'로 변경하여 이미지가 컨테이너를 가득 채우도록 함
        backgroundPosition: 'center',
        height: '350px',
        width: '100vw', // 화면 전체 너비에 맞게 조정
        margin: '0', // 여백 제거
        overflow: 'hidden' // 가로 스크롤바가 생기지 않도록 함
    });


    const rows = [
        { num: 1, image: PartyLsitImage, title: '경륜 모임', nickname: 'ryun', summary: '와서 한잔해~!', date: '2024-01-02', delete: '모임하러 가기' },
        { num: 2, image: PartyLsitImage, title: '진솔 모임', nickname: 'sole', summary: '막걸리에는 파전이지!', date: '2024-02-03', delete: '모임하러 가기' },
        { num: 3, image: PartyLsitImage, title: '현제 모임', nickname: 'hyun', summary: '오늘도 만취 합시닷', date: '2024-03-04', delete: '모임하러 가기' },
        { num: 4, image: PartyLsitImage, title: '사라 모임', nickname: 'sara', summary: '금요일에는 전통주~', date: '2024-04-05', delete: '모임하러 가기' },
        { num: 5, image: PartyLsitImage, title: '멘토님 모임', nickname: 'jaee', summary: '마지막 남은 한 병', date: '2024-05-06', delete: '모임하러 가기' },
        { num: 6, image: PartyLsitImage, title: '강사님 모임', nickname: 'wooo', summary: '고오급 막걸리 시음회', date: '2024-06-05', delete: '모임하러 가기' },
    ];

    return (
        <>
            <CustomDiv>
                <Typography variant='h2' color='white' align='center'>
                    찐들의 모임
                </Typography>
            </CustomDiv>
            <Container maxWidth="lg">
                <br /><br /><br />
                <hr /><hr />
                <Grid container spacing={2}>
                    <Grid item lg={1} />
                    <Grid item lg={10}>
                        <Grid container spacing={2}>
                            {rows.map((card, index) => (
                                <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
                                    <Card>
                                        <CardContent>
                                            <CardMedia
                                                component="img"
                                                height="140"
                                                image={card.image}
                                                alt={card.title}
                                            />
                                            <br />
                                            <Typography variant="h5" component="h2">
                                                {card.title}
                                            </Typography>
                                            <Typography color="textSecondary">
                                                작성자 : {card.nickname}
                                            </Typography>
                                            <Typography color="textSecondary">
                                                {card.summary}
                                            </Typography>
                                            <Typography color="textSecondary">
                                                모임 일자: {card.date}
                                            </Typography>
                                        </CardContent>
                                        <CardActions sx={{ justifyContent: 'flex-end' }}>
                                            <Button size="small">{card.delete}</Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                        <Box sx={{ display: 'flex', justifyContent: 'center', padding: '40px' }}>
                            <Pagination count={10} variant="outlined" color="primary" />
                        </Box>
                    </Grid>
                    <Grid item lg={1} /> {/* 우측 여백 */}
                </Grid>
            </Container>
        </>
    );
};

export default PartyList;
