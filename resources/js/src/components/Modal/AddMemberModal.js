import { Form, Input, DatePicker, Steps, Button, Select } from 'antd'
import React, { useState } from 'react'
import moment from 'moment';
import BaseModal from './BaseModal'
import toast from 'react-hot-toast';
import Dragger from 'antd/lib/upload/Dragger';
import { InboxOutlined } from '@mui/icons-material';
import { useEffect } from 'react';

const AddMemberModal = (props) => {
    const { isShow, modalName, onFinish, handleCloseModal, courseId } = props
    const [type, setType] = useState('multiple');
    const [modalSize, setModalSize] = useState('xs');
    const [checkAll, setCheckAll] = useState(true);

    const [emailList, setEmailList] = useState(null);

    useEffect(() => {
        if (emailList === null) {
            return;
        }
        const isCheckAll = emailList.every((item) => item.checked);
        setCheckAll(isCheckAll);
    }, [emailList]);

    const uploadProps = {
        name: 'file',
        multiple: false,
        action: 'http://localhost:8000/api/file/import-students',
        onChange(info) {
            const { status, response } = info.file;
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                const emails = response.data;
                // Add checked field to each email with true value default
                const emailsChecked = emails.map((email) => {
                    return {
                        email: email,
                        checked: true
                    }
                });
                setEmailList(emailsChecked);
            } else if (status === 'error') {
                toast.error(`${info.file.name} file upload failed.`);
            }
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
    };

    const handleSelectChange = (value) => {
        setType(value.value);
    }

    const handleCheckAll = () => {
        setCheckAll(!checkAll);
        setEmailList(emailList.map((item) => {
            return {
                ...item,
                checked: !checkAll,
            }
        }));
    }

    const uploadAgain = () => {
        setEmailList(null);
    }

    return (
        <BaseModal modalName={modalName} handleCloseModal={handleCloseModal} isShow={isShow} modalSize={modalSize}>
            <Form action="#" className="form-validate is-alter" onFinish={onFinish}>
                <Form.Item
                    className="form-group mb-2"
                    name="type"
                >
                    <label className="form-label" htmlFor="type">Cách thức thêm thành viên</label>
                    <div className="form-control-wrap mb-2">
                        <Select
                            labelInValue
                            defaultValue={{
                                value: 'none',
                                label: 'Nhập email',
                            }}
                            style={{
                                width: "100%",
                            }}
                            onChange={handleSelectChange}
                            options={[
                                {
                                    value: 'single',
                                    label: 'Nhập email',
                                },
                                {
                                    value: 'multiple',
                                    label: 'Import file excel',
                                },
                            ]}
                        />
                    </div>
                </Form.Item>
                {type === 'single' && (
                    <>
                        <label className="form-label" htmlFor="email">Email học viên</label>
                        <Form.Item
                            className="form-group mb-3"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Email không được để trống!',
                                },
                            ]}
                        >
                            <div className="form-control-wrap mb-2">
                                <Input type="email" placeholder='Nhập email của học viên' className="form-control" id="email" />
                            </div>
                        </Form.Item>
                    </>
                )}
                {type === 'multiple' && emailList === null &&
                    <Dragger {...uploadProps} className="mb-3">
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">Click hoặc kéo tệp vào khu vực này để tải lên</p>
                        <p className="ant-upload-hint">
                            Hỗ trợ tải lên các tập tin .xls, .xlsx
                        </p>
                    </Dragger>
                }

                {type === 'multiple' && emailList !== null &&
                    <div className="email_list">
                        <h6 className="title my-3">
                            Danh sách email thành viên
                            <span className="ml-2">
                                <a onClick={uploadAgain} className="btn btn-dim btn-sm btn-outline-light">
                                    <em class="icon ni ni-plus-circle-fill"></em>
                                    <span>Nhập file khác</span>
                                </a>
                            </span>
                        </h6>
                        {/* Create a div with max height and accept scroll */}

                        <div class="custom-control custom-control-sm custom-checkbox custom-control-pro">
                            <input
                                type="checkbox"
                                class="custom-control-input"
                                id={`check-all`}
                                checked={checkAll}
                                onChange={handleCheckAll}
                            />
                            <label class="custom-control-label" style={{ borderWidth: '0' }} for={`check-all`}>
                                <span class="user-card">
                                    <span class="user-name">Chọn tất cả</span>
                                </span>
                            </label>
                        </div>
                        <div className="scrollable mb-3" style={{ maxHeight: '300px', overflowY: 'scroll', border: '1px solid #dbdfea' }}>
                            <ul class="custom-control-group custom-control-vertical w-100 mb-3">
                                {emailList && emailList.map((email, index) => (
                                    <li>
                                        <div class="custom-control custom-control-sm custom-checkbox custom-control-pro">
                                            <input
                                                type="checkbox"
                                                class="custom-control-input"
                                                id={`user-choose-s${index}`}
                                                checked={email.checked}
                                                onChange={(e) => {
                                                    const newEmailList = [...emailList];
                                                    newEmailList[index].checked = e.target.checked;
                                                    setEmailList(newEmailList);
                                                    console.log(newEmailList);
                                                }}
                                            />
                                            <label class="custom-control-label" style={{ borderWidth: '0' }} for={`user-choose-s${index}`}>
                                                <span class="user-card">
                                                    <span class="user-name">{email.email}</span>
                                                </span>
                                            </label>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                }

                <Form.Item className="form-group">
                    <button type="submit" className="btn btn-lg btn-primary">Thêm học viên</button>
                </Form.Item>
            </Form>
        </BaseModal>
    )
}

export default AddMemberModal
