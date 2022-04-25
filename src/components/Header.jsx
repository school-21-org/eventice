import React from 'react';
import { Avatar } from 'antd';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="font-comfortaa bg-violet-900 text-white rounded-b-2xl select-none flex flex-row justify-between py-4 px-6">
      <Link className="pt-1 text-white transition ease-in-out duration-200 hover:scale-125 hover:text-blue-200 px-6" to="/gallery">Gallery</Link>
      <Link className="pt-1 text-white transition ease-in-out duration-200 hover:scale-125 hover:text-blue-200 px-6" to="/about">About</Link>
      <div className="grow text-center pt-0.5 uppercase transition ease-in-out duration-200 hover:scale-125 hover:text-blue-200">
        <Link className="tracking-wide font-bold text-xl text-white px-6" to="/">Eventice</Link>
      </div>
      <Link className="pt-1 text-white transition ease-in-out duration-200 hover:scale-125 hover:text-blue-200 px-10" to="/about">About</Link>
      <Avatar className="transition ease-in-out duration-200 hover:scale-125 hover:text-blue-200" />
    </header>
  );
}
