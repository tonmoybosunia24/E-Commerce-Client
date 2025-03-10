import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeaderTop from '../../Shared/HeaderTop/HeaderTop';
import Header from '../../Shared/Header/Header';
import Navbar from '../../Shared/Navbar/Navbar';
import Banner from '../Banner/Banner';
import Shipping from '../Shipping/Shipping';

const Home = () => {
       return (
              <div>
                     <Helmet><title>E-Commerce | Home</title></Helmet>
                     <HeaderTop></HeaderTop>
                     <Header></Header>
                     <Navbar></Navbar>
                     <Banner></Banner>
                     <Shipping></Shipping>
              </div>
       );
};

export default Home;