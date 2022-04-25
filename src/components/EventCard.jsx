import React from 'react';
import { Col, Row } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

export const EventCard = ({ name, time, date, description, selected, count, toPrev, toNext }) => (
  <div className="font-bellota select-none border border-black rounded-xl xl:w-2/5 py-2 px-4">
    { !name && <p className="mb-0 pt-5 text-center text-2xl">Выберите событие на календаре</p> }
    { name && <div className="relative h-full">
        <h2 className="text-center border-b border-black font-bold text-3xl">{name}</h2>
        <p className="mb-0 text-right text-2xl">{time}</p>
        <p className="mb-0 text-right text-2xl">{date}</p>
        <p className="mb-0 text-justify pt-12 px-8">{description}</p>
        <Row className="absolute bottom-0 w-full" justify="space-between">
          <Col><LeftOutlined onClick={toPrev} /></Col>
          <Col span={20} className="text-center">{selected + 1}/{count}</Col>
          <Col><RightOutlined onClick={toNext} /></Col>
        </Row>
      </div>
    }
  </div>
);