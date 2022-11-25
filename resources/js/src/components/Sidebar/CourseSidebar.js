import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useUser from '../../hooks/useUser';
import { checkMatchPatternWithCourse } from '../../utils/sidebar';

function CourseSidebar({ pathname }) {
  const course = useSelector(state => state.course.courseInfo);
  const currentUser = useUser();
  const [isOwner, setIsOwner] = React.useState(false);
  const [items, setItems] = React.useState(null);

  useEffect(() => {
    if (Object.keys(course).length === 0 && course.constructor === Object) {
      return;
    }
    if (course) {
      setIsOwner(course.teacher.id === currentUser.id);
    }
  }, [course]);

  useEffect(() => {
    if (isOwner) {
      setItems(ownerCourseItems);
    } else {
      setItems(courseItems);
    }
  }, [isOwner]);

  useEffect(() => {
    console.log(isOwner);
    if (isOwner) {
      setItems(ownerCourseItems);
    } else {
      setItems(courseItems);
    }
  }, []);

  const courseItems = [
    {
      icon: "icon ni ni-cart-fill",
      pathPattern: "/courses/*/lesson",
      title: 'Bài học',
    },
    {
      icon: "icon ni ni-growth-fill",
      pathPattern: "/courses/*/members",
      title: 'Danh sách thành viên',
    },
    {
      icon: "icon ni ni-activity-round-fill",
      pathPattern: "/courses/*/my-group",
      title: 'Nhóm của tôi',
    },
    {
      icon: "icon ni ni-users-fill",
      pathPattern: "/courses/*/settings",
      title: 'Cài đặt',
    },
  ];

  const ownerCourseItems = [
    {
      icon: "icon ni ni-cart-fill",
      pathPattern: "/courses/*/lesson",
      title: 'Bài học',
    },
    {
      icon: "icon ni ni-growth-fill",
      pathPattern: "/courses/*/members",
      title: 'Danh sách thành viên',
    },
    {
      icon: "icon ni ni-activity-round-fill",
      pathPattern: "/courses/*/groups",
      title: 'Danh sách nhóm',
    },
    {
      icon: "icon ni ni-users-fill",
      pathPattern: "/courses/*/settings",
      title: 'Cài đặt',
    },
  ];

  const getUrl = (pathPattern) => {
    const courseId = pathname.split('/')[2];
    return pathPattern.replace('*', courseId);
  }

  return (
    <div className="nk-sidebar nk-sidebar-fixed is-light" data-content="sidebarMenu">
      <div className="nk-sidebar-element nk-sidebar-head">
        <div className="nk-sidebar-brand">
          <a href="/" className="logo-link nk-sidebar-logo">
            <img width={200} height={50} className="logo-img logo-img-lg" src="/images/elteam_logo.png" alt="logo-small" />
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
                        {items && items.map((item, index) => {
                          // Check the current location url matches the item's path pattern
                          const isActive = checkMatchPatternWithCourse(pathname, item.pathPattern);
                          return (
                            <li className={`nk-menu-item ${isActive ? "active current-page" : ""}`} key={index}>
                              <Link to={getUrl(item.pathPattern)} className="nk-menu-link" data-original-title title>
                                <span className="nk-menu-icon">
                                  <em className={item.icon} />
                                </span>
                                <span className="nk-menu-text">{item.title}</span>
                              </Link>
                            </li>
                          );
                        })}
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

export default CourseSidebar
