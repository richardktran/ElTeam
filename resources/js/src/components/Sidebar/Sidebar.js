import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { changeActiveItem } from '../../app/reducers/sideBarReducer';

function Sidebar({ props }) {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const sidebarItems = useSelector(state => state.sidebar);

  const changeItem = (path) => {
    const newPath = location.pathname.split('/').slice(0, -1).join('/') + '/' + path;
    const action = changeActiveItem(path);
    dispatch(action);
    navigate(newPath);
  }

  return (
    <div className="nk-sidebar nk-sidebar-fixed is-light" data-content="sidebarMenu">
      <div className="nk-sidebar-element nk-sidebar-head">
        <div className="nk-sidebar-brand">
          <a href="html/index.html" className="logo-link nk-sidebar-logo">
            <img className="logo-light logo-img" src="./images/logo.png" srcSet="./images/logo2x.png 2x" alt="logo" />
            <img className="logo-dark logo-img" src="./images/logo-dark.png" srcSet="./images/logo-dark2x.png 2x" alt="logo-dark" />
            <img className="logo-small logo-img logo-img-small" src="./images/logo-small.png" srcSet="./images/logo-small2x.png 2x" alt="logo-small" />
          </a>
        </div>
        <div className="nk-menu-trigger mr-n2">
          <a href="#" className="nk-nav-toggle nk-quick-nav-icon d-xl-none" data-target="sidebarMenu">
            <em className="icon ni ni-arrow-left" />
          </a>
          <a href="#" className="nk-nav-compact nk-quick-nav-icon d-none d-xl-inline-flex" data-target="sidebarMenu">
            <em className="icon ni ni-menu" />
          </a>
        </div>
      </div> {/* .nk-sidebar-element */} <div className="nk-sidebar-element">
        <div className="nk-sidebar-content">
          <div className="nk-sidebar-menu" data-simplebar="init">
            <div className="simplebar-wrapper" style={{ margin: '-16px 0px -40px' }}>
              <div className="simplebar-height-auto-observer-wrapper">
                <div className="simplebar-height-auto-observer" />
              </div>
              <div className="simplebar-mask">
                <div className="simplebar-offset" style={{ right: '0px', bottom: '0px' }}>
                  <div className="simplebar-content-wrapper" style={{ height: '100%', overflow: 'hidden scroll' }}>
                    <div className="simplebar-content" style={{ padding: '16px 0px 40px' }}>
                      <ul className="nk-menu">
                        <li className="nk-menu-heading">
                          <h6 className="overline-title text-primary-alt">Dashboards</h6>
                        </li>
                        {sidebarItems.map((item, index) => (
                          <li className={`nk-menu-item ${item.active ? "active current-page" : ""}`} key={index}>
                            <a onClick={() => changeItem(item.path)} className="nk-menu-link" data-original-title title>
                              <span className="nk-menu-icon">
                                <em className={item.icon} />
                              </span>
                              <span className="nk-menu-text">{item.title}</span>
                            </a>
                          </li>
                        ))}
                      </ul> {/* .nk-menu */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="simplebar-placeholder" style={{ width: 'auto', height: '1522px' }} />
            </div>
            <div className="simplebar-track simplebar-horizontal" style={{ visibility: 'hidden' }}>
              <div className="simplebar-scrollbar" style={{ width: '0px', display: 'none', transform: 'translate3d(0px, 0px, 0px)' }} />
            </div>
            <div className="simplebar-track simplebar-vertical" style={{ visibility: 'visible' }}>
              <div className="simplebar-scrollbar" style={{ height: '104px', transform: 'translate3d(0px, 0px, 0px)', display: 'block' }} />
            </div>
          </div>{/* .nk-sidebar-menu */}
        </div>{/* .nk-sidebar-content */}
      </div>{/* .nk-sidebar-element */}
    </div>
  )
}

export default Sidebar
