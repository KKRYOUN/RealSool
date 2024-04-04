import React from 'react';
import { useState } from 'react';
import { styled } from '@mui/system';
import { useParams } from 'react-router-dom';
import PartyLsitImage from '../../asset/PartyListImage.jpg';
import DrinkPartyImage from '../../asset/DrinkPartyIImage.jpg';
import MeetingImage from '../../asset/MeetingImage.jpg';
import JoinImage from '../../asset/JOIN.png'
import {
    Avatar,
    Box,
    Card,
    CardContent,
    CardHeader,
    Divider,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Tab,
    Tooltip,
    Typography
} from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import ShareIcon from '@mui/icons-material/Share';
import ReplyIcon from '@mui/icons-material/Reply';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
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

    const comments = [
        { id: 1, author: 'ryun', content: '가가가가', timestamp: '0101', likes: 3 },
        { id: 2, author: 'sole', content: '나나나나', timestamp: '0202', likes: 33 },
        { id: 3, author: 'hyun', content: '다다다다', timestamp: '0303', likes: 333 },
        { id: 4, author: 'sara', content: '라라라라', timestamp: '0404', likes: 3333 },
        { id: 5, author: 'jaee', content: '마마마마', timestamp: '0505', likes: 33333 },
        { id: 6, author: 'wooo', content: '바바바바', timestamp: '0606', likes: 333333 },
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
                                            <Grid container justifyContent="space-between" alignItems="center">
                                                <Grid item xs>
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
                                                </Grid>
                                                <Grid item>
                                                    <Tooltip title="모임참가">
                                                        <IconButton>
                                                            <img src={JoinImage} alt="모임 참가" style={{ maxHeight: '100px' }} />
                                                        </IconButton>
                                                    </Tooltip>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
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
                                    ❤달빛주막 전통주 시음회 비공개 신청 페이지입니다.❤
                                    <br />
                                    문경 전통주를 홀짝이며 다양한 우리술 이야기를
                                    쏟아 주실 분들을 모집합니다❤
                                    <br />
                                    문경을 대표하는 전통주는 저희가 준비할게요!
                                    같이 나눠 먹으면 좋을 안주만 가져와 주세요🥗
                                    <br />
                                    <br />
                                    <br />
                                    📍만나는 날
                                    <br />
                                    3월 28일(목) 5시
                                    <br />
                                    <br />
                                    <br />
                                    🎉스탠딩 / 포틀럭 파티
                                    <br />
                                    <br />
                                    <br />
                                    🏚만나는 곳
                                    <br />
                                    백술도가(서울특별시 서초구 방배천로2길 12 지하1층 103호)
                                    <br />
                                    <br />
                                    <br />
                                    📌시음주 (12종)
                                    -두술도가<br />
                                    오미자씨 / 희양산9도 / 희양산15도<br /><br />
                                    -문경호산춘<br />
                                    호산춘<br /><br />
                                    -오미나라<br />
                                    문경바람 백자 / 문경바람 오크<br /><br />
                                    -문경주조<br />
                                    문희 탁주 / 폭스진 / 폭스앤홉스 / 오미자 생막걸리 / 구름을 벗삼아 막걸리 / 오희 스파클링 막걸리<br /><br />
                                    <br />
                                    +특별 시음주 (10종) 비밀❤
                                    저희 특별 시음주 엄청난 거 아시죠!
                                    기대 많이 해주세요😊
                                    <br />
                                    <br />
                                    <br />
                                    ※ 2024년 03월 27일까지 미신청 시, 참여 불가능합니다.
                                    <br />
                                    ※ 순서가 있는 시음회니, 시간은 꼭 지켜주세요.
                                    <br />
                                    ※ 지인 동반 참석 및 대리인 참석은 불가능합니다.
                                    <br />
                                    ※ 모임 중 발생할 수 있는 모든 안전사고에 유의 부탁드리며, 여러 종류의 술을 동시에 시음하면 금방 취기가 오르니 잘 조절해 주세요
                                    <br />
                                    ※ 전 시간 스탠드로 진행됩니다! 안주는 드리지 않습니다. 미리 식사도 하시고 체력도 비축하고 오세요.
                                    <br />
                                    ※ 원활한 행사 진행을 위해 주최측에서 준비한 시음주가 아닌 주류는 행사시 오픈이 어렵습니다. 양해 바랍니다.
                                    <br />
                                </TabPanel>
                                <TabPanel value="2">
                                    <img src={MeetingImage} alt="모임 약관" style={{ maxHeight: '100%', maxWidth: '100%' }} />
                                </TabPanel>
                                <TabPanel value="3">
                                    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                                        {comments.map((comment) => (
                                            <React.Fragment key={comment.id}>
                                                <ListItem alignItems="flex-start">
                                                    <ListItemAvatar>
                                                        <Avatar alt={comment.author} src="/static/images/avatar/1.jpg" />
                                                    </ListItemAvatar>
                                                    <ListItemText
                                                        primary={comment.author}
                                                        secondary={
                                                            <>
                                                                <Typography
                                                                    sx={{ display: 'inline' }}
                                                                    component="span"
                                                                    variant="body2"
                                                                    color="text.primary"
                                                                >
                                                                    {comment.content}
                                                                </Typography>
                                                                {" — " + comment.timestamp}
                                                            </>
                                                        }
                                                    />
                                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                        <IconButton aria-label="like">
                                                            <ThumbUpAltIcon />
                                                        </IconButton>
                                                        <Typography variant="caption">{comment.likes} Likes</Typography>
                                                        <IconButton aria-label="reply">
                                                            <ReplyIcon />
                                                        </IconButton>
                                                    </Box>
                                                </ListItem>
                                                <Divider variant="inset" component="li" />
                                            </React.Fragment>
                                        ))}
                                    </List>
                                </TabPanel>
                                <TabPanel value="4">
                                    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                                        {comments.map((comment) => (
                                            <React.Fragment key={comment.id}>
                                                <ListItem alignItems="flex-start">
                                                    <ListItemAvatar>
                                                        <Avatar alt={comment.author} src="/static/images/avatar/1.jpg" />
                                                    </ListItemAvatar>
                                                    <ListItemText
                                                        primary={comment.author}
                                                        secondary={
                                                            <>
                                                                <Typography
                                                                    sx={{ display: 'inline' }}
                                                                    component="span"
                                                                    variant="body2"
                                                                    color="text.primary"
                                                                >
                                                                    {comment.content}
                                                                </Typography>
                                                                {" — " + comment.timestamp}
                                                            </>
                                                        }
                                                    />
                                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                        <IconButton aria-label="like">
                                                            <ThumbUpAltIcon />
                                                        </IconButton>
                                                        <Typography variant="caption">{comment.likes} Likes</Typography>
                                                        <IconButton aria-label="reply">
                                                            <ReplyIcon />
                                                        </IconButton>
                                                    </Box>
                                                </ListItem>
                                                <Divider variant="inset" component="li" />
                                            </React.Fragment>
                                        ))}
                                    </List>
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