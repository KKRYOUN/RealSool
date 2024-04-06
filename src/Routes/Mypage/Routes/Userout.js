import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Stack,
  Button,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormGroup,
} from "@mui/material";

const Userout = () => {
  const [password, setPassword] = useState("");
  const [reason, setReason] = useState("");
  const [additionalNote, setAdditionalNote] = useState("");
  const navigate = useNavigate();

  const handleReasonChange = (event) => {
    setReason(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!reason) {
      alert("탈퇴 사유를 선택해주세요.");
      return;
    }
    // 폼 제출 로직 구현, 예: API로 데이터 전송
    console.log({ password, reason, additionalNote });
    alert("회원 탈퇴 처리가 완료되었습니다.");
    navigate("/");
  };

  return (
    <div>
      <h1>회원탈퇴</h1>
      <hr />
      <h3>01. 회원탈퇴 안내</h3>
      찐술 탈퇴안내 회원님께서 회원 탈퇴를 원하신다니 저희의 서비스가 많이
      부족하고 미흡했나 봅니다.
      <br />
      불편하셨던 점이나 불만사항을 알려주시면 적극 반영해서 고객님의 불편함을
      해결해 드리도록 노력하겠습니다.
      <br />
      <br />
      ※ 아울러 회원 탈퇴시의 아래 사항을 숙지하시기 바랍니다. ※
      <br />
      1. 탈퇴 시 30일간 재가입이 불가합니다.
      <br />
      <br />
      <h3>02. 회원탈퇴 하기</h3>
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
          sx={{ mb: 4 }}
        />
        탈퇴사유 *
        <FormGroup sx={{ mb: 4 }}>
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="reason"
              name="reason"
              value={reason}
              onChange={handleReasonChange}
            >
              <FormControlLabel
                value="noUse"
                control={<Radio />}
                label="더 이상 사용하지 않음"
              />
              <FormControlLabel
                value="findBetter"
                control={<Radio />}
                label="더 나은 서비스를 찾음"
              />
              <FormControlLabel
                value="privacyConcerns"
                control={<Radio />}
                label="개인정보 보호 우려"
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="기타"
              />
            </RadioGroup>
          </FormControl>
        </FormGroup>
        남기실 말씀 *
        <TextField
          label="남길 말씀 "
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          value={additionalNote}
          onChange={(e) => setAdditionalNote(e.target.value)}
          required
          margin="normal"
        />
        {/* Stack :
       1. 정렬 : 여러개의 버튼을 수평 또는 수직으로 정렬할 때 Stack 컴포넌트를 사용하면 간단하게 구현 가능 
       2. 간격 조정 : spacing을 통해 버튼 사이의 간격 쉽게 조정할 수 있음
       3. 레이아웃의 유연성 : alignitems, justifyContent 등
       */}
        <Stack direction="row" spacing={2} justifyContent="end" sx={{ mt: 4 }}>
          <Button variant="outlined" onClick={() => navigate(-1)}>
            이전으로
          </Button>
          <Button type="submit" variant="contained" color="error">
            탈퇴
          </Button>
        </Stack>
      </form>
    </div>
  );
};

export default Userout;
