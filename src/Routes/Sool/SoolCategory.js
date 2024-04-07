import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

// Routes
import SoolNav from './SoolNav';

import './sool.css'
import styled from 'styled-components';

const image1 = 'https://d38cxpfv0ljg7q.cloudfront.net/admin_contents/detail/9gfk-1633669822360-%EC%A7%80%EB%9E%80%EC%A7%80%EA%B5%90+%ED%83%81%EC%A3%BC1.jpg';
const image2 = "https://cdn.imweb.me/thumbnail/20230222/01dcc9244caee.jpg"
const image3 = "http://koreansool.com/bizdemo51809/component/board/board_23/u_image/9/866807724_EC958CEC9790ED9484-EC9EA5EC8898EC98A4EBAFB8EC9E90ECA3BC.jpg"
const image4 = "https://m.segye.com/content/image/2023/12/20/20231220510367.jpg"
const image5 = "https://dafarm.net/data/goods/233/2021/09/882_temp_16328994500005view.jpg"
const image6 = "https://flexible.img.hani.co.kr/flexible/normal/970/654/imgdb/original/2023/0921/20230921503820.jpg"

const SoolCategory = () => {

  const BackImage = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: `url(${'https://innertrip.co.kr/wp-content/uploads/2022/08/%EC%A0%84%ED%86%B5%EC%A3%BC-%ED%85%8C%EC%9D%B4%EC%8A%A4%ED%8C%85-1.png'}})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    backgroundPosition: 'center',
    height: '350px',
  })

  return (
    <div className='soju'>
      <div className='header-image'>
        <BackImage />
        <div className='text-over-img'>
          우리술 정보
        </div>
      </div>
      <>
        <SoolNav />
        <br />
      </>
      <div className='name1'>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="350"
              image={image1}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                탁주
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="350"
              image={image2}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                약주, 청주
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="350"
              image={image3}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                과실주
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
      <br />
      <div className='name1'>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="350"
              image={image4}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                증류주
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="350"
              image={image5}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                리큐르
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="350"
              image={image6}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                기타, 전체
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

      </div>
    </div>

  );
}

export default SoolCategory;
