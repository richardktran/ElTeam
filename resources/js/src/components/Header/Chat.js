import React from 'react'

function Chat() {
  return (
    <>
      <a href="#" className="dropdown-toggle nk-quick-nav-icon" data-toggle="dropdown">
        <div className="icon-status icon-status-na">
          <em className="icon ni ni-comments" />
        </div>
      </a>
      <div className="dropdown-menu dropdown-menu-xl dropdown-menu-right">
        <div className="dropdown-head">
          <span className="sub-title nk-dropdown-title">Recent Chats</span>
          <a href="#">Setting</a>
        </div>
        <div className="dropdown-body">
          <ul className="chat-list">
            <li className="chat-item">
              <a className="chat-link" href="html/apps-chats.html">
                <div className="chat-media user-avatar">
                  <span>IH</span>
                  <span className="status dot dot-lg dot-gray" />
                </div>
                <div className="chat-info">
                  <div className="chat-from">
                    <div className="name">Iliash Hossain</div>
                    <span className="time">Now</span>
                  </div>
                  <div className="chat-context">
                    <div className="text">You: Please confrim if you got my last messages.</div>
                    <div className="status delivered">
                      <em className="icon ni ni-check-circle-fill" />
                    </div>
                  </div>
                </div>
              </a>
            </li>{/* .chat-item */}
            <li className="chat-item is-unread">
              <a className="chat-link" href="html/apps-chats.html">
                <div className="chat-media user-avatar bg-pink">
                  <span>AB</span>
                  <span className="status dot dot-lg dot-success" />
                </div>
                <div className="chat-info">
                  <div className="chat-from">
                    <div className="name">Abu Bin Ishtiyak</div>
                    <span className="time">4:49 AM</span>
                  </div>
                  <div className="chat-context">
                    <div className="text">Hi, I am Ishtiyak, can you help me with this problem ?</div>
                    <div className="status unread">
                      <em className="icon ni ni-bullet-fill" />
                    </div>
                  </div>
                </div>
              </a>
            </li>{/* .chat-item */}
            <li className="chat-item">
              <a className="chat-link" href="html/apps-chats.html">
                <div className="chat-media user-avatar">
                  <img src="./images/avatar/b-sm.jpg" alt="" />
                </div>
                <div className="chat-info">
                  <div className="chat-from">
                    <div className="name">George Philips</div>
                    <span className="time">6 Apr</span>
                  </div>
                  <div className="chat-context">
                    <div className="text">Have you seens the claim from Rose?</div>
                  </div>
                </div>
              </a>
            </li>{/* .chat-item */}
            <li className="chat-item">
              <a className="chat-link" href="html/apps-chats.html">
                <div className="chat-media user-avatar user-avatar-multiple">
                  <div className="user-avatar">
                    <img src="./images/avatar/c-sm.jpg" alt="" />
                  </div>
                  <div className="user-avatar">
                    <span>AB</span>
                  </div>
                </div>
                <div className="chat-info">
                  <div className="chat-from">
                    <div className="name">Softnio Group</div>
                    <span className="time">27 Mar</span>
                  </div>
                  <div className="chat-context">
                    <div className="text">You: I just bought a new computer but i am having some problem</div>
                    <div className="status sent">
                      <em className="icon ni ni-check-circle" />
                    </div>
                  </div>
                </div>
              </a>
            </li>{/* .chat-item */}
            <li className="chat-item">
              <a className="chat-link" href="html/apps-chats.html">
                <div className="chat-media user-avatar">
                  <img src="./images/avatar/a-sm.jpg" alt="" />
                  <span className="status dot dot-lg dot-success" />
                </div>
                <div className="chat-info">
                  <div className="chat-from">
                    <div className="name">Larry Hughes</div>
                    <span className="time">3 Apr</span>
                  </div>
                  <div className="chat-context">
                    <div className="text">Hi Frank! How is you doing?</div>
                  </div>
                </div>
              </a>
            </li>{/* .chat-item */}
            <li className="chat-item">
              <a className="chat-link" href="html/apps-chats.html">
                <div className="chat-media user-avatar bg-purple">
                  <span>TW</span>
                </div>
                <div className="chat-info">
                  <div className="chat-from">
                    <div className="name">Tammy Wilson</div>
                    <span className="time">27 Mar</span>
                  </div>
                  <div className="chat-context">
                    <div className="text">You: I just bought a new computer but i am having some problem</div>
                    <div className="status sent">
                      <em className="icon ni ni-check-circle" />
                    </div>
                  </div>
                </div>
              </a>
            </li>{/* .chat-item */}
          </ul>{/* .chat-list */}
        </div>{/* .nk-dropdown-body */}
        <div className="dropdown-foot center">
          <a href="html/apps-chats.html">View All</a>
        </div>
      </div>
    </>
  )
}

export default Chat