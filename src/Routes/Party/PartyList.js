import React from 'react';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const PartyList = () => {
    // 예시 데이터
    const rows = [
        { num: 1, title: '경륜 작업', id : 'ryun', author : 'MANAGER', date : '2024-01-02', delete: '삭제' },
        { num: 2, title: '진솔 작업', id : 'sole', author : 'USER', date : '2024-02-03', delete: '삭제' },
        { num: 3, title: '현제 작업', id : 'hyun', author : 'USER', date : '2024-03-04', delete: '삭제' },
        { num: 4, title: '사라 작업', id : 'sara', author : 'ADMIN', date : '2024-04-05', delete: '삭제' },
    ];

    return (
        <Container maxWidth="md">
            <Typography variant="h4" component="h1" gutterBottom>
                한잔회 리스트 페이지
            </Typography>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>게시글 번호</TableCell>
                            <TableCell>게시글 제목</TableCell>
                            <TableCell>작성자 아이디</TableCell>
                            <TableCell>작성자 권한</TableCell>
                            <TableCell>게시 일자</TableCell>
                            <TableCell>게시글 삭제</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.num}>
                                <TableCell component="th" scope="row">
                                    {row.num}
                                </TableCell>
                                <TableCell>{row.title}</TableCell>
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{row.author}</TableCell>
                                <TableCell>{row.date}</TableCell>
                                <TableCell>{row.delete}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default PartyList;
