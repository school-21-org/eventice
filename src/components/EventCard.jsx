import React from 'react';

export const EventCard = ({ name, time, date, description }) => (
  <div className="font-bellota select-none border border-black rounded-xl xl:w-2/5 py-2 px-4">
    { !name && <p className="mb-0 pt-5 text-center text-2xl">Выберите событие на календаре</p> }
    { name && <>
        <h2 className="text-center border-b border-black font-bold text-3xl">{name}</h2>
        <p className="mb-0 text-right text-2xl">{time}</p>
        <p className="mb-0 text-right text-2xl">{date}</p>
        <p className="mb-0 text-justify pt-12 px-8">{description}</p>
      </>
    }
  </div>
);