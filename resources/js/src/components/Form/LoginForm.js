import { Button, Form, Input } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom';

const LoginForm = ({ onFinish, loginFailed, onFinishFailed, loadingButton }) => {

    const layout = {
        labelCol: { span: { sm: 24, md: 8, lg: 6 } },
        wrapperCol: { span: { sm: 24, md: 16, lg: 12 } },
    };

    const onClickToRegister = () => {
        navigate('/');
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
                    <a href="html/index.html" className="logo-link">
                        <img className="logo-light logo-img logo-img-lg" src="./images/logo.png" srcSet="./images/logo2x.png 2x" alt="logo" />
                        <img className="logo-dark logo-img logo-img-lg" src="./images/logo-dark.png" srcSet="./images/logo-dark2x.png 2x" alt="logo-dark" />
                    </a>
                </div>
                <div className="nk-block-head">
                    <div className="nk-block-head-content">
                        <h5 className="nk-block-title">Sign-In</h5>
                        <div className="nk-block-des">
                            <p>Access the DashLite panel using your email and passcode.</p>
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
                        <label className="form-label" htmlFor="email-address">Email or Username</label>
                        <a className="link link-primary link-sm" tabIndex={-1} href="#">Need Help?</a>
                    </div>
                    <Form.Item
                        name="email"
                        className="form-group"
                    >
                        <Input
                            placeholder={"Please enter your email"}
                            autoComplete="off"
                            type="email"
                            className="form-control form-control-lg"
                            required
                            id="email-address"
                        />
                    </Form.Item>

                    <div className="form-label-group">
                        <label className="form-label" htmlFor="password">Password</label>
                        <a className="link link-primary link-sm" tabIndex={-1} href="html/pages/auths/auth-reset.html">Forgot Code?</a>
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
                                placeholder={"Please enter your password"}
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
                            <strong>Your email or password is invalid!!!</strong>
                        </div>
                    }
                    <Form.Item className="form-group">
                        <Button
                            htmlType="submit"
                            className="btn btn-lg btn-primary btn-block"
                            loading={loadingButton}
                        >
                            Login
                        </Button>
                    </Form.Item>
                    <Form.Item className="form-group">
                        <div className="form-note-s2 pt-4">
                            New on our platform?
                            <Link to="/register"> Create an account</Link>
                        </div>
                        <div className="text-center pt-4 pb-3">
                            <h6 className="overline-title overline-title-sap">
                                <span>OR</span>
                            </h6>
                        </div>
                        <ul className="nav justify-center gx-4">
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Facebook</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Google</Link>
                            </li>
                        </ul>
                        <div className="text-center mt-5">
                            <span className="fw-500">I don't have an account?
                                <a to="#">Try 15 days free</a>
                            </span>
                        </div>
                    </Form.Item>
                </Form>

            </div>{/* .nk-block */}

        </div>
    )
}

export default LoginForm
