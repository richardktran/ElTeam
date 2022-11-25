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

function EditGroupNameModal(props) {
  const { isShow, modalName, currentName, handleCloseModal, onFinish } = props
  const dispatch = useDispatch();

  return (
    <BaseModal modalName={modalName} handleCloseModal={handleCloseModal} isShow={isShow}>
      <Form action="#" className="form-validate is-alter" onFinish={onFinish}>
        <label className="form-label" htmlFor='name'>Tên nhóm</label>
        <Form.Item
          className="form-group mb-3"
          name='name'
        >
          <div className="form-control-wrap mb-2">
            <Input defaultValue={currentName} type="text" placeholder={`Nhập tên nhóm`} className="form-control" id='name' />
          </div>
        </Form.Item>
        <Form.Item className="form-group">
          <button type="submit" className="btn btn-lg btn-primary">Cập nhật chủ đề</button>
        </Form.Item>
      </Form>
    </BaseModal>
  )
}

export default EditGroupNameModal