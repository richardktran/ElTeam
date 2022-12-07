import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import { onValue, ref, query, orderByChild, update, onChildAdded, get } from "firebase/database";
import { db } from '../../services/firebase';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import useUser from '../../hooks/useUser';
import Avatar from '../../components/Avatar/Avatar';
import parse from 'html-react-parser';
import { convertMentionToText } from '../../utils/textTransformer';
import moment from 'moment';

function NotificationPage() {

  const currentUser = useUser();
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState([]);
  const [notRead, setNotRead] = useState(0);


  useEffect(() => {
    const notificationsRef = query(ref(db, "users/" + currentUser.id + "/notifications"), orderByChild('time'));

    return onValue(notificationsRef, (snapshot) => {
      const data = snapshot.val();

      if (snapshot.exists()) {
        const newNotifications = [];
        let newNotRead = 0;
        Object.values(data).map((notification, index) => {
          const notificationTransformer = {
            ...notification,
            id: Object.keys(data)[index]
          }
          if (!notificationTransformer.isRead) {
            newNotRead = newNotRead + 1;
          }
          newNotifications.push(notificationTransformer);
        });
        setNotRead(newNotRead);
        // Revet order of comments
        newNotifications.reverse();
        setNotifications(newNotifications);
      }
    });
  }, []);

  const getContentNotification = (notification) => {
    const courseCode = notification.courseData.code;
    const taskIdName = courseCode + '-' + notification.taskId;
    if (notification.type === 'mention') {
      return (`${notification.sendBy.name} đã nhắc đến bạn trong bình luận của công việc ${taskIdName}`);
    }
  }

  const markRead = (notificationId, taskId = null) => {
    const notificationRef = ref(db, "users/" + currentUser.id + "/notifications/" + notificationId);
    update(notificationRef, {
      isRead: true
    });
    if (taskId) {
      window.open(`/tasks/${taskId}`, '_blank');
    }
  }

  const markAllRead = () => {
    notifications.map((notification) => {
      if (!notification.isRead) {
        markRead(notification.id);
      }
    });
  }
  const limitString = (str, limit) => {
    const words = str.split(' ');
    if (words.length > limit) {
      return words.slice(0, limit).join(' ') + '...';
    }
    return str;
  }

  return (
    <Layout>
      <div className="nk-content-body">
        <div className="nk-block-head nk-block-head-sm">
          <div className="nk-block-between">
            <div className="nk-block-head-content">
              <h3 className="nk-block-title page-title">
                Thông báo
              </h3>
            </div>
          </div>{/* .nk-block-between */}
        </div>
        <div className="nk-block">
          <div className="card card-bordered card-full">
            <div className="card-inner">
              <ul className="chat-list">
                {notifications && notifications.length !== 0 && notifications.map((notification) => (
                  <li className={`chat-item ${notification.isRead ? '' : 'is-unread fw-bold'}`}>
                    <a className="chat-link" onClick={() => markRead(notification.id, notification.taskId)}>
                      <Avatar size='sm' name={notification.sendBy.name} />
                      <div className="chat-info ml-3">
                        <div className="chat-from">
                          <div style={{ fontSize: '1rem', color: '#526484' }}>{getContentNotification(notification)}</div>
                          <span className="time">{moment(notification.time).format("MM/DD/YYYY HH:mm:ss")}</span>
                        </div>
                        <div className="chat-context">
                          <div>{parse(limitString(convertMentionToText(notification.content), 25))}</div>
                          <div className="status unread">
                            <em className="icon ni ni-bullet-fill" />
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default NotificationPage