import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Stack, Button, TextField } from "@mui/material";
const Checkpw = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("비밀번호가 확인되었습니다.");
    navigate("/mypage/useredit");
  };

  return (
    <div>
      <h1>회원정보변경</h1>
      <hr />
      <br />
      <h3>
        회원님의 정보를 안전하게 보호하기 위해 비밀번호를 다시 한번 확인해
        주세요.
      </h3>
      <br />
      <form onSubmit={handleSubmit}>
        비밀번호 확인 *
        <TextField
          label="비밀번호 확인"
          type="password"
          variant="outlined"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          margin="normal"
        />
        <Stack direction="row" spacing={2} justifyContent="end" sx={{ mt: 4 }}>
          <Button variant="outlined" onClick={() => navigate("/mypage")}>
            취소
          </Button>
          <Button type="submit" variant="contained" color="primary">
            인증하기
          </Button>
        </Stack>
      </form>
    </div>
  );
};

export default Checkpw;
