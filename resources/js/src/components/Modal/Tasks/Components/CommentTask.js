import React, { useCallback, useEffect, useState } from 'react'
import { db } from '../../../../services/firebase';
import { onValue, ref, set, push, query, orderByChild } from "firebase/database";
import useUser from '../../../../hooks/useUser';
import Avatar from '../../../Avatar/Avatar';
import { Button, Upload } from 'antd';
import { UploadOutlined } from '@mui/icons-material';
import { createRef } from 'react';
import { Mention, MentionsInput } from 'react-mentions';
import mentionsInputStyle from "./mentionsInputStyles";
import parse from 'html-react-parser';
import { convertMentionToText, getMentionList } from '../../../../utils/textTransformer';
import { useSelector } from 'react-redux';

function CommentTask(props) {
  const { id, members } = props;
  const [taskId, setTaskId] = useState(null);
  const [message, setMessage] = useState('');
  const [filesMessage, setFilesMessage] = useState([]);
  const [membersList, setMembersList] = React.useState(null);
  const currentUser = useUser();

  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);
  const [comments, setComments] = useState([]);

  const courseData = useSelector(state => state.course.courseInfo);
  const [course, setCourse] = useState(courseData);

  useEffect(() => {
    setCourse(courseData);
  }, [courseData]);

  const uploadFileBtn = createRef();
  const uploadImagesBtn = createRef();
  const uploadFileRef = createRef();
  const uploadImageRef = createRef();

  useEffect(() => {
    if (members === null || members === undefined) {
      forceUpdate();
      return;
    }
    const membersList = members.map(member => {
      return {
        ...member,
        display: member.name
      }
    });
    console.log(membersList);
    setMembersList(membersList);
  }, [members]);

  useEffect(() => {
    console.log(id);
    if (id === undefined) {
      console.log('force');
      forceUpdate();
    }
    setTaskId(id);
  }, [id])


  useEffect(() => {
    if (taskId === null) {
      console.log('force');
      forceUpdate();
      return;
    }
    const allComments = query(ref(db, "tasks/" + taskId + "/comments"), orderByChild('time'));
    return onValue(allComments, (snapshot) => {
      const data = snapshot.val();
      console.log(data);

      if (snapshot.exists()) {
        const newComments = [];
        Object.values(data).map((comment) => {
          newComments.push(comment);
        });
        // Revet order of comments
        newComments.reverse();
        setComments(newComments);
      }
    });
  }, [taskId]);

  const uploadFilesProps = {
    name: 'file',
    multiple: true,
    action: 'http://localhost:8000/api/file/upload',
    data: {
      category: 'tasks/' + taskId + '/comments'
    },
    onChange(info) {
      const { status, response } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        const data = response.data;
        setFilesMessage([...filesMessage, {
          name: data.name,
          url: data.url
        }]);

      } else if (status === 'error') {
        toast.error(`${info.file.name} file upload failed.`);
      }
    },
    onRemove(e) {
      console.log('Remove files ', e);
      const newFiles = filesMessage.filter(file => file.url !== e.response.data.url);
      setFilesMessage(newFiles);
    },
  };

  const sendMessage = useCallback(() => {
    if (message === '') return;
    const mentionPeople = getMentionList(message);
    const newComment = {
      content: message,
      files: filesMessage,
      sendBy: {
        id: currentUser.id,
        name: currentUser.name,
        avatar: currentUser.avatar,
        email: currentUser.email
      },
      time: new Date().getTime()
    }
    const oldComments = push(ref(db, "tasks/" + taskId + "/comments/"));
    set(oldComments, newComment);

    // Push notification to all mentionPeople except current user to firebase database 
    console.log(course);
    mentionPeople.map(mention => {
      if (mention.id !== currentUser.id) {
        const newNotification = {
          type: 'mention',
          content: message,
          sendBy: {
            id: currentUser.id,
            name: currentUser.name,
            avatar: currentUser.avatar,
            email: currentUser.email
          },
          taskId: id,
          courseData: course,
          time: new Date().getTime(),
          isRead: false
        }
        const oldNotifications = push(ref(db, "users/" + mention.id + "/notifications/"));
        set(oldNotifications, newNotification);
      }
    });

    setMessage('');
    setFilesMessage([]);
    uploadFileRef.current.fileList.length = 0;
    uploadImageRef.current.fileList.length = 0;
    forceUpdate();
  }, [uploadFileRef]);


  const uploadFiles = () => {
    uploadFileBtn.current.click();
  }

  const uploadImages = () => {
    uploadImagesBtn.current.click();
  }

  const downloadAll = async (e, files) => {
    e.preventDefault();
    console.log(files);
    files.map(async (file) => {
      const response = await fetch(file);
      response.blob().then(blob => {
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement('a');
        a.href = url;
        a.download = file.name;
        a.click();
      });
    });
  }

  return (
    <div className="nk-msg-reply nk-reply" data-simplebar="init">
      {/* <div className="simplebar-height-auto-observer-wrapper">
          <div className="simplebar-height-auto-observer" />
        </div> */}
      <div className="simplebar-content-wrapper">
        {/* .nk-reply-form */}
        <div className="nk-reply-form" style={{ marginBottom: "0" }}>
          <div className="nk-reply-form-header">
            <div className="nk-reply-form-title my-2">
              <Avatar image={currentUser.avatar} name={currentUser.name} />
              <div className="title ml-2">{currentUser.name}</div>
            </div>
            <ul className="nav nav-tabs-s2 nav-tabs nav-tabs-sm">
              <li className="nav-item">
                <a className="nav-link active" data-toggle="tab" href="#reply-form"></a>
              </li>
            </ul>

          </div>
          <div className="tab-content">
            <div className="tab-pane active" id="reply-form">
              <div className="nk-reply-form-editor">
                <div className="nk-reply-form-field">
                  <MentionsInput
                    placeholder="Nhập bình luận của bạn..."
                    value={message}
                    defaultValue={""}
                    classNames={{
                      mentions__input: 'form-control form-control-simple no-resize'
                    }}
                    style={mentionsInputStyle}
                    onChange={(e) => setMessage(e.target.value)}
                  >
                    <Mention
                      style={{
                        backgroundColor: '#cee4e5',
                      }}
                      renderSuggestion={(
                        suggestion,
                        search,
                        highlightedDisplay,
                        index,
                        focused
                      ) => (
                        <li className="chat-item ">
                          <a className="chat-link" href="#">
                            <Avatar image={suggestion.avatar} name={suggestion.name} />
                            <div className="chat-info ml-2">
                              <div className="chat-from"><div className="name">{suggestion.name}</div></div>
                            </div>
                          </a>
                        </li>
                      )}
                      trigger="@"
                      data={membersList} />
                  </MentionsInput>
                  <Upload
                    {...uploadFilesProps}
                    ref={uploadFileRef}
                  >
                    <Button hidden={true} ref={uploadFileBtn}></Button>
                  </Upload>
                  <Upload
                    {...uploadFilesProps}
                    ref={uploadImageRef}
                    listType="picture"
                    className="upload-list-inline"
                  >
                    <Button hidden={true} ref={uploadImagesBtn}></Button>
                  </Upload>
                </div>
                <div className="nk-reply-form-tools">
                  <ul className="nk-reply-form-actions g-1">
                    <li className="mr-2">
                      <button className="btn btn-primary" onClick={sendMessage} type="submit">Gửi</button>
                    </li>
                    <li>
                      <a onClick={uploadFiles} className="btn btn-icon btn-sm" data-toggle="tooltip" data-placement="top" title href="#" data-original-title="Upload Attachment">
                        <em className="icon ni ni-clip-v" />
                      </a>
                    </li>
                    <li>
                      <a className="btn btn-icon btn-sm" data-toggle="tooltip" data-placement="top" title href="#" data-original-title="Insert Emoji">
                        <em className="icon ni ni-happy" />
                      </a>
                    </li>
                    <li>
                      <a onClick={uploadImages} className="btn btn-icon btn-sm" data-toggle="tooltip" data-placement="top" title href="#" data-original-title="Upload Images">
                        <em className="icon ni ni-img" />
                      </a>
                    </li>
                  </ul>
                  <div className="dropdown">
                    <a href="#" className="dropdown-toggle btn-trigger btn btn-icon mr-n2" data-toggle="dropdown">
                      <em className="icon ni ni-more-v" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <ul className="link-list-opt no-bdr">
                        <li>
                          <a href="#">
                            <span>Another Option</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span>More Option</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* .nk-reply-form-tools */}

              </div>
              {/* .nk-reply-form-editor */}
            </div>
          </div>
        </div>
        {/* .nk-reply-form */}
        <div className="simplebar-content" style={{ padding: '0px' }}>
          {comments && comments.map((comment) => {
            const datetime = new Date(comment.time);

            return (
              <div className="nk-reply-item">
                <div className="nk-reply-header">
                  <div className="user-card">
                    <Avatar image={comment.sendBy.avatar} name={comment.sendBy.name} />
                    <div className="user-name">{comment.sendBy.name}</div>
                  </div>
                  <div className="date-time">{datetime.toLocaleString()}</div>
                </div>

                <div className="nk-reply-body">
                  <div className="nk-reply-entry entry">
                    <p>{parse(convertMentionToText(comment.content))}</p>
                  </div>
                  {comment.hasOwnProperty('files') && comment.files.length > 0 && (
                    <div className="attach-files">
                      <ul className="attach-list">
                        {comment.files.map((file) => (
                          <li className="attach-item">
                            <a className="download" href={file.url} download>
                              <em className="icon ni ni-img" />
                              <span>{file.name}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                      <div className="attach-foot">
                        <span className="attach-info">2 files attached</span>
                        <a className="attach-download link" onClick={(e) => downloadAll(e, comment.files)}>
                          <em className="icon ni ni-download" />
                          <span>Download All</span>
                        </a>
                      </div>
                    </div>
                  )}
                </div>

              </div>
            );
          })}

        </div>
      </div>
      <div className="simplebar-placeholder" style={{ width: 'auto', height: '50px' }} />

      <div className="simplebar-track simplebar-horizontal" style={{ visibility: 'hidden' }}>
        <div className="simplebar-scrollbar" style={{ width: '0px', display: 'none' }} />
      </div>
      <div className="simplebar-track simplebar-vertical" style={{ visibility: 'visible' }}>
        <div className="simplebar-scrollbar" style={{ height: '85px', transform: 'translate3d(0px, 260px, 0px)', display: 'block' }} />
      </div>
    </div>
  )
}

export default CommentTask