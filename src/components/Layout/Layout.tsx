import React from 'react';

import { Outlet } from 'react-router-dom';
import useAppPending from 'hooks/useAppPending';

import Header from '../Header';
import Footer from '../Footer';
import Loader from 'components/Loader/Loader';

const Layout = () => {
  const isPending = useAppPending();
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      {isPending && <Loader />}
    </>
  );
};

export default Layout;
