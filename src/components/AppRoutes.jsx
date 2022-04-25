import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Layout } from '../Layout';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Gallery } from '../pages/Gallery';

export const AppRoutes = () => (
  <Layout>
    <Routes>
      <Route exact path="/"  element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
  </Layout>
);
