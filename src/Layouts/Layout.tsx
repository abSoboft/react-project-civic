import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./Layout.css";

const Layout = (props: any) => {
  console.log("props: ", props);
  const navigate = useNavigate();

  const handleClick = (route: string) => {
    navigate(route)
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">MyWebsite</div>
        <ul className="navbar-links">
          <li>
            {/* <a href="#home">Home</a> */}
            <span onClick={() => handleClick('home')}>Home</span>
          </li>
          <li>
            {/* <a href="#about">About</a> */}
            <span onClick={() => handleClick('contact/1/1?name=Test&version=6')}>Contact</span>
          </li>
          {/* <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li> */}
        </ul>
      </nav>
      <Outlet />
      <footer className="footer">footer</footer>
    </>
  );
};

export default Layout;
