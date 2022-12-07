import React from 'react'
import Layout from '../../components/Layout/Layout'

function NotificationPage() {
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
                <li className="chat-item is-unread">
                  <a className="chat-link" href="/demo7/apps-chats.html">
                    <div className="chat-media user-avatar bg-pink">
                      <span>AB</span>
                      <span className="status dot dot-lg dot-success" />
                    </div>
                    <div className="chat-info">
                      <div className="chat-from">
                        <div className="name">Trần Đăng Khoa đã nhắc đến bạn trong bình luận của công việc CT-220</div>
                        <span className="time">4:49 AM</span>
                      </div>
                      <div className="chat-context">
                        <div>Ê Khoa, tao nè mày</div>
                        <div className="status unread">
                          <em className="icon ni ni-bullet-fill" />
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default NotificationPage