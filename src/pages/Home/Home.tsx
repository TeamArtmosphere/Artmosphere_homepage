import { Container } from '@mui/material';
import React from 'react';
import Header from '../../components/Header';
import Main from '../../components/Main';
import Footer from '../../components/Footer';

const Home = () => {
  return (
    <Container sx={{ width: '100vw' }}>
      <Header />
      <Main />
      <Footer />
    </Container>
  );
};

export default Home;
