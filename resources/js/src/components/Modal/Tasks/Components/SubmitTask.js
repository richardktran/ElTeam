import React, { createRef, useEffect, useState } from 'react'
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { db } from '../../../../services/firebase';
import { onValue, ref, set, push, query, orderByChild, update } from "firebase/database";
import parse from 'html-react-parser';
import { updateContentTask } from '../../../../store/Tasks/Reducer';
import TextEditor from '../../../TextEditor/TextEditor';
import { Button, Upload } from 'antd';
import useUser from '../../../../hooks/useUser';
import Skeleton from 'react-loading-skeleton';
import { API_URL } from '../../../../api/axiosInstance';

function SubmitTask(props) {
  const { id, isLoading } = props;
  const dispatch = useDispatch();
  const currentUser = useUser();

  const uploadFileBtn = createRef();
  const uploadFileRef = createRef();

  const [fileSubmit, setFileSubmit] = useState([]);
  const [initFiles, setInitFiles] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [taskId, setTaskId] = useState(null);
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  useEffect(() => {
    console.log(id);
    if (id === undefined) {
      forceUpdate();
    }
    setTaskId(id);
  }, [id]);

  useEffect(() => {
    if (taskId === null || taskId === undefined) {
      forceUpdate();
      return;
    }

    const allFilesSubmit = ref(db, "tasks/" + taskId + "/hand-in");
    return onValue(allFilesSubmit, (snapshot) => {
      const data = snapshot.val();
      if (snapshot.exists()) {
        setIsSubmitted(data.submitted ?? false);
        const newFiles = [];
        Object.values(data.files).map((file) => {
          newFiles.push(file);
        });
        setInitFiles(newFiles);
      }
    });
  }, [taskId]);

  const uploadFilesProps = {
    name: 'file',
    multiple: true,
    listType: 'picture',
    action: API_URL + 'file/upload',
    data: {
      category: 'tasks/' + taskId + '/hand-in',
    },
    onChange(info) {
      const { status, response } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        const data = response.data;
        setFileSubmit([...fileSubmit, {
          name: data.name,
          url: data.url
        }]);

      } else if (status === 'error') {
        toast.error(`${info.file.name} file upload failed.`);
      }
    },
    onRemove(e) {
      console.log('Remove files ', e);
      const newFiles = fileSubmit.filter(file => file.url !== e.response.data.url);
      setFileSubmit(newFiles);
    },
  };

  const removeFile = (url) => {
    const newFiles = initFiles.filter(file => file.url !== url);
    setInitFiles(newFiles);
  }

  const uploadFiles = () => {
    uploadFileBtn.current.click();
  }

  const submit = () => {
    if (isSubmitted) {
      // TODO: Check the deadline of the task
      const oldFiles = ref(db, "tasks/" + taskId + "/hand-in/");
      update(oldFiles, {
        submitted: false,
      });
      return;
    }
    const newFiles = {
      files: [...fileSubmit, ...initFiles],
      submitted: true,
      sendBy: {
        id: currentUser.id,
        name: currentUser.name,
        avatar: currentUser.avatar,
        email: currentUser.email
      },
      time: new Date().getTime()
    }
    const oldFiles = ref(db, "tasks/" + taskId + "/hand-in/");
    set(oldFiles, newFiles);

    setFileSubmit([]);
    uploadFileRef.current.fileList.length = 0;
    forceUpdate();
  }

  const downloadFile = async (e, file) => {
    e.preventDefault();
    console.log(file);
    const response = await fetch(file.url);
    response.blob().then(blob => {
      let url = window.URL.createObjectURL(blob);
      let a = document.createElement('a');
      a.href = url;
      a.download = file.name;
      a.click();
    });
  }

  return (
    <>
      <h6 className="title my-3">
        Bài nộp
        {!isSubmitted &&
          <span className="ml-2">
            <a onClick={uploadFiles} className="btn btn-dim btn-sm btn-outline-light">
              <em class="icon ni ni-plus-circle-fill"></em>
              <span>Thêm bài nộp</span>
            </a>
          </span>
        }
      </h6>
      <div>
        <div className='ant-upload-list ant-upload-list-picture'>
          <div className="ant-upload-list-picture-container" style={{}}>
            {isLoading && <Skeleton height={`2rem`} count={2} />}
            {!isLoading && initFiles && initFiles.length > 0 && initFiles.map((file, index) => (
              <div className="ant-upload-list-item ant-upload-list-item-done ant-upload-list-item-list-type-picture">
                <div className="ant-upload-list-item-info">
                  <span className="ant-upload-span">
                    <div className="ant-upload-list-item-thumbnail ant-upload-list-item-file">
                      <span role="img" aria-label="file" className="anticon anticon-file">
                        <svg viewBox="64 64 896 896" focusable="false" data-icon="file" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                          <path d="M534 352V136H232v752h560V394H576a42 42 0 01-42-42z" fill="#e6f7ff" />
                          <path d="M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM602 137.8L790.2 326H602V137.8zM792 888H232V136h302v216a42 42 0 0042 42h216v494z" fill="#1890ff" />
                        </svg>
                      </span>
                    </div>
                    <a onClick={(e) => downloadFile(e, file)} className="ant-upload-list-item-name">
                      <span title="test (1).xlsx">
                        {file.name}
                      </span>
                    </a>
                    {!isSubmitted &&
                      <span className="ant-upload-list-item-card-actions picture">
                        <button onClick={() => removeFile(file.url)} title="Remove file" type="button" className="ant-btn ant-btn-text ant-btn-sm ant-btn-icon-only ant-upload-list-item-card-actions-btn">
                          <span role="img" aria-label="delete" tabIndex={-1} className="anticon anticon-delete">
                            <svg viewBox="64 64 896 896" focusable="false" data-icon="delete" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                              <path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z" />
                            </svg>
                          </span>
                        </button>
                      </span>
                    }
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        {fileSubmit && fileSubmit.length === 0 && initFiles.length === 0 && <p className="text-muted">Bạn chưa có file nộp bài nào</p>}
        <Upload
          {...uploadFilesProps}
          ref={uploadFileRef}
        >
          <Button hidden={true} ref={uploadFileBtn}></Button>
        </Upload>
        {fileSubmit && (fileSubmit.length !== 0 || initFiles.length !== 0) &&
          <button onClick={submit} className={`btn btn-${isSubmitted ? "danger" : "primary"} mt-3`}>
            {isSubmitted ? "Hủy nộp bài" : "Nộp bài"}
          </button>
        }
      </div>
    </>
  )
}

export default SubmitTask