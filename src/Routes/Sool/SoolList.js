import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import Paper from "@mui/material/Paper";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { purple } from "@mui/material/colors";

import styled from 'styled-components';

import SoolNav from "./SoolNav";

function createData(name, dsa, maths, dbms, networking) {
    return { name, dsa, maths, dbms, networking };
}

const rows = [
    createData("샴페인", '증류주', 17, '강원', '도수가 높은 샴페인이다.'),
    createData("과일나라", '과일주', 13, '충청', '사과향이 난다.'),
    createData("Raman", '탁주', 79, '전라', '사과향이 난다.'),
    createData("Saini", '청주', 67, '경기', '맛있다.'),
    createData("Virat", '약주', 89, '서울', '사과향이 난다.'),
    createData("Rohit", '소주', 83, '인천', '사과향이 난다.'),
    createData("Smriti", '맥주', 90, '부산', '사과향이 난다.'),
    createData("Mandhana", '발효주', 12, '진도', '사과향이 난다.'),
    createData("Deepti", '혼성주', 86, '대전', '사과향이 난다.')
];

const SoolList = () => {

    const [data, setData] = useState({
        name: '',
        category: '',
        percent: '',
        loc: '',
        intro: '',
    })

    useEffect(() => {
        setData(rows);
    }, {})

    const BackImage = styled('div')({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `url(${'https://innertrip.co.kr/wp-content/uploads/2022/08/%EC%A0%84%ED%86%B5%EC%A3%BC-%ED%85%8C%EC%9D%B4%EC%8A%A4%ED%8C%85-1.png'}})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        height: '350px',
    })

    const [pg, setpg] = React.useState(0);
    const [rpg, setrpg] = React.useState(5);
    const [filters, setFilters] = React.useState({
        category: '',
        alcoholPercentage: '',
        region: ''
    });

    const handleChangePage = (event, newpage) => {
        setpg(newpage);
    };

    const handleChangeRowsPerPage = (event) => {
        setrpg(parseInt(event.target.value, 10));
        setpg(0);
    };

    const handleFilterChange = (event, property) => {
        const value = event.target.value;
        setFilters(prevFilters => ({
            ...prevFilters,
            [property]: value
        }));
    };

    const filteredRows = rows.filter(row => {
        let minRange, maxRange;
        if (filters.alcoholPercentage === '10~20') {
            minRange = 10;
            maxRange = 20;
        } else if (filters.alcoholPercentage === '20~30') {
            minRange = 20;
            maxRange = 30;
        }
        return (
            (!filters.category || row.dsa.toLowerCase() === filters.category.toLowerCase()) &&
            (!filters.alcoholPercentage || (row.maths >= minRange && row.maths < maxRange)) &&
            (!filters.region || row.dbms.toLowerCase() === filters.region.toLowerCase())
        );
    });

    return (
        <div>
            <div className='header-image'>
                <BackImage />
            </div>
            <SoolNav />
            <br />
            <Paper sx={{ minWidth: '900px', width: '70%', margin: '0 auto' }}>
                {/* <h1 style={{ textAlign: "center", color: purple[500] }}>
                    리스트 목록
                </h1> */}
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>제품 사진</TableCell>
                                <TableCell sx={{ textAlign: 'right' }}>이름</TableCell>
                                <TableCell align="right">
                                    <FormControl sx={{ m: 1, minWidth: 90, left: 10 }} size="small">
                                        <InputLabel>종류</InputLabel>
                                        <Select
                                            value={filters.category}
                                            onChange={(e) => handleFilterChange(e, 'category')}
                                        >
                                            <MenuItem value="">전체</MenuItem>
                                            <MenuItem value="증류주" sx={{ textAlign: 'center' }}>증류주</MenuItem>
                                            <MenuItem value="과일주">과일주</MenuItem>
                                            {/* 다른 종류 추가 */}
                                        </Select>
                                    </FormControl>
                                </TableCell>
                                <TableCell align="right">
                                    <FormControl sx={{ m: 1, minWidth: 90, left: 10 }} size="small">
                                        <InputLabel>도수</InputLabel>
                                        <Select
                                            value={filters.alcoholPercentage}
                                            onChange={(e) => handleFilterChange(e, 'alcoholPercentage')}
                                        >
                                            <MenuItem value="">전체</MenuItem>
                                            <MenuItem value="10~20">10~20%</MenuItem>
                                            <MenuItem value="20~30">20~30%</MenuItem>
                                            {/* 다른 도수 범위 추가 */}
                                        </Select>
                                    </FormControl>
                                </TableCell>
                                <TableCell align="right">
                                    <FormControl sx={{ m: 1, minWidth: 90, left: 10 }} size="small">
                                        <InputLabel>지역</InputLabel>
                                        <Select
                                            value={filters.region}
                                            onChange={(e) => handleFilterChange(e, 'region')}
                                        >
                                            <MenuItem value="">전체</MenuItem>
                                            <MenuItem value="강원">강원</MenuItem>
                                            <MenuItem value="충청">충청</MenuItem>
                                            {/* 다른 지역 추가 */}
                                        </Select>
                                    </FormControl>
                                </TableCell>
                                <TableCell align="right">설명</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredRows.slice(pg * rpg, pg * rpg + rpg).map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row" style={{ width: '15%' }}>
                                        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd9RNI4ovgHHGDgGAUEgdVAgXTKubGvf71mpcOtD6mmag-tNMPU_6HNDCiLmbPzeHXrU8&usqp=CAU"} />{row.name}
                                    </TableCell>
                                    <TableCell align="right" style={{ width: '15%' }} >{row.dsa}</TableCell>
                                    <TableCell align="right" style={{ width: '15%' }} >{row.dsa}</TableCell>
                                    <TableCell align="right" style={{ width: '15%' }}>{row.maths}</TableCell>
                                    <TableCell align="right" style={{ width: '15%' }}>{row.dbms}</TableCell>
                                    <TableCell align="right" style={{ width: '30%' }}>{row.networking}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={filteredRows.length}
                    rowsPerPage={rpg}
                    page={pg}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </div>
    );
}

export default SoolList;