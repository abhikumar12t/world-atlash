import React, { useEffect } from 'react'; 
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
const Header = () => {
       const [show, setShow] = useState(false);

       const handleButtonToggle = () => {
         return setShow(!show);
       };

        useEffect(() => {
           const listItems = document.querySelectorAll('li');
          listItems.forEach(li => {
          li.addEventListener('click', () => setShow(false));
       })
        }, [])
  return (
    <>
    

    <header>
      <div className="container">
        <div className="grid navbar-grid">
          <div className="Logo">
            <NavLink to="/">
              <h1>WorldAtlas</h1>
            </NavLink>
          </div>

          <nav className={show ? "menu-mobile" : "menu-web"}>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/country">Country</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </nav>

          <div className="ham-menu">
            <button onClick={handleButtonToggle}>
              <GiHamburgerMenu />
            </button>
          </div>
        </div>
      </div>
    </header>
      </>
  )
}

export default Header