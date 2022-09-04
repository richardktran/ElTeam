import { Form, Input, DatePicker } from 'antd'
import React, { useState } from 'react'
import moment from 'moment';
import BaseModal from './BaseModal'

const AddCoursesModal = (props) => {
    const { isShow, modalName, onFinish, handleCloseModal } = props

    return (
        <BaseModal modalName={modalName} handleCloseModal={handleCloseModal} isShow={isShow}>
            <Form action="#" className="form-validate is-alter" onFinish={onFinish}>
                <label className="form-label" htmlFor="code">Mã học phần</label>
                <Form.Item
                    className="form-group"
                    name="code"
                    rules={[
                        {
                            required: true,
                            message: 'Mã học phần không được để trống!',
                        },
                    ]}
                >
                    <div className="form-control-wrap">
                        <Input type="text" placeholder='Nhập mã học phần' className="form-control" id="code" />
                    </div>
                </Form.Item>
                <label className="form-label" htmlFor="name">Tên học phần</label>
                <Form.Item
                    className="form-group"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Tên học phần không được để trống!',
                        },
                    ]}
                >
                    <div className="form-control-wrap">
                        <Input type="text" placeholder="Nhập tên học phần" className="form-control" id="name" />
                    </div>
                </Form.Item>
                <label className="form-label" htmlFor="location" id="">Địa điểm</label>
                <Form.Item className="form-group" name="location">
                    <div className="form-control-wrap">
                        <Input type="text" placeholder="Nhập địa điểm" className="form-control" id="location" />
                    </div>
                </Form.Item>
                <div className="row mb-3">
                    <div className="col-sm-6">
                        <label className="form-label" htmlFor="credit">Số tín chỉ</label>
                        <Form.Item className="form-group" name="credit">
                            <div className="form-control-wrap">
                                <Input type="text" placeholder="Nhập số tín chỉ" className="form-control" id="credit" />
                            </div>
                        </Form.Item>
                    </div>
                    <div className="col-sm-6">
                        <label className="form-label" htmlFor="hours_per_week" id="">Số giờ/tuần</label>
                        <Form.Item className="form-group" name="hours_per_week">
                            <div className="form-control-wrap">
                                <Input type="text" placeholder="Nhập số giờ/tuần" className="form-control" id="hours_per_week" />
                            </div>
                        </Form.Item>
                    </div>
                </div>

                <div className="row mb-4">
                    <div className="col-sm-6">
                        <label className="form-label" htmlFor="start_date">Ngày bắt đầu</label>
                        <div className="form-group">
                            <Form.Item
                                className="form-control-wrap"
                                name="start_date"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng chọn ngày bắt đầu!',
                                    },
                                ]}
                            >
                                <DatePicker
                                    placeholder="Ngày bắt đầu khóa học"
                                    id="start_date"
                                    className="form-control"
                                    disabledDate={(current) =>
                                        current.isBefore(moment().subtract(1, 'day'))
                                    }
                                />
                            </Form.Item>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <label className="form-label" htmlFor="end_date">Ngày kết thúc</label>
                        <div className="form-group">
                            <Form.Item
                                className="form-control-wrap"
                                name="end_date"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng chọn ngày kết thúc!',
                                    },
                                ]}
                            >
                                <DatePicker
                                    placeholder="Ngày kết thúc khóa học"
                                    id="end_date"
                                    className="form-control"
                                    disabledDate={(current) =>
                                        current.isBefore(moment().subtract(1, 'day'))
                                    }
                                />
                            </Form.Item>
                        </div>
                    </div>
                </div>
                <Form.Item className="form-group">
                    <button type="submit" className="btn btn-lg btn-primary">Thêm khóa học</button>
                </Form.Item>
            </Form>
        </BaseModal>
    )
}

export default AddCoursesModal
