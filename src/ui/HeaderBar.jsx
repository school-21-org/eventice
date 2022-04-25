import React from 'react';
import { Avatar } from 'antd';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="font-comfortaa bg-violet-900 text-white rounded-b-2xl select-none flex flex-row justify-between py-4 px-6">
      <Link className="pt-1 text-white transition ease-in-out duration-200 hover:scale-125 hover:text-blue-200" to="/gallery">Gallery</Link>
      <Link className="tracking-wide font-bold pt-0.5 text-xl text-white transition ease-in-out duration-200 hover:scale-125 hover:text-blue-200" to="/about">Eventice</Link>
      <Avatar />
    </header>
  );
}
