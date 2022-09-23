import React, { Children } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import { ROLE_TEACHER } from '../../utils/constant';

const AdminLayout = ({ children }) => {
    return (
        <>
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

export default AdminLayout;
