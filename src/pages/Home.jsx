import React, { useState } from 'react';
import { Calendar } from 'antd';
import { EventCard } from '../components/EventCard';

const serverData = [
  {
    date: '2022-04-11',
    time: '4:20',
    name: 'Mafia',
    description: 'LORA IPSA',
  },
  {
    date: '2022-05-14',
    time: '4:20',
    name: 'Mafia',
    description: 'LORA IPSAAAAAAAAAAAAAAAA',
  },
];

const showEventCard = (value, setEvent) => {
  console.log('value, setEvent', value, setEvent);
  const dataFromServer = serverData;
  const DateValue = value.format('yyyy-MM-DD');
  const listData = dataFromServer.filter((item) => item.date === DateValue);
  setEvent(listData);
}

const getListData = (value) => {
  const dataFromServer = serverData;
  const DateValue = value.format('yyyy-MM-DD');
  return dataFromServer.filter((item) => item.date === DateValue);
}

const getEventData = (value) => {
  const listData = getListData(value);

  return (
    <ul>
      {listData.map((item) => (
        <li key={item.date}>
          <p className="mb-0">{item.name}</p>
        </li>
      ))}
    </ul>
  );
}

export const Home = () => {
  const [selectedEvents, setSelectedEvents] = useState([]);

  return <>
    <Calendar onSelect={(e) => showEventCard(e, setSelectedEvents)} dateCellRender={getEventData} className="xl:w-3/5 font-bellota" />
    <EventCard name={selectedEvents[0]?.name} date={selectedEvents[0]?.date} time={selectedEvents[0]?.time} description={selectedEvents[0]?.description} />
  </>
};