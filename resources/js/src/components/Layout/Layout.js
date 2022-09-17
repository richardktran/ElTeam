import React from 'react';
import { Navigate } from 'react-router-dom';
import { ROLE_TEACHER } from '../../utils/constant';
import CustomerLayout from './CustomerLayout';

const Layout = ({ children }) => {
  const role = window.localStorage.getItem('role');

  return (
    <>
      {role === ROLE_TEACHER ? <CustomerLayout>{children}</CustomerLayout> : <Navigate to="/" replace />}
    </>
  );
};

export default Layout;
