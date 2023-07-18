import React from 'react';
import logo from '../assets/images/logo.png'


const MenuBar = () => {
  return (
  <div className='main'>
    <nav>
      <div className='menubar'>
        <img className='logo' src={logo}/>
        <h1 className='menuHeader'>Trip Planner</h1>
      </div>
    </nav>
  </div>
  );
};

export default MenuBar;