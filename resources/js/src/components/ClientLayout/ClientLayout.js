import React from 'react';
import { Navigate } from 'react-router-dom';

const ClientLayout = () => {
    const role = window.localStorage.getItem('role');

    if (role !== 'ROLE_USER') {
        return <Navigate to="/" replace />;
    }
    return (
        <>
        </>
    );
};

export default ClientLayout;
