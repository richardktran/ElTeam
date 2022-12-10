import { Button, Form, Input } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import authApi from '../../api/authApi';
import { HTTP_OK } from '../../utils/constant';

const LoginForm = ({ onFinish, loginFailed, onFinishFailed, loadingButton }) => {

    const [googleLoginUrl, setGoogleLoginUrl] = useState(null);

    const fetchGoogleUrl = async () => {
        let result = await authApi.googleUrl();
        if (result.status === HTTP_OK) {
            const { data } = result.data;
            setGoogleLoginUrl(data.url);
        }
    }

    useEffect(() => {
        fetchGoogleUrl();
    }, []);

    const layout = {
        labelCol: { span: { sm: 24, md: 8, lg: 6 } },
        wrapperCol: { span: { sm: 24, md: 16, lg: 12 } },
    };

    const onClickToRegister = () => {
        navigate('/');
    };


    return (
        <div className="nk-split-content nk-block-area nk-block-area-column nk-auth-container bg-white">
            <div className="absolute-top-right d-lg-none px-3 p-sm-5">
                <a href="#" className="toggle btn-white btn btn-icon btn-light" data-target="athPromo">
                    <em className="icon ni ni-info" />
                </a>
            </div>
            <div className="nk-block nk-block-middle nk-auth-body">
                <div className="brand-logo pb-3">
                    <a href="/" >
                        <img width={400} height={150} src="./images/elteam_logo.jpg" srcSet="./images/elteam_logo.jpg 2x" alt="logo-dark" />
                    </a>
                </div>
                <div className="nk-block-head">
                    <div className="nk-block-head-content">
                        <h5 className="nk-block-title">Đăng nhập</h5>
                        <div className="nk-block-des">
                            <p>Truy cập vào lớp học qua email và mật khẩu.</p>
                        </div>
                    </div>
                </div>{/* .nk-block-head */}

                <Form
                    labelCol={layout.labelCol}
                    wrapperCol={layout.wrapperCol}
                    className="form-validate is-alter"
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    layout="vertical"
                    size="large"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    noValidate="novalidate"
                >
                    <div className="form-label-group">
                        <label className="form-label" htmlFor="email-address">Email</label>
                        <a className="link link-primary link-sm" tabIndex={-1} href="#">Giúp đỡ?</a>
                    </div>
                    <Form.Item
                        name="email"
                        className="form-group"
                    >
                        <Input
                            placeholder={"Nhập email"}
                            autoComplete="off"
                            type="email"
                            className="form-control form-control-lg"
                            required
                            id="email-address"
                        />
                    </Form.Item>

                    <div className="form-label-group">
                        <label className="form-label" htmlFor="password">Mật khẩu</label>
                        <a className="link link-primary link-sm" tabIndex={-1} href="html/pages/auths/auth-reset.html">Quên mật khẩu?</a>
                    </div>
                    <Form.Item
                        name="password"
                        className="form-group"
                    >
                        <div className="form-control-wrap">
                            <a tabIndex={-1} href="#" className="form-icon form-icon-right passcode-switch lg" data-target="password">
                                <em className="passcode-icon icon-show icon ni ni-eye" />
                                <em className="passcode-icon icon-hide icon ni ni-eye-off" />
                            </a>
                            <Input
                                placeholder={"Nhập mật khẩu"}
                                autoComplete="new-password"
                                type="password"
                                className="form-control form-control-lg"
                                required
                                id="password"
                            />
                        </div>

                    </Form.Item>
                    {loginFailed &&
                        <div className="alert alert-danger alert-icon">
                            <em className="icon ni ni-cross-circle"></em>
                            <strong>Email hoặc mật khẩu của bạn không đúng!!!</strong>
                        </div>
                    }
                    <Form.Item className="form-group">
                        <Button
                            htmlType="submit"
                            className="btn btn-lg btn-primary btn-block"
                            loading={loadingButton}
                        >
                            Đăng nhập
                        </Button>
                    </Form.Item>
                    <Form.Item className="form-group">
                        <div className="text-center pt-4 pb-3">
                            <h6 className="overline-title overline-title-sap">
                                <span>HOẶC</span>
                            </h6>
                        </div>

                        <ul className="nav justify-center gx-4">
                            <a class="btn btn-lg" href={googleLoginUrl} style={{
                                color: "#545454",
                                backgroundColor: "#fff",
                                boxShadow: "0 1px 2px 1px #ddd"
                            }}>
                                <img src="https://img.icons8.com/color/16/000000/google-logo.png" className='mr-2' />
                                Đăng nhập với Google
                            </a>
                        </ul>
                        <div className="text-center mt-5">
                            <span className="fw-500">Bạn chưa có tài khoản?
                                <Link to="/register"> Đăng ký ngay</Link>
                            </span>
                        </div>
                    </Form.Item>
                </Form>

            </div>{/* .nk-block */}

        </div>
    )
}

export default LoginForm
