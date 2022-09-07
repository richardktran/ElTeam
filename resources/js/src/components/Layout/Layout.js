import React from 'react';
import { Navigate } from 'react-router-dom';
import { ROLE_TEACHER } from '../../utils/constant';
import TeacherLayout from './TeacherLayout';

const Layout = ({ children }) => {
    const role = window.localStorage.getItem('role');

    return (
        <>
            {role === ROLE_TEACHER ? <TeacherLayout>{children}</TeacherLayout> : <Navigate to="/" replace />}
        </>
    );
};

export default Layout;
