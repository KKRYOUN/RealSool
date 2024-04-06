import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Stack,
  Button,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Qnaread = () => {
  const navigate = useNavigate();
  const qna = {
    id: 1,
    date: "2024-03-27",
    category: "우리술 정보",
    title: "우리술 정보 문의",
    content: "이 술의 구매처를 알 수 있을까요?.",
  };

  const answer = {
    id: 1,
    date: "2024-03-27",
    content: "http://jjinsool.com에서 구입 가능합니다.",
  };

  const handleDelete = () => {
    alert("삭제되었습니다.");
    navigate("/mypage/qna");
  };
  return (
    <div>
      <h1>1대1 문의사항</h1>
      <hr />
      <TableContainer component={Paper} sx={{ mt: 4, mb: 4 }}>
        <Table
          aria-label="article details"
          borderAxis="bothBetween"
          variant="outlined"
        >
          <TableBody>
            <TableRow>
              <TableCell
                component="th"
                scope="row"
                sx={{ width: "20%", backgroundColor: "#fafafa" }}
              >
                카테고리
              </TableCell>
              <TableCell>{qna.category}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                component="th"
                scope="row"
                sx={{ width: "20%", backgroundColor: "#fafafa" }}
              >
                제목
              </TableCell>
              <TableCell>{qna.title}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                component="th"
                scope="row"
                sx={{ width: "20%", backgroundColor: "#fafafa" }}
              >
                날짜
              </TableCell>
              <TableCell>{qna.date}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                component="th"
                scope="row"
                colSpan={2}
                sx={{ backgroundColor: "#fafafa" }}
              >
                내용
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2} sx={{ height: "300px" }}>
                {/* 내용이 HTML일 수 있으니 'dangerouslySetInnerHTML'를 사용할 수 있습니다. 안전을 위해 서버에서 오는 데이터를 깨끗하게 해야 합니다. */}
                <div dangerouslySetInnerHTML={{ __html: qna.content }} />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Stack direction="row" spacing={2} justifyContent="end" sx={{ mt: 4 }}>
        <Button
          type="button"
          variant="contained"
          color="error"
          onClick={handleDelete}
        >
          삭제
        </Button>
        <Button
          variant="contained"
          color="success"
          component={Link}
          to="/mypage/qnaedit"
        >
          수정
        </Button>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/mypage/qna"
        >
          목록
        </Button>
      </Stack>
      <TableContainer component={Paper} sx={{ mt: 4, mb: 4 }}>
        <Table
          aria-label="article details"
          borderAxis="bothBetween"
          variant="outlined"
        >
          <TableBody>
            <TableRow>
              <TableCell
                component="th"
                scope="row"
                sx={{ width: "20%", backgroundColor: "#fafafa" }}
              >
                날짜
              </TableCell>
              <TableCell>{answer.date}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>{answer.content}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Qnaread;
