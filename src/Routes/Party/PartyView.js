import { useState } from 'react';
import { styled } from '@mui/system';
import { useParams } from 'react-router-dom';
import PartyLsitImage from '../../asset/PartyListImage.jpg';
import DrinkPartyImage from '../../asset/DrinkPartyIImage.jpg';
import JoinImage from '../../asset/JOIN.png'
import {
    Box,
    Grid,
    Typography,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    TextField,
    Button,
    List,
    ListItem,
    Tab
} from '@mui/material';
import { Tooltip } from '@mui/material';
import { IconButton } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import ShareIcon from '@mui/icons-material/Share';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const PartyView = () => {

    const dummyData = [
        { num: 1, image: PartyLsitImage, title: '경륜 모임', nickname: 'ryun', summary: '와서 한잔해~!', date: '2024-01-02', count: 100, like: 100 },
        { num: 2, image: PartyLsitImage, title: '진솔 모임', nickname: 'sole', summary: '막걸리에는 파전이지!', date: '2024-02-03', count: 200, like: 200 },
        { num: 3, image: PartyLsitImage, title: '현제 모임', nickname: 'hyun', summary: '오늘도 만취 합시닷', date: '2024-03-04', count: 300, like: 300 },
        { num: 4, image: PartyLsitImage, title: '사라 모임', nickname: 'sara', summary: '금요일에는 전통주~', date: '2024-04-05', count: 400, like: 400 },
        { num: 5, image: PartyLsitImage, title: '멘토님 모임', nickname: 'jaee', summary: '마지막 남은 한 병', date: '2024-05-06', count: 500, like: 500 },
        { num: 6, image: PartyLsitImage, title: '강사님 모임', nickname: 'wooo', summary: '고오급 막걸리 시음회', date: '2024-06-05', count: 600, like: 600 },
    ];

    const { partyId } = useParams();
    const partyData = dummyData.find(party => party.num.toString() === partyId);

    const [value, setValue] = useState('1');
    const handleChange = (event, newValue) => { setValue(newValue); };

    if (!partyData) { return <Typography variant="h5">파티 정보를 찾을 수 없습니다.</Typography>; }

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
        // 공용 이미지 컴포넌트화 진행 필요
    });

    return (
        <>
            <CustomDiv>
                <Typography variant='h2' color='white' align='center'>
                    찐들의 모임
                </Typography>
            </CustomDiv>
            <br /><br />
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={1} lg={1} />
                    <Grid item xs={10} lg={10}>
                        <Grid xs={12} lg={12}>
                            <Grid container spacing={1} alignItems="center">
                                <Grid item xs={12} md={6} lg={3}>
                                    <Box
                                        sx={{
                                            backgroundImage: `url(${partyData.image})`,
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
                                <Grid item xs={12} md={6} lg={9}>
                                    <Card>
                                        <CardHeader
                                            title={`제목: ${partyData.title}`}
                                            action={
                                                <Box>
                                                    <Tooltip title="관심모임">
                                                        <IconButton>
                                                            <StarBorderIcon />
                                                        </IconButton>
                                                    </Tooltip>
                                                    <Tooltip title="공유하기">
                                                        <IconButton>
                                                            <ShareIcon />
                                                        </IconButton>
                                                    </Tooltip>
                                                </Box>
                                            }
                                        />
                                        <CardContent>
                                            <Typography variant="body1">
                                                모임 상세 내용 : {partyData.summary}
                                            </Typography>
                                            <Typography>
                                                모임 날짜 : {partyData.date}
                                            </Typography>
                                            <Typography>
                                                조회수 : {partyData.count}
                                            </Typography>
                                            <Typography>
                                                저장수 : {partyData.like}
                                            </Typography>
                                        </CardContent>
                                        <CardActions disableSpacing>
                                            <Tooltip title="모임참가" sx={{ flexGrow: 1 }}>
                                                <Box sx={{ marginLeft: 'auto' }}>
                                                    <IconButton>
                                                        <img src={JoinImage} alt="모임 참가" style={{ maxHeight: '100px' }} />
                                                    </IconButton>
                                                </Box>
                                            </Tooltip>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            </Grid>
                            <TabContext value={value}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                                        <Tab label="모임 상세 설명" value="1" />
                                        <Tab label="모임 약관" value="2" />
                                        <Tab label="모임 문의" value="3" />
                                        <Tab label="모임 후기" value="4" />
                                    </TabList>
                                </Box>
                                <TabPanel value="1">
                                    모임 상세 설명
                                </TabPanel>
                                <TabPanel value="2">
                                    모임 약관
                                </TabPanel>
                                <TabPanel value="3">
                                    모임 문의
                                </TabPanel>
                                <TabPanel value="4">
                                    모임 후기
                                    <Card>
                                        <CardContent>
                                            <Box
                                                component="form"
                                                sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, mt: 2 }}
                                                noValidate
                                                autoComplete="off"
                                            >
                                                <TextField
                                                    id="outlined-multiline-static"
                                                    label="댓글"
                                                    multiline
                                                    rows={4}
                                                    defaultValue=""
                                                    variant="outlined"
                                                />
                                                <Button variant="contained" sx={{ mt: 3 }}>
                                                    댓글 작성
                                                </Button>
                                            </Box>
                                            <List>
                                                <ListItem>
                                                    <Typography variant="subtitle1">사용자1</Typography>
                                                    <Typography variant="body2">댓글 내용이 여기에 들어갑니다.</Typography>
                                                </ListItem>
                                            </List>
                                        </CardContent>
                                    </Card>
                                </TabPanel>
                            </TabContext>
                        </Grid>
                    </Grid>
                    <Grid item xs={1} lg={1} />
                </Grid>
            </Box >
        </>
    );
};

export default PartyView