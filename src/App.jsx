import React from 'react';
import { Calendar } from 'antd';
import EventCard from './ui/EventCard';
import Header from './ui/HeaderBar';

function App() {
  return (
    <div className="h-screen max-w-7xl mx-auto flex flex-col">
      <Header />
      <main className="py-8 flex flex-col xl:flex-row gap-4">
        <Calendar className="xl:w-2/5 font-bellota" />
        <EventCard />
      </main>
      <div>
        <p className="mb-0">School news</p>
      </div>
    </div>
  );
}

export default App;
