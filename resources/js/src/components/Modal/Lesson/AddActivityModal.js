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
      toast.error('T??n ho???t ?????ng kh??ng ???????c ????? tr???ng!');
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
        toast.success('Th??m ho???t ?????ng th??nh c??ng!');

        if (newType === 'task') {
          toast.success('???? b??n giao c??ng vi???c n??y cho t???t c??? c??c nh??m!');
        }

        dispatch(requestTopics());
        setIsShow({ show: false, topicId: null });
        setName('');
        setType('text');
        setContent('');
        setFileType('pdf');
      } else {
        console.log(response);
        toast.error("Th??m ho???t ?????ng th???t b???i!!!");
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
        <label className="form-label" htmlFor="name">T??n ho???t ?????ng</label>
        <Form.Item
          className="form-group mb-3"
          name="name"
          rules={[
            {
              required: true,
              message: 'T??n ho???t ?????ng kh??ng ???????c ????? tr???ng!',
            },
          ]}
        >
          <div className="form-control-wrap mb-2">
            <Input type="text" value={name} onChange={e => setName(e.target.value)} placeholder='Nh???p t??n ho???t ?????ng' className="form-control" id="name" />
          </div>
        </Form.Item>
        <Form.Item
          className="form-group mb-2"
          name="type"
        >
          <label className="form-label" htmlFor="type">Lo???i ho???t ?????ng</label>
          <div className="form-control-wrap mb-2">
            <Select
              labelInValue
              defaultValue={{
                value: 'none',
                label: 'So???n th???o n???i dung',
              }}
              style={{
                width: "100%",
              }}
              onChange={handleSelectChange}
              options={[
                {
                  value: 'text',
                  label: 'So???n th???o n???i dung',
                },
                {
                  value: 'file',
                  label: 'T???i l??n t???p tin (pdf, docx, pptx, mp3, mp4,... )',
                },
                {
                  value: 'link',
                  label: 'Li??n k???t ?????n trang web',
                },
                {
                  value: 'task',
                  label: 'C??ng vi???c cho nh??m',
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
              <p className="ant-upload-text">Click ho???c k??o t???p v??o khu v???c n??y ????? t???i l??n</p>
              <p className="ant-upload-hint">
                H??? tr??? t???i l??n c??c t???p tin v??n b???n (pdf, docx, xlsx, pptx), video (mp4, avi, mpg), ??m thanh (mp3, aac),...
              </p>
            </Dragger>
          }

          {type === 'link' &&
            <Input type="text" value={content} onChange={e => setContent(e.target.value)} placeholder='Nh???p li??n k???t' className="form-control" id="content" />
          }

          {type === 'task' &&
            <>
              <TextEditor className="form-control" id="content" value={content} onChange={setContent} />
              <label className="form-label mt-2" htmlFor="deadline">H???n n???p b??i</label>
              <Form.Item
                className="form-control-wrap"
                name="deadline"
              >
                <DatePicker
                  placeholder="Ch???n ng??y"
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
          <button type="submit" onClick={addActivity} className="btn btn-lg btn-primary">Th??m ho???t ?????ng</button>
        </Form.Item>
      </Form>
    </BaseModal>
  )
}

export default AddActivityModal;