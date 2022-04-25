import React, { useState } from 'react';
import { Image, Row, Col } from 'antd';

const EventsMockup = [
  {
    id: 'event-id-1',
    title: 'First event name here',
    date: '2022-04-26',
    previewPhoto: 'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp',
    photos: [
      'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp',
      'https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp',
      'https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp',
    ]
  },{
    id: 'event-id-2',
    title: 'Second event name here',
    date: '2022-05-01',
    previewPhoto: 'https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp',
    photos: [
      'https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp',
      'https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp',
    ]
  }
]

const Event = ({ id, title, date, previewPhoto, photos }) => {
  const [visible, setVisible] = useState(false);
  const Photos = photos.map((photo, index) => <Image key={index} src={photo} />);
  return (
    <Col key={id}>
      <div>
        <span className='font-bold'>{title}</span>
        <div className='float-right'>{date}</div>
      </div>
      <Image
        preview={{ visible: false }}
        width={300}
        height={450}
        src={previewPhoto}
        onClick={() => setVisible(true)}
      />
      <div style={{ display: 'none' }}>
        <Image.PreviewGroup preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }}>
          {Photos}
        </Image.PreviewGroup>
      </div>
    </Col>
  );
}

export const Gallery = () => {
  const Events = EventsMockup.map(Event);
  return (
    <Row gutter={16}>
      {Events}
    </Row>
  );
}
