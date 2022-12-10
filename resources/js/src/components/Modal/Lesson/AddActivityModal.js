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
import { API_URL } from '../../../api/axiosInstance';
import moment from 'moment';
const { Dragger } = Upload;



function AddActivityModal(props) {
  const { isShow, setIsShow, modalName, onFinish, handleCloseModal, topicId } = props

  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [type, setType] = useState('text');
  const [fileType, setFileType] = useState('pdf');
  const [content, setContent] = useState('');
  const [deadline, setDeadline] = useState(null);

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

  const onDateChange = (date, dateString) => {
    setDeadline(dateString + ' 23:59:59');
  }

  const changeType = (name) => {
    const type = getTypes(name);
    setFileType(type);
  }

  const addActivity = async () => {
    if (name === '') {
      toast.error('Tên hoạt động không được để trống!');
      return;
    }
    try {
      let newType = type;
      if (type === 'file') {
        newType = fileType;
      }
      let data = {
        topic_id: topicId,
        name: name,
        type: newType,
        content: content,
      }

      if (deadline) {
        data = {
          ...data,
          end_date: deadline
        }
      }

      const response = await lessonApi.createActivity(data);
      if (response.status === HTTP_OK) {
        toast.success('Thêm hoạt động thành công!');

        if (newType === 'task') {
          toast.success('Đã bàn giao công việc này cho tất cả các nhóm!');
        }

        dispatch(requestTopics());
        setIsShow({ show: false, topicId: null });
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
                {
                  value: 'task',
                  label: 'Công việc cho nhóm',
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

          {type === 'task' &&
            <>
              <TextEditor className="form-control" id="content" value={content} onChange={setContent} />
              <label className="form-label mt-2" htmlFor="deadline">Hạn nộp bài</label>
              <Form.Item
                className="form-control-wrap"
                name="deadline"
              >
                <DatePicker
                  placeholder="Chọn ngày"
                  id="deadline"
                  onChange={onDateChange}
                  className="form-control"
                  disabledDate={(current) =>
                    current.isBefore(moment().subtract(1, 'day'))
                  }
                />
              </Form.Item>
            </>
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