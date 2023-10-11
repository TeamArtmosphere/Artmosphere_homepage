import { Box, Button, Paper, Typography, useMediaQuery } from '@mui/material';
import logo from '../assets/imgs/logo_white.png';
import React from 'react';
import { theme } from '../styles/theme';

const Main = () => {
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const isTablet = useMediaQuery(theme.breakpoints.up('md'));
  const isMobile = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box
        sx={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'linear-gradient(#0B122D, #05507E, #136EA6);',
        }}
      >
        <Paper
          component={'img'}
          src={logo}
          alt='아트모스피어 로고'
          width={isDesktop ? 400 : isMobile ? 290 : 225}
          elevation={0}
          sx={{ bgcolor: 'transparent' }}
        />
        <Box sx={{ color: 'white', textAlign: 'center' }}>
          <Typography>예술은 멀리 있지 않습니다.</Typography>
          <Typography>여러분 곁에 있는 수많은 로컬 스토어.</Typography>
          <Typography>그 공간들이 품고 있는 분위기와 이야기, 그리고 추억까지.</Typography>
        </Box>
      </Box>

      <Box
        sx={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box sx={{ height: '33%' }}>
          <Typography>예술로 자리잡는 일상,</Typography>
          <Typography>아트모스피어가 만들고자 하는 내일입니다.</Typography>
        </Box>
        <Box
          sx={{
            width: '100%',
            height: '77%',
            bgcolor: '#F8FCFF',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width: '758px',
              height: '403px',
              margin: '0 auto',
            }}
          >
            <Typography>나에게 딱 맞는 공간 찾기</Typography>
            <Typography>PABLOS</Typography>
            <Box sx={{ border: '1px solid #CFE6F2', borderRadius: '20px' }}>
              <Typography>파블로스 공간선호유형 테스트</Typography>
              <Typography>
                파블로스 테스트는 Gernot Böhme의 ‘분위기이론’과 Bernd Schmitt의 전략적체험
                모듈(SEMs)을 바탕으로 만들어진 공간선호유형 테스트입니다. 아트모스피어는 파블로스
                테스트의 결과로 이용자의 목적과 분위기에 맞는 공간을 추천해줍니다.
              </Typography>
            </Box>
          </Box>
          <Button>취향분석 하러 가기</Button>
        </Box>
      </Box>

      <Box
        sx={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          p: 0,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '50%',
            background: 'linear-gradient(to right, rgb(7, 67, 108, 1), rgb(7, 67, 108, 0));',
          }}
        >
          <Typography>공간 큐레이션</Typography>
          <Typography>
            아트모스피어는 전문 필진들과 함께 로컬 스토어의 철학과 역사를 담아내고 있습니다.
            큐레이션에서 우리 주변 공간들의 이야기를 확인해보세요!
          </Typography>
          <Button>더 알아보기</Button>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50%',
            textAlign: 'center',
          }}
        >
          <Typography>로컬 브랜딩 프로젝트</Typography>
          <Typography>공존(O-Zone)</Typography>
          <Typography>
            공존(O-Zone)은 지역 청년 대상 글쓰기 및 로컬브랜딩 교육을 통해 로컬브랜딩 매니저(LBM)를
            양성하는 사업입니다. 현재 은평구, 서대문구를 중심으로 LBM 양성사업을 진행하고 있습니다.
            아트모스피어는 지역사회와 ‘공존’ 할 로컬브랜딩 매니저를 찾고 있습니다!
          </Typography>
          <Button>지원하기</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Main;
