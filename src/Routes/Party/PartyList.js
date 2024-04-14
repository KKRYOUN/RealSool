import React from 'react';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import { Box, Container, Typography, Grid, Card, CardContent, CardActions, Button, CardMedia, Pagination, IconButton, Tooltip } from '@mui/material';
import DrinkPartyImage from '../../asset/DrinkPartyIImage.jpg'
import PartyLsitImage from '../../asset/PartyListImage.jpg';
import EditNoteIcon from '@mui/icons-material/EditNote';

const PartyList = () => {

    const CustomDiv = styled('div')({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `url(${DrinkPartyImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '350px',
        width: '100vw',
        margin: '0',
        overflow: 'hidden'
    });


    const rows = [
        { num: 1, image: PartyLsitImage, title: '경륜 모임', nickname: 'ryun', summary: '와서 한잔해~!', date: '2024-01-02', Link: '모임하러 가기' },
        { num: 2, image: PartyLsitImage, title: '진솔 모임', nickname: 'sole', summary: '막걸리에는 파전이지!', date: '2024-02-03', Link: '모임하러 가기' },
        { num: 3, image: PartyLsitImage, title: '현제 모임', nickname: 'hyun', summary: '오늘도 만취 합시닷', date: '2024-03-04', Link: '모임하러 가기' },
        { num: 4, image: PartyLsitImage, title: '사라 모임', nickname: 'sara', summary: '금요일에는 전통주~', date: '2024-04-05', Link: '모임하러 가기' },
        { num: 5, image: PartyLsitImage, title: '멘토님 모임', nickname: 'jaee', summary: '마지막 남은 한 병', date: '2024-05-06', Link: '모임하러 가기' },
        { num: 6, image: PartyLsitImage, title: '강사님 모임', nickname: 'wooo', summary: '고오급 막걸리 시음회', date: '2024-06-05', Link: '모임하러 가기' },
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
                                            <Button size="small" component={Link} to={`/party/PartyView/${card.num}`}>{card.Link}</Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 3, padding: '40px' }}>
                            <Pagination count={10} variant="outlined" color="primary" />
                            <Tooltip title="모임작성하기">
                                <IconButton component={Link} to="/party/PartyListWrite" color='primary'>
                                    <EditNoteIcon sx={{ fontSize: 30 }} />
                                </IconButton>
                            </Tooltip>
                        </Box>
                    </Grid>
                    <Grid item lg={1} />
                </Grid>
            </Container>
        </>
    );
};

export default PartyList;
