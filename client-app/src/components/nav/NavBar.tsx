import React, { Fragment } from 'react';
import { toast } from 'materialize-css';
const NavBar = () => {
  return (
    <Fragment>
      <nav className='container grey lighten-3'>
        <div className='nav-wrapper'>
          <img
            alt=''
            src='favicon.ico'
            style={{ width: 70, position: 'absolute' }}
          />
          <a
            href='!#'
            className='brand-logo black-text'
            style={{ marginRight: 80 }}
          >
            آرتـــا
          </a>
          <ul id='nav-mobile' className='center hide-on-med-and-down'>
            <li>
              <label className='btn waves-effect waves-light'>
                شروع کنید...!
              </label>
              <a
                href='!#'
                className='btn grey waves-effect waves-light lighten-1 black-text'
              >
                ورود
              </a>
            </li>
            <li>
              <a href='!#' className='black-text'>
                سوالات متداول
              </a>
            </li>
            <li>
              <a href='!#' className='black-text'>
                مشتریان
              </a>
            </li>
            <li>
              <a href='!#' className='black-text'>
                قیمت ها
              </a>
            </li>
            <li>
              <a href='!#' className='black-text'></a>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};

export default NavBar;
