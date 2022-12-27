import React from 'react';
import { Route, Routes } from 'react-router-dom';

import MainPage from '../../pages/MainPage';
import NotFoundPage from '../../pages/NotFoundPage';
import Layout from '../../components/Layout';

import { ROUTES } from '../../common/routes';

function App() {
  return (
    <Routes>
      <Route path={ROUTES.MAIN} element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path={ROUTES.NOTFOUND} element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
