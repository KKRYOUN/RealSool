import React from "react";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Stack,
  Button,
} from "@mui/material";
const inquiries = [
  {
    id: 1,
    date: "2024-03-27",
    category: "우리술 정보",
    title: "우리술 정보 문의",
    status: "답변 완료",
    responseDate: "2024-03-27",
  },
  {
    id: 2,
    date: "2024-03-28",
    category: "모임 정보",
    title: "찐들의 모임 문의",
    status: "대기 중",
    responseDate: "-",
  },
  {
    id: 3,
    date: "2024-03-28",
    category: "회원 정보",
    title: "비밀번호 정보 문의",
    status: "대기 중",
    responseDate: "-",
  },
];
const Qnalist = () => {
  return (
    <div>
      <h1>1대1 문의사항</h1>
      <hr />
      {/* stickyHeader 하나만 추가하면 스크롤을 내려도 헤더가 고정 */}
      <TableContainer component={Paper} sx={{ mt: 4, mb: 4 }}>
        <Table stickyHeader aria-label="inquiry table">
          <TableHead>
            <TableRow>
              <TableCell>문의 날짜</TableCell>
              <TableCell>카테고리</TableCell>
              <TableCell sx={{ width: "40%" }}>제목</TableCell>
              <TableCell>문의 상태</TableCell>
              <TableCell>답변 날짜</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {inquiries.length > 0 ? (
              inquiries.map((inquiry) => (
                <TableRow
                  key={inquiry.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{inquiry.date}</TableCell>
                  <TableCell>{inquiry.category}</TableCell>
                  <TableCell sx={{ width: "40%" }}>
                    {/* <Link to={`/mypage/qnaread/${inquiry.id}`}> */}
                    <Link
                      to={`/mypage/qnaread/`}
                      style={{ textDecoration: "none" }}
                    >
                      {inquiry.title}
                    </Link>
                  </TableCell>
                  <TableCell>{inquiry.status}</TableCell>
                  <TableCell>{inquiry.responseDate}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  게시글이 존재하지 않습니다.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Stack direction="row" justifyContent="flex-end">
        <Button variant="contained" component={Link} to="/mypage/qnawrite">
          문의하기
        </Button>
      </Stack>
    </div>
  );
};

export default Qnalist;
