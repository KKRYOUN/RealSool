import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Stack,
  Button,
} from "@mui/material";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const Qnaedit = () => {
  // 기존 qna 데이터를 수정 페이지의 초기 상태로 설정합니다.
  const qna = {
    category: "sool",
    title: "우리술 정보 문의",
    content: "이 술의 구매처를 알 수 있을까요?.",
  };

  const [category, setCategory] = useState(qna.category);
  const [title, setTitle] = useState(qna.title);
  const [content, setContent] = useState(qna.content);
  const navigate = useNavigate();

  const categories = [
    { value: "sool", label: "우리술 정보" },
    { value: "party", label: "찐들의 모임" },
    { value: "user", label: "회원 정보" },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!category) {
      alert("카테고리를 선택해주세요.");
      return;
    }
    if (!title.trim()) {
      alert("제목을 입력해주세요.");
      return;
    }
    if (!content.trim()) {
      alert("내용을 입력해주세요.");
      return;
    }

    console.log("카테고리: ", category);
    console.log("제목: ", title);
    console.log("내용: ", content);
    alert("글 수정이 완료되었습니다.");
    navigate("/mypage/qnaread");
  };
  return (
    <div>
      <h1>1대1 문의사항</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth margin="normal" required>
          <InputLabel id="category-label">카테고리</InputLabel>
          <Select
            labelId="category-label"
            id="category"
            value={category}
            label="카테고리"
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          margin="normal"
          required
          fullWidth
          id="title"
          label="제목"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          sx={{ mb: 3 }}
        />
        <ReactQuill
          theme="snow"
          value={content}
          onChange={setContent}
          style={{ height: "400px" }}
        />
        <Stack direction="row" spacing={2} justifyContent="end" sx={{ mt: 8 }}>
          <Button variant="outlined" onClick={() => navigate(-1)}>
            이전
          </Button>
          <Button type="submit" variant="contained" color="success">
            수정
          </Button>
        </Stack>
      </form>
    </div>
  );
};

export default Qnaedit;
