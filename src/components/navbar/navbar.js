import {
  Chat, Notifications, Person, Search,
} from '@mui/icons-material';
import React from 'react';
import './navbar.css';

export default function navbar() {
  return (
    <div className="navbarContainer d-flex justify-content-between align-items-center px-4 py-2">
      <div className="navbarLeft">
        <span className="logo">TufaOfficial</span>
      </div>
      <div className="navbarCenter">
        <div className="searchbar">
          <Search className="searchbarIcon mx-2" />
          <input placeholder="Search for friends" className="searchInput border rounded" />
        </div>
      </div>
      <div className="navbarRight d-flex align-items-center">
        <div className="navbarLinks d-flex mx-2">
          <span className="navbarLink mx-1">Home</span>
          <span className="navbarLink mx-1">Timeline</span>
        </div>
        <div className="navbarIcons d-flex align-items-center mx-2">
          <div className="navbarIconItem mx-3">
            <Person />
            <span className="navbarIconBage">1</span>
          </div>
          <div className="navbarIconItem mx-3">
            <Chat />
            <span className="navbarIconBage">2</span>
          </div>
          <div className="navbarIconItem mx-3">
            <Notifications />
            <span className="navbarIconBage">1</span>
          </div>
        </div>
        <img src="/assets/1.jpg" alt="" className="navbarImg mx-4" />
      </div>
    </div>
  );
}
