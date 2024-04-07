import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActionArea,
  CardMedia,
  Divider,
} from "@mui/material";

const MySool = () => {
  const sools = [
    {
      id: 1,
      image:
        "https://thesool.com/common/imageView.do?targetId=PR00001227&targetNm=PRODUCT",
      soolname: "블링블링 노을별",
    },
    {
      id: 2,
      image:
        "https://thesool.com/common/imageView.do?targetId=PR00001226&targetNm=PRODUCT",
      soolname: "너브내 화이트(dry) 와인",
    },
    {
      id: 3,
      image:
        "https://thesool.com/common/imageView.do?targetId=PR00001225&targetNm=PRODUCT",
      soolname: "너디펀치",
    },
    {
      id: 4,
      image:
        "https://thesool.com/common/imageView.do?targetId=PR00001224&targetNm=PRODUCT",
      soolname: "너디로제",
    },
    {
      id: 5,
      image:
        "https://thesool.com/common/imageView.do?targetId=PR00001223&targetNm=PRODUCT",
      soolname: "가무치 43%",
    },
    {
      id: 6,
      image:
        "https://thesool.com/common/imageView.do?targetId=PR00001222&targetNm=PRODUCT",
      soolname: "호땅",
    },
    {
      id: 7,
      image:
        "https://thesool.com/common/imageView.do?targetId=PR00001221&targetNm=PRODUCT",
      soolname: "로아포르토",
    },
    {
      id: 8,
      image:
        "https://thesool.com/common/imageView.do?targetId=PR00001220&targetNm=PRODUCT",
      soolname: "우곡소주",
    },
    {
      id: 9,
      image:
        "https://thesool.com/common/imageView.do?targetId=PR00001219&targetNm=PRODUCT",
      soolname: "복순도가 찹쌀탁주 9도",
    },
  ];
  return (
    <div>
      <h1>나의 찜한술</h1>
      <hr />
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {sools.map((sool, index) => (
          <Grid item xs={12} sm={6} md={8} lg={4} key={index}>
            <Card sx={{ mt: 1, mb: 1 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image={sool.image}
                  alt={sool.soolname}
                  sx={{ objectFit: "contain" }} // 이미지가 컨테이너 안에 비율을 유지하며 들어맞도록 설정
                />
                <Divider />
                <CardContent>
                  <Typography
                    variant="body1"
                    component="div"
                    align="center"
                    sx={{ fontWeight: "bold" }}
                  >
                    {sool.soolname}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default MySool;
