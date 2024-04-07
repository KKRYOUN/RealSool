import React, { useState } from 'react';
import {
    Avatar,
    Button,
    CssBaseline,
    TextField,
    FormControl,
    FormControlLabel,
    Checkbox,
    FormHelperText,
    Grid,
    Box,
    Typography,
    Container,
} from '@mui/material/';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// import axios from 'axios';
import { Link } from 'react-router-dom';

const FindId = () => {
    const theme = createTheme();
    const [checked, setChecked] = useState(false);

    // 동의 체크
    const handleAgree = (event) => {
        setChecked(event.target.checked);
    };

    // form 전송
    const handleSubmit = (e) => {
        // e.preventDefault();

        // if(setChecked(false)) {
        //   alert("이용약관에 동의 해주세요")
        // }

        // if(!name || !email || !password || !repassword) {
        //   alert("모든 사항 기입 요망")
        //   return;
        // }

        // if (Password.target.value != rePassword.target.value) {
        //   alert("비밀번호를 정확히 입력해주세요")
        // }

        // const response = axios.post(`${process.env.REACT_APP_SERVER_IP}/join` ,{
        //   name : name,
        //   memberId : email,
        //   memberPw : password
        // })

        // if (response.state === 200) {
        //   navigate(`/login`);
        // }
        // else {
        //   alert("회원가입 실패")
        // }
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: '#A4134B' }} />
                    <Typography component="h1" variant="h5">
                        아아디 찾기
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <FormControl component="fieldset" variant="standard">
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField required autoFocus fullWidth id="name" name="name" label="이름" />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        type="email"
                                        id="email"
                                        name="email"
                                        label="이메일 주소"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControlLabel
                                        control={<Checkbox onChange={handleAgree} color="primary" />}
                                        label="개인 정보 제공에 동의합니다."
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2, backgroundColor: '#A4134B' }}
                                size="large"
                            >
                                아아디 찾기
                            </Button>
                        </FormControl>
                        <Box sx={{ mt: 2, textAlign: 'center' }}>
                            <Link to="/memberPw" style={{ marginRight: '10px' }}>비밀번호 찾기</Link> |
                            <Link to="/login" style={{ margin: '0 10px' }}>로그인</Link> |
                            <Link to="/join" style={{ marginLeft: '10px' }}>회원가입</Link>
                        </Box>

                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
};
export default FindId;