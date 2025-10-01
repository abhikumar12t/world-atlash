import React from 'react'
import footerContact from '../Api/FooterApi.json'
import { NavLink } from "react-router-dom";
import { MdPlace } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";

function Footer() {


    const footerIcon = {
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />,
  };
      
  return (
    <>
    <footer className="footer-section">
      <div className="container grid grid-three-cols">
        {footerContact.map((curData, index) => {
          const { icon, title, details } = curData;
          return (
            <div className="footer-contact" key={index}>
              <div className="icon">{footerIcon[icon]}</div>
              <div className="footer-contact-text">
                <p>{title}</p>
                <p>{details}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="copyright-area">
        <div className="container">
              <p>
                Copyright &copy;{new Date().getFullYear()} All Right Reserved
                  <span style={{color: "#3a4ed5", marginLeft: '20px'}}>Abhishek Kumar</span>
              </p>
        </div>
      </div>
    </footer>

        </>
  )
}

export default Footer