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
    date: '2022-04-11',
    time: '4:21',
    name: 'Aifam',
    description: 'IPSA LORA',
  },
  {
    date: '2022-05-14',
    time: '4:20',
    name: 'Mafia',
    description: 'LORA IPSAAAAAAAAAAAAAAAA',
  },
];

const showEventCard = (value, setEvent) => {
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
      {listData.map((item, index) => (
        <li key={item.date + index}>
          <p className="mb-0">{item.name}</p>
        </li>
      ))}
    </ul>
  );
}

export const Home = () => {
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [selectedEventIndex, setSelectedEventIndex] = useState(0);

  const handleCalendarSelection = (e) => {
    showEventCard(e, setSelectedEvents);
    setSelectedEventIndex(0);
  }
  const toPrev = () => {setSelectedEventIndex(prevIndex => (prevIndex > 0) ? prevIndex - 1 : 0)};
  const toNext = () => {setSelectedEventIndex(prevIndex => (prevIndex < selectedEvents.length - 1) ? prevIndex + 1 : prevIndex)};

  return <>
    <Calendar className="xl:w-3/5 font-bellota p-4 border border-violet-900 rounded-xl" onSelect={handleCalendarSelection} dateCellRender={getEventData} />
    <EventCard name={selectedEvents[selectedEventIndex]?.name}
               date={selectedEvents[selectedEventIndex]?.date}
               time={selectedEvents[selectedEventIndex]?.time}
               description={selectedEvents[selectedEventIndex]?.description}
               selected={selectedEventIndex}
               count={selectedEvents.length}
               toPrev={toPrev}
               toNext={toNext}
    />
  </>
};