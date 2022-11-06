import React from 'react'
import { Form, Input, DatePicker, Steps, Button } from 'antd'
import BaseModal from '../BaseModal'

function AddTopicModal(props) {
  const { isShow, modalName, onFinish, handleCloseModal } = props
  return (
    <BaseModal modalName={modalName} handleCloseModal={handleCloseModal} isShow={isShow}>
      <Form action="#" className="form-validate is-alter" onFinish={onFinish}>
        <label className="form-label" htmlFor="topicName">Tên chủ đề</label>
        <Form.Item
          className="form-group mb-3"
          name="topicName"
          rules={[
            {
              required: true,
              message: 'Tên chủ đề không được để trống!',
            },
          ]}
        >
          <div className="form-control-wrap mb-2">
            <Input type="text" placeholder='Nhập tên chủ đề' className="form-control" id="topicName" />
          </div>
        </Form.Item>
        <Form.Item className="form-group">
          <button type="submit" className="btn btn-lg btn-primary">Thêm chủ đề</button>
        </Form.Item>
      </Form>
    </BaseModal>
  )
}

export default AddTopicModal