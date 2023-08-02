import React from 'react';
import logo from '../assets/images/logo.png'


const MenuBar = () => {
  return (
  <div className='main'>
    <nav>
      <div className='menubar'>
        <img className='logo' src={logo}/>
      </div>
    </nav>
  </div>
  );
};

export default MenuBar;