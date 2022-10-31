import { Form, Input, DatePicker } from 'antd'
import React, { useState } from 'react'
import moment from 'moment';
import BaseModal from './BaseModal'
import TextEditor from '../TextEditor/TextEditor';

const { TextArea } = Input;

const AddTaskModal = (props) => {
    const { isShow, modalName, onFinish, handleCloseModal, modalSize } = props

    return (
        <BaseModal modalName={modalName} modalSize={modalSize} handleCloseModal={handleCloseModal} isShow={isShow}>
            <Form action="#" className="form-validate is-alter" onFinish={onFinish}>
                <label className="form-label" htmlFor="title">Tên nhiệm vụ</label>
                <Form.Item
                    className="form-group"
                    name="title"
                    rules={[
                        {
                            required: true,
                            message: 'Tên nhiệm vụ không được để trống!',
                        },
                    ]}
                >
                    <div className="form-control-wrap">
                        <Input type="text" placeholder='Nhập tên nhiệm vụ' className="form-control" id="title" />
                    </div>
                </Form.Item>
                <label className="form-label" htmlFor="content">Mô tả</label>
                <Form.Item
                    className="form-group"
                    name="content"
                    rules={[
                        {
                            message: 'Mô tả không được để trống!',
                        },
                    ]}
                >
                    <TextEditor className="form-control" id="content" />
                </Form.Item>
                <label className="form-label" htmlFor="deadline">Hạn chót</label>
                <Form.Item
                    className="form-control-wrap"
                    name="deadline"
                >
                    <DatePicker
                        placeholder="Chọn ngày"
                        id="deadline"
                        className="form-control"
                        disabledDate={(current) =>
                            current.isBefore(moment().subtract(1, 'day'))
                        }
                    />
                </Form.Item>
                <Form.Item className="form-group">
                    <button type="submit" className="btn btn-lg btn-primary">Thêm nhiệm vụ</button>
                </Form.Item>
            </Form>
        </BaseModal>
    )
}

export default AddTaskModal
