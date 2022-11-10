import React, { useState } from 'react'
import { Form, Input, DatePicker, Steps, Button } from 'antd'
import BaseModal from '../BaseModal'
import { useEffect } from 'react';
import { lessonApi } from '../../../api/lessonApi';
import toast from 'react-hot-toast';
import { HTTP_OK } from '../../../utils/constant';
import { useDispatch } from 'react-redux';
import { requestTopics } from '../../../store/Course/Reducer';

function EditTopicModal(props) {
  const { isShow, modalName, setIsShow, handleCloseModal, topicInfo } = props
  const dispatch = useDispatch();

  const [name, setName] = useState({});

  useEffect(() => {
    if (topicInfo === undefined) {
      setName('');
      return;
    }
    setName(topicInfo.name);
  }, [topicInfo]);

  const updateTopic = async () => {
    if (name === "") {
      toast.error('Tên chủ đề không được để trống!');
      return;
    }

    try {
      const data = {
        name,
      }

      const response = await lessonApi.update(topicInfo.id, data);
      if (response.status === HTTP_OK) {
        toast.success('Cập nhật chủ đề thành công!');
        dispatch(requestTopics());
        setIsShow(false);
      } else {
        // console.log(response);
        toast.error("Cập nhật chủ đề thất bại!!!");
        setIsShow(true);
      }
    } catch (e) {
      console.log(e);
      toast.error("Cập nhật chủ đề thất bại!!!");
      setIsShow(true);
    }
  }

  return (
    <BaseModal modalName={modalName} handleCloseModal={handleCloseModal} isShow={isShow}>
      <Form action="#" className="form-validate is-alter">
        <label className="form-label" htmlFor="name">Tên chủ đề</label>
        <Form.Item
          className="form-group mb-3"
          name="name"
        >
          <div className="form-control-wrap mb-2">
            <Input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Nhập tên chủ đề' className="form-control" id="name" />
          </div>
        </Form.Item>
        <Form.Item className="form-group">
          <button type="submit" onClick={updateTopic} className="btn btn-lg btn-primary">Cập nhật chủ đề</button>
        </Form.Item>
      </Form>
    </BaseModal>
  )
}

export default EditTopicModal