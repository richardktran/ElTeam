import React, { Children } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Sidebar from '../Sidebar';
import { ROLE_TEACHER } from '../../utils/constant';
import CourseSidebar from '../Sidebar/CourseSidebar';

const CustomerLayout = ({ children }) => {
  return (
    <>
      {/* <Sidebar /> */}
      <Sidebar />
      <div className="nk-wrap">
        <Header />
        <div className="nk-content">
          {children}
        </div>

      </div>
    </>
  );
};

export default CustomerLayout;
