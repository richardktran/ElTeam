import React from 'react';
import { Navigate } from 'react-router-dom';
import { ROLE_ADMIN, ROLE_TEACHER } from '../../utils/constant';
import CustomerLayout from './CustomerLayout';

const Layout = ({ children }) => {
  const role = window.localStorage.getItem('role');

  return (
    <>
      {role && role !== ROLE_ADMIN ? <CustomerLayout>{children}</CustomerLayout> : <Navigate to="/" replace />}
    </>
  );
};

export default Layout;
