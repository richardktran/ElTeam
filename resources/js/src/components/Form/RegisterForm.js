import { Button, Form, Input } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import authApi from '../../api/authApi';
import { HTTP_OK } from '../../utils/constant';

const RegisterForm = ({ onFinish, registerFail, onFinishFailed, loadingButton }) => {

    const [isAgreeTerms, setIsAgreeTerms] = useState(false);

    const [googleLoginUrl, setGoogleLoginUrl] = useState(null);

    const fetchGoogleUrl = async () => {
        let result = await authApi.googleUrl();
        if (result.status === HTTP_OK) {
            const { data } = result.data;
            setGoogleLoginUrl(data.url);
        }
    }

    useEffect(() => {
        if (localStorage.getItem('token')) {
            navigate('/');
        }
        fetchGoogleUrl();
    }, []);

    const layout = {
        labelCol: { span: { sm: 24, md: 8, lg: 6 } },
        wrapperCol: { span: { sm: 24, md: 16, lg: 12 } },
    };



    return (
        <div className="nk-split-content nk-block-area nk-block-area-column nk-auth-container bg-white">
            <div className="absolute-top-right d-lg-none p-3 p-sm-5">
                <a href="#" className="toggle btn-white btn btn-icon btn-light" data-target="athPromo">
                    <em className="icon ni ni-info" />
                </a>
            </div>
            <div className="nk-block nk-block-middle nk-auth-body">
                <div className="brand-logo pb-5">
                    <a href="/" >
                        <img width={400} height={150} src="/images/elteam_logo.jpg" srcSet="./images/elteam_logo.jpg 2x" alt="logo-dark" />
                    </a>
                </div>
                <div className="nk-block-head">
                    <div className="nk-block-head-content">
                        <h5 className="nk-block-title">Đăng ký tài khoản</h5>
                        <div className="nk-block-des">
                            <p>Tạo tài khoản để tham gia các lớp học.</p>
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
                        <label className="form-label" htmlFor="name">Họ và tên</label>
                    </div>
                    <Form.Item
                        name="name"
                        className="form-group"
                    >
                        <Input
                            placeholder={"Nhập họ và tên"}
                            autoComplete="off"
                            type="name"
                            className="form-control form-control-lg"
                            required
                            id="name"
                        />
                    </Form.Item>

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
                    {registerFail &&
                        <div className="alert alert-danger alert-icon">
                            <em className="icon ni ni-cross-circle"></em>
                            <strong>Tài khoản đã tồn tài, đăng ký tài khoản khác hoặc đăng nhập!!!</strong>
                        </div>
                    }
                    <div className="form-group">
                        <div className="custom-control custom-control-xs custom-checkbox">
                            <input value={isAgreeTerms} onChange={(e) => setIsAgreeTerms(!isAgreeTerms)} type="checkbox" className="custom-control-input" id="checkbox" />
                            <label className="custom-control-label" htmlFor="checkbox">
                                Tôi đồng ý với các <a tabIndex={-1} href="#">Điều khoản</a> &amp; <a tabIndex={-1} href="#"> Điều kiện.</a> của Elteam.
                            </label>
                        </div>
                    </div>
                    <Form.Item className="form-group">
                        <Button
                            htmlType={isAgreeTerms ? 'submit' : 'button'}
                            className={`btn btn-lg btn-${isAgreeTerms ? 'primary' : 'gray'} btn-block`}
                            loading={loadingButton}
                        >
                            Đăng ký
                        </Button>
                    </Form.Item>
                    <Form.Item className="form-group">
                        <div className="text-center pt-4 pb-3">
                            <h6 className="overline-title overline-title-sap">
                                <span>HOẶC</span>
                            </h6>
                        </div>
                        <ul className="nav justify-center gx-4">
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Facebook</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={googleLoginUrl}>Google</a>
                            </li>
                        </ul>
                        <div className="text-center mt-5">
                            <span className="fw-500">Bạn đã có tài khoản?
                                <Link to="/login"> Đăng nhập ngay</Link>
                            </span>
                        </div>
                    </Form.Item>
                </Form>

            </div>{/* .nk-block */}

        </div >
    )
}

export default RegisterForm
