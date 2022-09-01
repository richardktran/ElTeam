import React, { useState } from 'react'
import { message } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLoadingContext } from 'react-router-loading';
import { loginApi } from '../../api';
import LoginForm from '../../components/Form/LoginForm'
import AuthSlider from '../../components/Slider/AuthSlider'
import { axiosInstance } from '../../api/axiosInstance';

function LoginPage() {
    const loadingContext = useLoadingContext();
    const [loadingButton, setLoadingButton] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const onFinish = async (values) => {
        // await axiosInstance.get('/sanctum/csrf-cookie');
        try {
            const response = await loginApi.login({
                email: values.email,
                password: values.password
            });
            const status = response.status;
            const data = response.data;

            if (status === 200) {
                const role = data.data.user.role;
                const token = data.data.token;
                localStorage.setItem('userData', JSON.stringify(data.data));
                localStorage.setItem('token', token);
                localStorage.setItem('role', role);
                setLoadingButton(false);
                if (role === 'admin') {
                    console.log('Redirect to admin')
                } else if (role === 'ROLE_USER' || role === 'ROLE_ADMIN') {
                    console.log('Redirect to home');
                }
                message.success('Login successfully');
            } else {
                message.error('Login failed');
            }
        } catch (e) {
            message.error('Email and password is invalid!!!' + e.message);
        }
    };

    const onFinishFailed = () => {
        console.log('something went wrong');
    };

    return (
        <div className="nk-content ">
            <div className="nk-split nk-split-page nk-split-md">
                <LoginForm
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    loadingButton={loadingButton}
                />
                <AuthSlider />
            </div>{/* .nk-split */}
        </div>
    )
}

export default LoginPage
