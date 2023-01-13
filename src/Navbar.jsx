import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (<>
    <div className=" container-fluid nav-bg">
      <div className="row">
        <div className="col-10 mx-auto">
          <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid py-1">
              <NavLink to='/' className='navbar-brand'>
                Yoichi Isagi</NavLink>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink aria-current="page" to='/'
                      className={({ isActive }) => { return isActive ? 'menu-active nav-link' : 'nav-link'; }}>
                      Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to='/service'
                      className={({ isActive }) => { return isActive ? 'menu-active nav-link' : 'nav-link'; }}>
                      Service</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to='/about'
                      className={({ isActive }) => { return isActive ? 'menu-active nav-link' : 'nav-link'; }}>
                      About</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to='/contact'
                      className={({ isActive }) => { return isActive ? 'menu-active nav-link' : 'nav-link'; }}>
                      Contact</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </>);
}

export default Navbar;