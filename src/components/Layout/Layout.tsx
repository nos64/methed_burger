import Header from '../Header';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
