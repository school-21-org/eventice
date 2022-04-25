import React from 'react';
import { Calendar } from 'antd';
import { EventCard } from '../components/EventCard';

export const Home = () => (
  <>
    <Calendar className="xl:w-2/5 font-bellota" />
    <EventCard />
  </>
);
