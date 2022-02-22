import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './Navbar.css';
import logo from '../../assets/logo.svg'

const Navbar = () => {

  const Menu = () => (
    <>
      <p><a href='#home'>Home</a></p>
      <p><a href='#crypto'>What is Crypto</a></p>
      <p><a href='#possibility'>Open AI</a></p>
      <p><a href='#features'>Case Studies</a></p>
      <p><a href='#blog'>Library</a></p>
    </>
  );
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='cy__navbar'>
      <div className='cy__navbar-links'>
        <div className='cy__navbar-links_logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='cy__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='cy__navbar-sign'>
        <p><a href='#signin'>Sign in</a></p>
        <button type='button'>Sign up</button>
      </div>
      <div className='cy__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className='cy__navbar-menu_container scale-up-center'>
            <div className='cy__navbar-menu_container-links'>
              <Menu />
            </div>
            <div className='cy__navbar-menu_container-links-sign'>
              <p><a href='#signin'>Sign in</a></p>
              <button type='button'>Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
};

export default Navbar;
