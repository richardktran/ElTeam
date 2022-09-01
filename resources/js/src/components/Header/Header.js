import React from 'react'
import UserControl from '../UserControl/UserControl'

function Header() {
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
              <img className="logo-light logo-img" src="./images/logo.png" srcSet="./images/logo2x.png 2x" alt="logo" />
              <img className="logo-dark logo-img" src="./images/logo-dark.png" srcSet="./images/logo-dark2x.png 2x" alt="logo-dark" />
            </a>
          </div>{/* .nk-header-brand */} <div className="nk-header-search ml-3 ml-xl-0">
            <em className="icon ni ni-search" />
            <input type="text" className="form-control border-transparent form-focus-none" placeholder="Search anything" />
          </div>{/* .nk-header-news */} <div className="nk-header-tools">
            <ul className="nk-quick-nav">
              <li className="dropdown chats-dropdown hide-mb-xs">
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
                      </li>{/* .chat-item */} <li className="chat-item is-unread">
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
                      </li>{/* .chat-item */} <li className="chat-item">
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
                      </li>{/* .chat-item */} <li className="chat-item">
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
                      </li>{/* .chat-item */} <li className="chat-item">
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
                      </li>{/* .chat-item */} <li className="chat-item">
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
                  </div>{/* .nk-dropdown-body */} <div className="dropdown-foot center">
                    <a href="html/apps-chats.html">View All</a>
                  </div>
                </div>
              </li>
              <li className="dropdown notification-dropdown">
                <a href="#" className="dropdown-toggle nk-quick-nav-icon" data-toggle="dropdown">
                  <div className="icon-status icon-status-info">
                    <em className="icon ni ni-bell" />
                  </div>
                </a>
                <div className="dropdown-menu dropdown-menu-xl dropdown-menu-right">
                  <div className="dropdown-head">
                    <span className="sub-title nk-dropdown-title">Notifications</span>
                    <a href="#">Mark All as Read</a>
                  </div>
                  <div className="dropdown-body">
                    <div className="nk-notification">
                      <div className="nk-notification-item dropdown-inner">
                        <div className="nk-notification-icon">
                          <em className="icon icon-circle bg-warning-dim ni ni-curve-down-right" />
                        </div>
                        <div className="nk-notification-content">
                          <div className="nk-notification-text">You have requested to <span>Widthdrawl</span>
                          </div>
                          <div className="nk-notification-time">2 hrs ago</div>
                        </div>
                      </div>
                      <div className="nk-notification-item dropdown-inner">
                        <div className="nk-notification-icon">
                          <em className="icon icon-circle bg-success-dim ni ni-curve-down-left" />
                        </div>
                        <div className="nk-notification-content">
                          <div className="nk-notification-text">Your <span>Deposit Order</span> is placed </div>
                          <div className="nk-notification-time">2 hrs ago</div>
                        </div>
                      </div>
                      <div className="nk-notification-item dropdown-inner">
                        <div className="nk-notification-icon">
                          <em className="icon icon-circle bg-warning-dim ni ni-curve-down-right" />
                        </div>
                        <div className="nk-notification-content">
                          <div className="nk-notification-text">You have requested to <span>Widthdrawl</span>
                          </div>
                          <div className="nk-notification-time">2 hrs ago</div>
                        </div>
                      </div>
                      <div className="nk-notification-item dropdown-inner">
                        <div className="nk-notification-icon">
                          <em className="icon icon-circle bg-success-dim ni ni-curve-down-left" />
                        </div>
                        <div className="nk-notification-content">
                          <div className="nk-notification-text">Your <span>Deposit Order</span> is placed </div>
                          <div className="nk-notification-time">2 hrs ago</div>
                        </div>
                      </div>
                      <div className="nk-notification-item dropdown-inner">
                        <div className="nk-notification-icon">
                          <em className="icon icon-circle bg-warning-dim ni ni-curve-down-right" />
                        </div>
                        <div className="nk-notification-content">
                          <div className="nk-notification-text">You have requested to <span>Widthdrawl</span>
                          </div>
                          <div className="nk-notification-time">2 hrs ago</div>
                        </div>
                      </div>
                      <div className="nk-notification-item dropdown-inner">
                        <div className="nk-notification-icon">
                          <em className="icon icon-circle bg-success-dim ni ni-curve-down-left" />
                        </div>
                        <div className="nk-notification-content">
                          <div className="nk-notification-text">Your <span>Deposit Order</span> is placed </div>
                          <div className="nk-notification-time">2 hrs ago</div>
                        </div>
                      </div>
                    </div>{/* .nk-notification */}
                  </div>{/* .nk-dropdown-body */} <div className="dropdown-foot center">
                    <a href="#">View All</a>
                  </div>
                </div>
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
