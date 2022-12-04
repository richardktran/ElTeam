import React from 'react'
import UserControl from '../UserControl/UserControl'
import Chat from './Chat'
import Notifications from './Notifications'

function Header() {
  const [notification, setNotification] = React.useState('');
  const [taskId, setTaskId] = React.useState(null);
  const getFirstNotification = (notification) => {
    setNotification(getContentNotification(notification));
    setTaskId(notification.taskId);
  }

  const getContentNotification = (notification) => {
    const courseCode = notification.courseData.code;
    const taskIdName = courseCode + '-' + notification.taskId;
    if (notification.type === 'mention') {
      return (`${notification.sendBy.name} đã nhắc đến bạn trong bình luận của công việc ${taskIdName}`);
    }
  }

  const openTask = () => {
    if (taskId === null) {
      return;
    }
    window.open(`/tasks/${taskId}`, '_blank');
  }
  return (
    <div className="nk-header nk-header-fixed is-light">
      <div className="container-fluid">
        <div className="nk-header-wrap">
          <div className="nk-menu-trigger d-xl-none ml-n1">
            <a href="#" className="nk-nav-toggle nk-quick-nav-icon" data-target="sidebarMenu">
              <em className="icon ni ni-menu" />
            </a>
          </div>
          <div className="nk-header-brand d-xl-none">
            <a href="html/index.html" className="logo-link">
              <img width={200} height={50} className="logo-img logo-img-lg" src="./images/elteam_logo.png" alt="logo-small" />

            </a>
          </div>{/* .nk-header-brand */}
          <div className="nk-header-news d-none d-xl-block" >
            <div className="nk-news-list">
              <a className="nk-news-item" href="#" onClick={() => openTask()} data-toggle="tooltip" data-placement="bottom" title={notification}>
                <div className="nk-news-icon">
                  <em className="icon ni ni-card-view" />
                </div>
                <div className="nk-news-text">
                  <p style={{ width: 'calc(100%)' }}>{notification === '' ? 'Chào mừng bạn đến với Elteam' : notification}</p>
                  {notification !== '' && <em className="icon ni ni-external" />}
                </div>
              </a>
            </div>
          </div>
          <div className="nk-header-tools">
            <ul className="nk-quick-nav">
              <li className="dropdown notification-dropdown">
                <Notifications
                  firstNotification={getFirstNotification}
                />
              </li>
              <li className="dropdown user-dropdown">
                <UserControl />
              </li>
            </ul>
          </div>
        </div>{/* .nk-header-wrap */}
      </div>{/* .container-fliud */}
    </div>
  )
}

export default Header
