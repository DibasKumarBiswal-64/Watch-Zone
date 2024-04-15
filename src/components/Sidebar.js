import React from 'react'
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if(!isMenuOpen) return null;
  return (
    <div className="p-5 shadow-lg w-36">
        <ul>
        <li><Link to="/">Home</Link></li>
        <li>Shorts</li>
        <li>Subscription</li>
      </ul>
      <h1 className='font-bold'>Subcriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className='font-bold'>Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
