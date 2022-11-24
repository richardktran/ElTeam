import React, { useEffect, useState } from 'react'
import useUser from '../../hooks/useUser'
import { onValue, ref, query, orderByChild, update, onChildAdded, get } from "firebase/database";
import { db } from '../../services/firebase';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Notifications() {
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

          // Check the time of notification is less than now 1 second
          if (notificationTransformer.time >= Date.now() - 1000) {
            toast.success(getContentNotification(notificationTransformer), { duration: 5000 });
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

  return (
    <>
      <a href="#" className="dropdown-toggle nk-quick-nav-icon" data-toggle="dropdown">
        {notRead > 0 &&
          <div className="icon-status icon-status-info">
            <em className="icon ni ni-bell" />
          </div>
        }
        {notRead === 0 && <em className="icon ni ni-bell" />}
      </a>
      <div className="dropdown-menu dropdown-menu-xl dropdown-menu-right">
        <div className="dropdown-head">
          <span className="sub-title nk-dropdown-title">Thông báo ({notRead !== 0 ? notRead : '0'})</span>
          <a href="#" onClick={() => markAllRead()}>Đánh dấu là đã đọc</a>
        </div>
        <div className="dropdown-body">
          <div className="nk-notification">
            {notifications && notifications.length === 0 && <div className="nk-notification-item dropdown-inner d-flex justify-content-center">Bạn không có thông báo nào</div>}
            {notifications && notifications.length !== 0 && notifications.map((notification) => (
              <div onClick={() => markRead(notification.id, notification.taskId)} style={{ cursor: "pointer" }} className={`nk-notification-item dropdown-inner ${notification.isRead ? '' : 'fw-bold'}`}>
                <div className="nk-notification-icon">
                  <em className="icon icon-circle bg-warning-dim ni ni-curve-down-right" />
                </div>
                <div className="nk-notification-content">
                  <div className="nk-notification-text">
                    {getContentNotification(notification)}
                  </div>
                  <div className='d-flex justify-content-between'>
                    <div className="nk-notification-time">2 hours ago</div>
                    {!notification.isRead &&
                      <div class="status unread">
                        <em class="icon ni ni-bullet-fill"></em>
                      </div>
                    }
                  </div>
                </div>
              </div>
            ))}
          </div>{/* .nk-notification */}
        </div>{/* .nk-dropdown-body */}
      </div>
    </>
  )
}

export default Notifications