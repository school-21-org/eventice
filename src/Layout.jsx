import React from 'react';
import { Header } from './components/Header';

export const Layout = ({ children }) => (
  <div className="h-screen max-w-7xl mx-auto flex flex-col">
    <Header />
    <main className="py-8 flex flex-col xl:flex-row gap-4">
      { children }
    </main>
    <div>
      <p className="mb-0">School news</p>
    </div>
  </div>
);