import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import { ROLE_TEACHER } from '../../utils/constant';

const TeacherLayout = () => {
    const role = window.localStorage.getItem('role');

    if (role !== ROLE_TEACHER) {
        return <Navigate to="/" replace />;
    }
    return (
        <>
            <Sidebar />
            <div className="nk-wrap">
                <Header />
                <div className="nk-content">
                    <Outlet />
                </div>

            </div>
        </>
    );
};

export default TeacherLayout;
