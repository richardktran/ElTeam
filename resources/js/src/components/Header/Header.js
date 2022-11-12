import React from 'react'
import UserControl from '../UserControl/UserControl'
import Chat from './Chat'
import Notifications from './Notifications'

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
          </div>{/* .nk-header-brand */}
          <div className="nk-header-search ml-3 ml-xl-0">
            <em className="icon ni ni-search" />
            <input type="text" className="form-control border-transparent form-focus-none" placeholder="Search anything" />
          </div>{/* .nk-header-news */}
          <div className="nk-header-tools">
            <ul className="nk-quick-nav">
              <li className="dropdown chats-dropdown hide-mb-xs">
                <Chat />
              </li>
              <li className="dropdown notification-dropdown">
                <Notifications />
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
