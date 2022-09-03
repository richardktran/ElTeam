import React, { useEffect, useState } from 'react'
import { message } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLoadingContext } from 'react-router-loading';
import { authApi } from '../../api';
import LoginForm from '../../components/Form/LoginForm'
import AuthSlider from '../../components/Slider/AuthSlider'
import { HTTP_OK, ROLE_ADMIN, ROLE_TEACHER } from '../../utils/constant';

function LoginPage() {
    const [loadingButton, setLoadingButton] = useState(false);
    const [loginFailed, setLoginFailed] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('token')) {
            navigate('/');
        }
    })

    const onFinish = async (values) => {
        // await axiosInstance.get('/sanctum/csrf-cookie');
        try {
            const response = await authApi.login({
                email: values.email,
                password: values.password
            });
            const status = response.status;
            const data = response.data;

            if (status !== HTTP_OK) {
                setLoginFailed(true);
                return;
            }

            const role = data.data.user.role;
            const token = data.data.token;
            localStorage.setItem('userData', JSON.stringify(data.data.user));
            localStorage.setItem('token', token);
            localStorage.setItem('role', role);

            if (role === ROLE_TEACHER) {
                navigate('/teacher');
            } else if (role === ROLE_ADMIN) {
                navigate('/admin');
            } else {
                navigate('/');
            }
        } catch (e) {
            setLoginFailed(true);
        }
    };

    const onFinishFailed = () => {
        setLoginFailed(true);
    };

    return (
        <div className="nk-content ">
            <div className="nk-split nk-split-page nk-split-md">
                <LoginForm
                    onFinish={onFinish}
                    loginFailed={loginFailed}
                    onFinishFailed={onFinishFailed}
                    loadingButton={loadingButton}
                />
                <AuthSlider />
            </div>{/* .nk-split */}
        </div>
    )
}

export default LoginPage
