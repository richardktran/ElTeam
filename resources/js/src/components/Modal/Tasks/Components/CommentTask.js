import React, { useCallback, useEffect, useState } from 'react'
import { db } from '../../../../services/firebase';
import { onValue, ref, set, push, query, orderByChild } from "firebase/database";

function CommentTask(props) {
  const { id } = props;
  const [taskId, setTaskId] = useState(null);
  const [message, setMessage] = useState('');

  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  useEffect(() => {
    console.log(id);
    if (id === undefined) {
      console.log('force');
      forceUpdate();
    }
    setTaskId(id);
  }, [id])

  const [comments, setComments] = useState([]);

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

  const sendMessage = () => {
    if (message === '') return;
    const newComment = {
      content: message,
      sendBy: 'Trần Đăng Khoa',
      time: new Date().getTime()
    }
    const oldComments = push(ref(db, "tasks/" + taskId + "/comments/"));
    set(oldComments, newComment);
    setMessage('');
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
              <div className="user-avatar xs bg-purple">
                <span>TK</span>
              </div>
              <div className="title ml-2">Trần Đăng Khoa</div>
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
                  <textarea
                    className="form-control form-control-simple no-resize"
                    placeholder="Hello"
                    defaultValue={""}
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                  />
                </div>
                <div className="nk-reply-form-tools">
                  <ul className="nk-reply-form-actions g-1">
                    <li className="mr-2">
                      <button className="btn btn-primary" onClick={sendMessage} type="submit">Reply</button>
                    </li>
                    <li>
                      <a className="btn btn-icon btn-sm" data-toggle="tooltip" data-placement="top" title href="#" data-original-title="Upload Attachment">
                        <em className="icon ni ni-clip-v" />
                      </a>
                    </li>
                    <li>
                      <a className="btn btn-icon btn-sm" data-toggle="tooltip" data-placement="top" title href="#" data-original-title="Insert Emoji">
                        <em className="icon ni ni-happy" />
                      </a>
                    </li>
                    <li>
                      <a className="btn btn-icon btn-sm" data-toggle="tooltip" data-placement="top" title href="#" data-original-title="Upload Images">
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
          {comments && comments.map((comment) => (
            <div className="nk-reply-item">
              <div className="nk-reply-header">
                <div className="user-card">
                  <div className="user-avatar sm bg-blue">
                    <span>AB</span>
                  </div>
                  <div className="user-name">{comment.sendBy}</div>
                </div>
                <div className="date-time">14 Jan, 2020</div>
              </div>
              <div className="nk-reply-body">
                <div className="nk-reply-entry entry">
                  <p>{comment.content}</p>
                </div>
                <div className="attach-files">
                  <ul className="attach-list">
                    <li className="attach-item">
                      <a className="download" href="#">
                        <em className="icon ni ni-img" />
                        <span>error-show-On-order.jpg</span>
                      </a>
                    </li>
                    <li className="attach-item">
                      <a className="download" href="#">
                        <em className="icon ni ni-img" />
                        <span>full-page-error.jpg</span>
                      </a>
                    </li>
                  </ul>
                  <div className="attach-foot">
                    <span className="attach-info">2 files attached</span>
                    <a className="attach-download link" href="#">
                      <em className="icon ni ni-download" />
                      <span>Download All</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}

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