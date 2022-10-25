import { Form, Input, DatePicker, Steps, Button } from 'antd'
import React, { useState } from 'react'
import moment from 'moment';
import BaseModal from './BaseModal'

const RandomDivideGroupModel = (props) => {
    const { isShow, modalName, onFinish, handleCloseModal } = props

    return (
        <BaseModal modalName={modalName} handleCloseModal={handleCloseModal} isShow={isShow}>
            <Form action="#" className="form-validate is-alter" onFinish={onFinish}>
                <label className="form-label" htmlFor="email">Số lượng thành viên trong nhóm</label>
                <Form.Item
                    className="form-group mb-3"
                    name="groupSize"
                    rules={[
                        {
                            required: true,
                            message: 'Số lượng thành viên không được để trống!',
                        },
                    ]}
                >
                    <div className="form-control-wrap mb-2">
                        <Input type="text" placeholder='Nhập số thành viên/nhóm' className="form-control" id="groupSize" />
                    </div>
                </Form.Item>
                <Form.Item className="form-group">
                    <button type="submit" className="btn btn-lg btn-primary">Phân nhóm</button>
                </Form.Item>
            </Form>
        </BaseModal>
    )
}

export default RandomDivideGroupModel
