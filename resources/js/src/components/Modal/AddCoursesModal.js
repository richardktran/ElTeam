import { Form, Input, DatePicker } from 'antd'
import React, { useState } from 'react'
import moment from 'moment';
import BaseModal from './BaseModal'

const AddCoursesModal = (props) => {
    const { isShow, modalName, onFinish } = props

    return (
        <BaseModal modalName={modalName} isShow={isShow}>
            <Form action="#" className="form-validate is-alter" onFinish={onFinish} novalidate="novalidate">
                <label className="form-label" htmlFor="code">Mã học phần</label>
                <Form.Item className="form-group" name="code">
                    <div className="form-control-wrap">
                        <Input type="text" placeholder='Nhập mã học phần' className="form-control" id="code" required />
                    </div>
                </Form.Item>
                <label className="form-label" htmlFor="name">Tên học phần</label>
                <Form.Item className="form-group" name="name">
                    <div className="form-control-wrap">
                        <Input type="text" placeholder="Nhập tên học phần" className="form-control" id="name" required />
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
                            <Form.Item className="form-control-wrap" name="start_date" value="09/04/2022">
                                <DatePicker style={{ "color": "@blue-5" }} placeholder="Ngày bắt đầu khóa học" id="start_date" className="form-control" />
                            </Form.Item>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <label className="form-label" htmlFor="end_date">Ngày kết thúc</label>
                        <Form.Item className="form-group" name="end_date" >
                            <div className="form-control-wrap">
                                <DatePicker placeholder="Ngày kết thúc khóa học" id="start_date" className="form-control" />
                            </div>
                        </Form.Item>
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
