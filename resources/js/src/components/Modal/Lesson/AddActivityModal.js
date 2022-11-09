import React, { useState } from 'react'
import { Form, Input, DatePicker, Steps, Button, Select } from 'antd'
import { message, Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import BaseModal from '../BaseModal'
import TextEditor from '../../TextEditor/TextEditor';
import { lessonApi } from '../../../api/lessonApi';
import { HTTP_OK } from '../../../utils/constant';
import toast from 'react-hot-toast';
import { requestTopics } from '../../../store/Course/Reducer';
import { useDispatch } from 'react-redux';
const { Dragger } = Upload;

const uploadProps = {
  name: 'file',
  multiple: false,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

function AddActivityModal(props) {
  const { isShow, setIsShow, modalName, onFinish, handleCloseModal, topicId } = props

  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [type, setType] = useState('text');
  const [content, setContent] = useState('');


  const addActivity = async () => {
    if (name === '') {
      toast.error('Tên hoạt động không được để trống!');
      return;
    }
    try {
      const data = {
        topic_id: topicId,
        name: name,
        type: type,
        content: content,
      }

      const response = await lessonApi.createActivity(data);
      if (response.status === HTTP_OK) {
        toast.success('Thêm chủ đề thành công!');
        dispatch(requestTopics());
        setIsShow({ show: false, topicId: null });
      } else {
        console.log(response);
        toast.error("Thêm chủ đề thất bại!!!");
      }
    } catch (e) {
      console.log(e);
      const messages = e.response.data.messages;
      messages.forEach(message => {
        toast.error(message.message);
      });
    }
  }

  const getExtension = (filename) => {
    return filename.split('.').pop();
  }

  const handleSelectChange = (value) => {
    setType(value.value);
    setContent('');
  }

  return (
    <BaseModal modalName={modalName} handleCloseModal={handleCloseModal} isShow={isShow} modalSize='lg'>
      <Form action="#" className="form-validate is-alter">
        <label className="form-label" htmlFor="name">Tên hoạt động</label>
        <Form.Item
          className="form-group mb-3"
          name="name"
          rules={[
            {
              required: true,
              message: 'Tên hoạt động không được để trống!',
            },
          ]}
        >
          <div className="form-control-wrap mb-2">
            <Input type="text" value={name} onChange={e => setName(e.target.value)} placeholder='Nhập tên hoạt động' className="form-control" id="name" />
          </div>
        </Form.Item>
        <Form.Item
          className="form-group mb-2"
          name="type"
        >
          <label className="form-label" htmlFor="type">Loại hoạt động</label>
          <div className="form-control-wrap mb-2">
            <Select
              labelInValue
              defaultValue={{
                value: 'none',
                label: 'Soạn thảo nội dung',
              }}
              style={{
                width: "100%",
              }}
              onChange={handleSelectChange}
              options={[
                {
                  value: 'text',
                  label: 'Soạn thảo nội dung',
                },
                {
                  value: 'file',
                  label: 'Tải lên tập tin (pdf, docx, pptx, mp3, mp4,... )',
                },
                {
                  value: 'link',
                  label: 'Liên kết đến trang web',
                },
              ]}
            />
          </div>
        </Form.Item>
        <Form.Item
          className="form-group"
          name="content"
        >
          {type === 'text' &&
            <TextEditor className="form-control" id="content" value={content} onChange={setContent} />
          }
          {type === 'file' &&
            <Dragger {...uploadProps}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">Click hoặc kéo tệp vào khu vực này để tải lên</p>
              <p className="ant-upload-hint">
                Hỗ trợ tải lên các tập tin văn bản (pdf, docx, xlsx, pptx), video (mp4, avi, mpg), âm thanh (mp3, aac),...
              </p>
            </Dragger>
          }

          {type === 'link' &&
            <Input type="text" value={content} onChange={e => setContent(e.target.value)} placeholder='Nhập liên kết' className="form-control" id="content" />
          }
        </Form.Item>
        <Form.Item className="form-group">
          <button type="submit" onClick={addActivity} className="btn btn-lg btn-primary">Thêm hoạt động</button>
        </Form.Item>
      </Form>
    </BaseModal>
  )
}

export default AddActivityModal;