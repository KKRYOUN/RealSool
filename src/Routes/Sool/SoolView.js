import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import SoolNav from './SoolNav';

import styled from 'styled-components';

import './SoolView.css'

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows =
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0)
// createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
// createData('Eclair', 262, 16.0, 24, 6.0),
// createData('Cupcake', 305, 3.7, 67, 4.3),
// createData('Gingerbread', 356, 16.0, 49, 3.9),


const SoolView = () => {

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


    return (
        <div className="flex">
            <BackImage />
            <div className="product-view">
                <dl>
                    <SoolNav />
                    <div className="detail">
                        <div className="thumb">
                            <div className="img">
                                <span>
                                    <br /><br />
                                    <img src={"https://thesool.com/common/imageView.do?targetId=PR00001227&targetNm=PRODUCT"} style={{ height: 410 }} />
                                </span>
                            </div>
                        </div>
                        <div className="info">
                            <div className="title" style={{ textAlign: 'center', display: 'flex' }}>
                                <span style={{ display: 'block', margin: '0 auto' }}>제품 소개</span>
                                <span style={{ display: 'block', margin: '0 auto' }}>양조장</span>
                            </div>

                            <br />
                            <div style={{ display: 'flex' }}>
                                <TableContainer component={Paper} sx={{}}>
                                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                        <TableBody>
                                            <TableRow>
                                                <TableCell component="th" scope="row">제품명</TableCell>
                                                <TableCell align="left">{rows.name}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell component="th" scope="row">종류</TableCell>
                                                <TableCell align="left">{rows.calories}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell component="th" scope="row">원재료</TableCell>
                                                <TableCell align="left">{rows.fat}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell component="th" scope="row">도수</TableCell>
                                                <TableCell align="left">{rows.carbs}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell component="th" scope="row">용량</TableCell>
                                                <TableCell align="left">{rows.protein}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell component="th" scope="row">수상내용</TableCell>
                                                <TableCell align="left">{rows.fat}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell component="th" scope="row">기타</TableCell>
                                                <TableCell align="left">{rows.calories}</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>

                                <TableContainer component={Paper} sx={{}}>
                                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                        <TableBody>
                                            <TableRow>
                                                <TableCell component="th" scope="row">양조장명</TableCell>
                                                <TableCell align="left"
                                                    sx={{ paddingLeft: '200px' }}>영덕주조</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell component="th" scope="row">주소</TableCell>
                                                <TableCell align="left"
                                                    sx={{ paddingLeft: '200px' }}>경북 영덕군 강구면 소월1길 16-10</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell component="th" scope="row">홈페이지</TableCell>
                                                <TableCell align="left"
                                                    sx={{ paddingLeft: '200px' }}>a링크</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell component="th" scope="row">문의</TableCell>
                                                <TableCell align="left"
                                                    sx={{ paddingLeft: '200px' }}>01031613933</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>
                        </div>
                    </div>
                    <dd className="intro">
                        <div className="title">
                            <span>제품 소개</span>
                        </div>
                        <div className="text">
                            블링블링 노을별은 영덕 바다의 은하수를 담아낸 우주 술로,

                            포도의 향과 맛이 조화롭게 어우러져 달콤함을 선사합니다!

                            아름다운 비주얼을 가지고 있는 은하수를 담은 이 전통주는 오로라를 연상시키며,

                            15%의 알코올 도수와 다양한 블렌딩 옵션으로 다채로운 즐거움을 제공합니다!
                        </div>
                    </dd>
                    <dd className="food">
                        <div className="title">
                            <span>어울리는 음식</span>
                        </div>
                        <div className="text">
                            파스타,피자,샐러드..
                        </div>
                    </dd>
                </dl>
            </div>
        </div>
    )
}

export default SoolView