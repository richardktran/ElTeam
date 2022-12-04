import React, { useState } from 'react'
import { Form, Input, DatePicker, Steps, Button } from 'antd'
import BaseModal from '../BaseModal'
import { useEffect } from 'react';
import { lessonApi } from '../../../api/lessonApi';
import toast from 'react-hot-toast';
import { HTTP_OK } from '../../../utils/constant';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { requestTopics } from '../../../store/Course/Reducer';

function EditCourseModal(props) {
  const { isShow, modalName, setIsShow, handleCloseModal, field, value, type, label, onFinish } = props
  const dispatch = useDispatch();

  return (
    <BaseModal modalName={modalName} handleCloseModal={handleCloseModal} isShow={isShow}>
      <Form action="#" className="form-validate is-alter" onFinish={onFinish}>

        {type === 'text' && (
          <>
            <label className="form-label" htmlFor={field}>{label}</label>
            <Form.Item
              className="form-group mb-3"
              name={field}
            >
              <div className="form-control-wrap mb-2">
                <Input defaultValue={value} type="text" placeholder={`Nhập ${label}`} className="form-control" id={field} />
              </div>
            </Form.Item>
          </>
        )}
        {type === 'date' &&
          <>
            <label className="form-label" htmlFor={field}>{label}</label>
            <div className="form-group">
              <Form.Item
                className="form-control-wrap"
                name={field}
              >
                <DatePicker
                  placeholder={label}
                  id={field}
                  defaultValue={moment(value)}
                  className="form-control"
                  disabledDate={(current) =>
                    current.isBefore(moment().subtract(1, 'day'))
                  }
                />
              </Form.Item>
            </div>
          </>
        }
        <Form.Item className="form-group">
          <button type="submit" className="btn btn-lg btn-primary">Cập nhật</button>
        </Form.Item>
      </Form>
    </BaseModal>
  )
}

export default EditCourseModal