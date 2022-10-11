import React from 'react'

const MemberList = (props) => {
  const { members, isOwner } = props;

  const getAvatarName = (name) => {
    var matches = name.match(/\b(\w)/g);
    var acronym = matches.join('');

    if (acronym.length < 2) {
      acronym = name.charAt(0) + name.charAt(1);
    }

    return acronym.toUpperCase();
  }

  const getNameFromEmail = (email) => {
    let name = email.split('@')[0];
    name = name[0].toUpperCase() + name.slice(1);

    return name;
  }

  return (
    <div className="nk-tb-list is-separate mb-3">
      <div className="nk-tb-item nk-tb-head">
        <div className="nk-tb-col nk-tb-col-check">
          <div className="custom-control custom-control-sm custom-checkbox notext">
            <input type="checkbox" className="custom-control-input" id="uid" />
            <label className="custom-control-label" htmlFor="uid" />
          </div>
        </div>
        <div className="nk-tb-col">
          <span className="sub-text">Học viên</span>
        </div>
        <div className="nk-tb-col tb-col-mb">
          <span className="sub-text">Vai trò</span>
          {/* Sinh viên hoặc trưởng nhóm */}
        </div>
        <div className="nk-tb-col tb-col-md">
          <span className="sub-text">Nhóm</span>
        </div>
        <div className="nk-tb-col tb-col-lg">
          <span className="sub-text">Ngày vào lớp</span>
        </div>
        <div className="nk-tb-col tb-col-md">
          <span className="sub-text">Trạng thái</span>
        </div>
        <div className="nk-tb-col nk-tb-col-tools">
          <ul className="nk-tb-actions gx-1 my-n1">
            <li>
              <div className="drodown">
                <a href="#" className="dropdown-toggle btn btn-icon btn-trigger mr-n1" data-toggle="dropdown" aria-expanded="false">
                  <em className="icon ni ni-more-h" />
                </a>
                <div className="dropdown-menu dropdown-menu-right" style={{}}>
                  <ul className="link-list-opt no-bdr">
                    <li>
                      <a href="#">
                        <em className="icon ni ni-mail" />
                        <span>Gửi email cho mọi người</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <em className="icon ni ni-na" />
                        <span>Suspend Selected</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <em className="icon ni ni-trash" />
                        <span>Remove Seleted</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <em className="icon ni ni-shield-star" />
                        <span>Reset Password</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {members.map((member, index) => {
        const status = member.pivot.status;
        const email = member.email;
        const name = getNameFromEmail(email);
        const prefixName = getAvatarName(name);
        return (
          <div className="nk-tb-item">
            <div className="nk-tb-col nk-tb-col-check">
              <div className="custom-control custom-control-sm custom-checkbox notext">
                <input type="checkbox" className="custom-control-input" id={email} />
                <label className="custom-control-label" htmlFor={email} />
              </div>
            </div>
            <div className="nk-tb-col">
              <a href="html/ecommerce/customer-details.html">
                <div className="user-card">
                  {member.avatar === null ? (
                    <div className="user-avatar bg-primary">
                      <span>{prefixName}</span>
                    </div>
                  ) : (
                    <div class="user-avatar sm">
                      <img src="https://lh3.googleusercontent.com/a-/ACNPEu96hM4PtUF1ByN0JYz9R4DixV550SybNX--uMpV=s96-c" alt="" />
                    </div>
                  )}
                  <div className="user-info">
                    <span className="tb-lead">
                      {member.name ?? name}
                      <span className="dot dot-success d-md-none ml-1" />
                    </span>
                    <span>{member.email}</span>
                  </div>
                </div>
              </a>
            </div>
            <div className="nk-tb-col tb-col-mb">
              <span className="tb-amount">
                Sinh viên
              </span>
            </div>
            <div className="nk-tb-col tb-col-md">
              <span>Chưa phân nhóm</span>
            </div>
            <div className="nk-tb-col tb-col-lg">
              <span>10 Feb 2020</span>
            </div>
            <div className="nk-tb-col tb-col-md">
              <span className={`tb-status text-${status === 'accepted' ? 'success' : status === 'pending' ? 'warning' : 'danger'}`}>
                {status === 'accepted' ?
                  'Đã chấp nhận' :
                  status === 'pending' ? 'Đang chờ' : 'Đã từ chối'
                }
              </span>
            </div>
            <div className="nk-tb-col nk-tb-col-tools">
              <ul className="nk-tb-actions gx-1">
                <li>
                  <div className="drodown">
                    <a href="#" className="dropdown-toggle btn btn-icon btn-trigger" data-toggle="dropdown">
                      <em className="icon ni ni-more-h" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <ul className="link-list-opt no-bdr">
                        <li>
                          <a href="html/ecommerce/customer-details.html">
                            <em className="icon ni ni-eye" />
                            <span>Chi tiết</span>
                          </a>
                        </li>
                        {isOwner && (
                          <>
                            <li>
                              <a href="#">
                                <em className="icon ni ni-repeat" />
                                <span>Xếp nhóm</span>
                              </a>
                            </li>
                            <li className="divider" />
                            <li>
                              <a href="#">
                                <em className="icon ni ni-shield-star" />
                                <span>Gửi lời mời</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <em className="icon ni ni-na" />
                                <span>Xóa khỏi lớp</span>
                              </a>
                            </li>
                          </>
                        )}
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        );
      })}


    </div>

  );
}

export default MemberList