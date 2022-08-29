import React, { useState } from 'react'
import { message } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLoadingContext } from 'react-router-loading';
import LoginForm from '../../components/Form/LoginForm'
import AuthSlider from '../../components/Slider/AuthSlider'

function LoginPage() {
    const loadingContext = useLoadingContext();
    const [loadingButton, setLoadingButton] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const onFinish = (values) => {
        message.success(`Login successfully ${values.email} and password = ${values.password}`);
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
