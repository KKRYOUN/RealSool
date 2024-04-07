import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Button } from '@mui/material';

const SoolNav = () => {

    const location = useLocation();
    const [category, setCategory] = useState(false);
    const [list, setList] = useState(false);

    return (
        <AppBar position="static" style={{ margin: '-33px auto 0', backgroundColor: '#a4134b', maxWidth: '75%', alignItems: 'center' }}>
            <Toolbar>

                {/* 네비게이션 아이템 */}
                <div style={{ fontSize: '18px' }}>
                    {/* 현재 경로가 /category일 때만 해당 링크가 활성화되도록 설정 */}
                    {location.pathname === '/sool' && (
                        <Link to="/category" style={{ textDecoration: 'none', color: 'white' }}>
                            전통주 카테고리 목록
                        </Link>
                    )}
                </div>

                <div style={{ fontSize: '18px' }}>
                    {/* 현재 경로가 /soolList일 때만 해당 링크가 활성화되도록 설정 */}
                    {location.pathname === '/sool/soolList' && (
                        <div to="/soolList" style={{ textDecoration: 'none', color: 'white' }}>
                            전통주 리스트 목록
                        </div>
                    )}
                </div>

                <div style={{ fontSize: '18px' }}>
                    {/* 현재 경로가 /soolList일 때만 해당 링크가 활성화되도록 설정 */}
                    {location.pathname === '/sool/soolView' && (
                        <div to="/soolList" style={{ textDecoration: 'none', color: 'white' }}>
                            전통주 상세보기
                        </div>
                    )}
                </div>

            </Toolbar>
        </AppBar>
    );
};

export default SoolNav;
