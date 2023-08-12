import React from 'react';
import './Nav.css';

const Nav = () => {
  return (
    // {/* الحدمة العسكرية */}
    <nav className="Nav flex justify-between bb b--white-10 bg-black-90">
      <a
        className="link white-70 hover-white no-underline flex items-center pl3"
        href="#"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/2614/2614615.png"
          className="nav-logo dib w2 h2 br-100"
          alt="Site Name"
        />
        <h1 className="nav-title f3 ml3">الخدمة العسكرية</h1>
      </a>
      <div className="flex-grow pa3 flex items-center">
        <p
          className="f6 link dib white dim mr3 mr4-ns pointer"
          href="#"
          title="Home"
        >
          المواعيد
        </p>
        {/* <p className="f6 link dib white dim mr3 mr4-ns pointer" href="#" title="Home">
          الاجازات
        </p> */}
      </div>
    </nav>
  );
};

export default Nav;
