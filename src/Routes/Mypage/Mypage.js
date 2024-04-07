import React from "react";
import { Grid, Container } from "@mui/material";
import Sidebar from "./Components/Sidemenu";
import { Routes, Route } from "react-router-dom";
import Myparty from "./Routes/Myparty";
import Mysool from "./Routes/Mysool";
import Useredit from "./Routes/Useredit";
import Userout from "./Routes/Userout";
import Checkpw from "./Routes/Checkpw";
import Qnalist from "./Routes/Qnalist";
import Qnaread from "./Routes/Qnaread";
import Qnawrite from "./Routes/Qnawrite";
import Qnaedit from "./Routes/Qnaedit";

const Mypage = () => {
  return (
    <Grid container spacing={2} sx={{ mt: 2 }}>
      <Grid item xs={12} md={2}>
        <Sidebar />
      </Grid>
      <Container maxWidth="lg">
        <Grid item xs={12} md={10} justifyContent="center" alignItems="center">
          <Routes>
            <Route path="/" element={<Mysool />} />
            <Route path="/mysool" element={<Mysool />} />
            <Route path="/myparty" element={<Myparty />} />
            <Route path="/useredit" element={<Useredit />} />
            <Route path="/checkpw" element={<Checkpw />} />
            <Route path="/userout" element={<Userout />} />
            <Route path="/qna" element={<Qnalist />} />
            <Route path="/qnaread" element={<Qnaread />} />
            <Route path="/qnawrite" element={<Qnawrite />} />
            <Route path="/qnaedit" element={<Qnaedit />} />
          </Routes>
        </Grid>
      </Container>
    </Grid>
  );
};

export default Mypage;
