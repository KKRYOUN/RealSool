RealSool : 찐술
===============

## 개요
    1. commit project의 보완점을 극복해보고자 만든 프로젝트
    2. 좀 더 게시판스럽게 만드는 것이 방향성
    3. Front는 React를 사용하며 Design은 Mui
    4. Back은 SpringBoot or Intellij 사용하고 Design Patten은 EDD

===============
## MUI 관련 설정 코드 
```
index.js

import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider as MUIThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles';
import palette from './palette';
import shadows from './shadows';
import typography from './typography';
import GlobalStyles from './globalstyles';
import customShadows from './customShadows';
import { koKR } from '@mui/material/locale';

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

// MUI 테마 설정 컴포넌트
export default function ThemeProvider({ children }) {
  const themeOptions = useMemo(
    () => ({
      palette,
      shape: { borderRadius: 6 },
      typography,
      shadows: shadows(),
      customShadows: customShadows(),
      koKR: koKR,
    }),
    []
  );

  const theme = createTheme(themeOptions);
  // theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}

```
