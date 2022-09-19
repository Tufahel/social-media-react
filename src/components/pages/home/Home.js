import React from 'react';
import Feed from '../../feed/Feed';
import Navbar from '../../navbar/navbar';
import Rightbar from '../../rightbar/Rightbar';
import Sidebar from '../../sidebar/Sidebar';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="d-flex justify-content-between px-2">
        <Rightbar />
        <Feed />
        <Sidebar />
      </div>
    </>
  );
}
