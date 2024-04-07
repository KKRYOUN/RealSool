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
const Myparty = () => {
  const parties = [
    {
      id: 1,
      image: "https://src.hidoc.co.kr/image/lib/2023/6/30/1688111108525_0.jpg",
      partytitle: "전통주와 친해지기 - 막걸리 편",
    },
    {
      id: 2,
      image:
        "https://peace-commerce-development.s3.ap-northeast-2.amazonaws.com/gLmOjRVydwrjSANkodz5e.jpeg",
      partytitle: "전통주와 친해지기 - 맑은술 편",
    },
    {
      id: 3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWJs5eYq09ssewufq6IqX1kHC2284sliKHD3uOqSU44Y5Tl7E55LJpdEfX0H3sbOAbxtc&usqp=CAU",
      partytitle: "양조가와 만남 <골목양조장>",
    },
    {
      id: 4,
      image:
        "https://thesool.com/ckeditor/imageUpload/FotoJet_1628638643485.jpg",
      partytitle: "신상술 시음회(24년 1월 18일)",
    },

    {
      id: 5,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfI3S622jLXWDE2jhDwlA3OQkOTJmdkXWe8w&usqp=CAU",
      partytitle: "우리술과 친해지기 - 증류주(리큐르) 편",
    },
  ];
  return (
    <div>
      <h1>나의 참여모임</h1>
      <hr />
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {parties.map((party, index) => (
          <Grid item xs={12} sm={6} md={8} lg={4} key={index}>
            <Card sx={{ mt: 1, mb: 1 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image={party.image}
                  alt={party.partytitle}
                  sx={{ objectFit: "contain" }} // 이미지가 컨테이너 안에 비율을 유지하며 들어맞도록 설정
                />
                <Divider />
                <CardContent>
                  <Typography
                    variant="subtitle2"
                    component="div"
                    align="center"
                    sx={{ fontWeight: "bold" }}
                  >
                    {party.partytitle}
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

export default Myparty;
