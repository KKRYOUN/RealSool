import { useParams } from 'react-router-dom';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Tooltip,
  Typography
} from '@mui/material';
import JoinImage from '../../asset/JOIN.png'
import PartyLsitImage from '../../asset/PartyListImage.jpg';
import ShareIcon from '@mui/icons-material/Share';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const PartyTilte = () => {

  // 예시 데이터 1 : 게시글 정보
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

  return (
    <>
      <Grid container spacing={1} alignItems="center">
        <Grid item xs={12} sm={12} md={12} lg={4}>
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
        <Grid item xs={12} sm={12} md={12} lg={8}>
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
    </>
  );
}

export default PartyTilte;