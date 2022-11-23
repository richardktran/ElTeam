import React, { useCallback, useEffect, useState } from 'react'
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
import { API_URL } from '../../../api/axiosInstance';
const { Dragger } = Upload;



function EditActivityModal(props) {
  const { isShow, setIsShow, modalName, handleCloseModal, activity } = props

  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [type, setType] = useState('text');
  const [fileType, setFileType] = useState('other');
  const [content, setContent] = useState('');



  useEffect(() => {
    if (activity === null) {
      setName('');
      setType('text');
      setFileType('other');
      return;
    }
    setName(activity.name);
    setType(activity.type);
    setContent(activity.content);
    if (activity.type === 'file') {
      changeType(activity.content);
    }
  }, [activity]);

  const selectOptions = [
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
  ]

  const uploadProps = {
    name: 'file',
    multiple: false,
    action: API_URL + 'file/upload',
    data: {
      category: 'lesson'
    },
    onChange(info) {
      const { status, response } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        setContent(response.data.url);
        changeType(response.data.name);

      } else if (status === 'error') {
        toast.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };

  const checkIncludes = (name, types) => {
    let result = false;
    types.forEach(type => {
      if (name.includes(type)) {
        result = true;
      }
    })
    return result;
  }

  const getTypes = (name) => {
    const ext = getExtension(name);
    if (checkIncludes(ext, ['pdf'])) {
      return 'pdf';
    }
    if (checkIncludes(ext, ['doc', 'docx'])) {
      return 'doc';
    }
    if (checkIncludes(ext, ['xls', 'xlsx'])) {
      return 'xls';
    }
    if (checkIncludes(ext, ['mp4', 'avi', 'mov', 'wmv'])) {
      return 'movie';
    }
    if (checkIncludes(ext, ['mp3', 'wav', 'wma'])) {
      return 'audio';
    }

    return 'text';
  }

  const changeType = (name) => {
    const type = getTypes(name);
    setFileType(type);
  }

  const editActivity = async () => {
    if (name === '') {
      toast.error('Tên hoạt động không được để trống!');
      return;
    }
    try {
      const data = {
        name: name,
        content: content,
      }

      const response = await lessonApi.updateActivity(activity.id, data);
      if (response.status === HTTP_OK) {
        toast.success('Thêm hoạt động thành công!');
        dispatch(requestTopics());
        setIsShow({ show: false, activity: null });
        setName('');
        setType('text');
        setContent('');
        setFileType('pdf');
      } else {
        console.log(response);
        toast.error("Thêm hoạt động thất bại!!!");
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
          className="form-group"
          name="content"
        >
          {type === 'text' &&
            <TextEditor className="form-control" id="content" value={content} onChange={setContent} />
          }
          {type !== 'text' && type !== 'link' &&
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
          <button type="submit" onClick={editActivity} className="btn btn-lg btn-primary">Cập nhật</button>
        </Form.Item>
      </Form>
    </BaseModal>
  )
}

export default EditActivityModal;