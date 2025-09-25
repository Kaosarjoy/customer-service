import React from 'react';
import ButtonImg from '../../assets/Vector (1).png'

const Navbar = () => {
    return (
<div className="navbar bg-base-100 shadow-sm px-4">
  {/* Navbar Start */}
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
        <li><a>Home</a></li>
      <li><a>FAQ</a></li>
      <li><a>Changelog</a></li>
      <li><a>Blog</a></li>
      <li><a>Download</a></li>
      <li><a>Contact</a></li>
      </ul>
    </div>
    <h1 className="ml-2 font-bold text-lg">CS — Ticket System</h1>
  </div>

  {/* Navbar End */}
  <div className="navbar-end flex items-center gap-3">
    <ul className="menu menu-horizontal px-1 hidden lg:flex gap-2">
      <li><a>Home</a></li>
      <li><a>FAQ</a></li>
      <li><a>Changelog</a></li>
      <li><a>Blog</a></li>
      <li><a>Download</a></li>
      <li><a>Contact</a></li>
    </ul>
    <button
      className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white flex items-center gap-2 hover:opacity-90 transition"
    >
      <img src={ButtonImg} alt="" className="w-5 h-5" />
      New Ticket
    </button>
  </div>
</div>

    );
};

export default Navbar;