import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { DocToESD, EsdToDocs, Home, NotFound, VerifyEDS } from '@pages/index';

const RouteManager = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Home />} />
      <Route path={'/doc-to-esd'} element={<DocToESD />} />
      <Route path={'/esd-to-doc'} element={<EsdToDocs />} />
      <Route path={'/verify-eds'} element={<VerifyEDS />} />
      <Route path={'*'} element={<NotFound />} />
    </Routes>
  );
};

export default RouteManager;
