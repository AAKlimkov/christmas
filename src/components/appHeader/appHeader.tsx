import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './appHeader.css';

const AppHeader = function ({ count }: { count: number }): JSX.Element {
  return (
    <header className="header">
      <div className="header-container">
        <nav className="nav-bar">
          <Link to="/" className="logo">
            {' '}
          </Link>
          <Link to="/toy" className="switch-main-page active-link">
            {' '}
            игрушки
          </Link>

        </nav>
        <Outlet />
        <div className="header-controls">
          {/* <input type="search" className="search" autoComplete="off" /> */}
          <div className="select">
            <span>{count}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
