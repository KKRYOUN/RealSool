import { useNavigate } from "react-router-dom";
import { Stack, Button } from "@mui/material";
const Useredit = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>회원정보변경</h1>
      <hr />
      <Stack direction="row" spacing={2} justifyContent="end" sx={{ mt: 4 }}>
        <Button variant="outlined" onClick={() => navigate("/mypage")}>
          취소
        </Button>
        <Button type="submit" variant="contained" color="primary">
          회원정보수정
        </Button>
      </Stack>
    </div>
  );
};

export default Useredit;
