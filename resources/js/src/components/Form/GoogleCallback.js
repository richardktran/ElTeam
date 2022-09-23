import { Button, Form, Input } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import authApi from '../../api/authApi';
import { HTTP_OK, ROLE_ADMIN } from '../../utils/constant';

const GoogleCallback = () => {

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        fetchGoogleCallback(location.search);
    })

    const fetchGoogleCallback = async (searchParam) => {
        let result = await authApi.googleCallback(searchParam);
        if (result.status === HTTP_OK) {
            const data = result.data;
            await saveUserData(data.data);
        } else {
            navigate('/login?status=error');
        }
    }

    const saveUserData = async (data) => {
        const role = data.user.role;
        const token = data.token;
        localStorage.setItem('userData', JSON.stringify(data.user));
        localStorage.setItem('token', token);
        localStorage.setItem('role', role);

        if (role === ROLE_ADMIN) {
            navigate('/admin');
        } else {
            navigate('/courses');
        }
    }


    return (
        <></>
    )
}

export default GoogleCallback
