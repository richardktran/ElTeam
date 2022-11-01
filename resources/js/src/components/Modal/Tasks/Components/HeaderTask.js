import React from 'react'

function HeaderTask(props) {
  const { id, title } = props;
  return (
    <>
      <div className="d-none d-lg-block">
        <ul className="nk-msg-tags">
          <li>
            <span className="label-tag">
              <em className="icon ni ni-flag-fill" />
              <span>CT247-{id}</span>
            </span>
          </li>
        </ul>
      </div>
      <div className="nk-msg-head-meta">
        <h4 className="title align-items-center d-none d-lg-block mt-3">
          {title}
        </h4>
        <div className="d-lg-none">
          <a href="#" className="btn btn-icon btn-trigger nk-msg-hide ml-n1">
            <em className="icon ni ni-arrow-left" />
          </a>
        </div>
        <ul className="nk-msg-actions">
          <li>
            <a href="#" className="btn btn-dim btn-sm btn-outline-light">
              <em className="icon ni ni-check" />
              <span>Mark as Closed</span>
            </a>
          </li>
          <li className="d-lg-none">
            <a href="#" className="btn btn-icon btn-sm btn-white btn-light profile-toggle">
              <em className="icon ni ni-info-i" />
            </a>
          </li>
          <li className="dropdown">
            <a href="#" className="btn btn-icon btn-sm btn-white btn-light dropdown-toggle" data-toggle="dropdown">
              <em className="icon ni ni-more-h" />
            </a>
            <div className="dropdown-menu dropdown-menu-right">
              <ul className="link-list-opt no-bdr">
                <li>
                  <a href="#">
                    <em className="icon ni ni-user-add" />
                    <span>Assign To Member</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <em className="icon ni ni-archive" />
                    <span>Move to Archive</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <em className="icon ni ni-done" />
                    <span>Mark as Close</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}

export default HeaderTask