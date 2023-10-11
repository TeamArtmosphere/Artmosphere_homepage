import { Box, Button, Paper, Typography, useMediaQuery } from '@mui/material';
import logo from '../assets/imgs/vertical_logo_white.png';
import naver from '../assets/imgs/naver.png';
import insta from '../assets/imgs/insta.png';
import { theme } from '../styles/theme';

const Footer = () => {
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const isTablet = useMediaQuery(theme.breakpoints.up('md'));
  const isMobile = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Box sx={{ width: '100%', height: '453px' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '159px',
          bgcolor: '#07436D',
          color: 'white',
        }}
      >
        <Typography variant='h5' fontWeight={700}>
          예술의 모습은, 바로 이곳에서부터
        </Typography>
        <Paper
          component={'img'}
          src={logo}
          alt='아트모스피어 흰색 로고'
          height={isDesktop ? 26 : isMobile ? 22 : 12}
          elevation={0}
          sx={{ bgcolor: 'transparent' }}
        />
      </Box>
      <Box sx={{ display: 'flex', p: '100px 300px', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <small>(주) 예자일</small>

          <small>대표 : 황준선 사업자 등록번호 : 110-88-65167 이메일 artmos0605@gmail.com</small>
          <small>주소 : 서울특별시 은평구 연서로27길 22, 지하1층 E-90호 (갈현동)</small>

          <small>Copyright ⓒYeagile Corp. All rights reserved</small>
        </Box>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            sx={{
              width: '210px',
              height: '64px',
              border: '1px solid #CFE6F2',
              borderRadius: '16px',
              color: '#000',
              fontSize: '20px',
            }}
          >
            <img src={naver} alt='네이버 로고' className='footer-btn-img' />
            네이버 바로가기
          </Button>
          <Button
            sx={{
              width: '210px',
              height: '64px',
              border: '1px solid #CFE6F2',
              borderRadius: '16px',
              color: '#000',
              fontSize: '20px',
            }}
          >
            <img src={insta} alt='인스타그램 로고' className='footer-btn-img' />
            인스타 바로가기
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
