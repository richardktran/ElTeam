import { Form, Input, DatePicker, Steps, Button } from 'antd'
import React, { useState } from 'react'
import moment from 'moment';
import BaseModal from './BaseModal'

const AddMemberModal = (props) => {
    const { isShow, modalName, onFinish, handleCloseModal } = props

    return (
        <BaseModal modalName={modalName} handleCloseModal={handleCloseModal} isShow={isShow}>
            <Form action="#" className="form-validate is-alter" onFinish={onFinish}>
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
                <Form.Item className="form-group">
                    <button type="submit" className="btn btn-lg btn-primary">Thêm học viên</button>
                </Form.Item>
            </Form>
        </BaseModal>
    )
}

export default AddMemberModal
