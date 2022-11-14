import { Form, Input, DatePicker, Steps, Button, Select } from 'antd'
import React, { useState } from 'react'
import moment from 'moment';
import BaseModal from './BaseModal'
import toast from 'react-hot-toast';
import Dragger from 'antd/lib/upload/Dragger';
import { InboxOutlined } from '@mui/icons-material';

const AddMemberModal = (props) => {
    const { isShow, modalName, onFinish, handleCloseModal, courseId } = props
    const [type, setType] = useState('multiple');
    const [modalSize, setModalSize] = useState('xs');
    const [emailList, setEmailList] = useState(null);

    const emailListExample = [
        'aaa@gg.com',
        'bbb@gg.com'
    ];

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
                setEmailList(response.data);
            } else if (status === 'error') {
                toast.error(`${info.file.name} file upload failed.`);
            }
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
    };

    const handleSelectChange = (value) => {
        if (value.value === 'multiple') {
            setModalSize('lg');
        } else {
            setModalSize('xs');
        }
        setType(value.value);
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
                <ul class="custom-control-group custom-control-vertical w-100 mb-3">
                    {emailListExample.map((email, index) => (
                        <li>
                            <div class="custom-control custom-control-sm custom-checkbox custom-control-pro">
                                <input type="checkbox" class="custom-control-input" id="user-choose-s1" name="user-choose" />
                                <label class="custom-control-label" for="user-choose-s1">
                                    <span class="user-card">
                                        <span class="user-name">Keith Jensen</span>
                                    </span>
                                </label>
                            </div>
                        </li>
                    ))}
                </ul>

                <Form.Item className="form-group">
                    <button type="submit" className="btn btn-lg btn-primary">Thêm học viên</button>
                </Form.Item>
            </Form>
        </BaseModal>
    )
}

export default AddMemberModal
