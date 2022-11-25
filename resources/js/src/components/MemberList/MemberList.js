import { isEmpty } from 'lodash';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import Skeleton from 'react-loading-skeleton';
import RandomDivideGroupModel from '../Modal/RandomDivideGroupModel';

const MemberList = (props) => {
  const { members, isOwner, handleRandomDivide, isLoading, setIsShowAddModal } = props;
  const [showRandomFormModel, setShowRandomFormModel] = useState(false);


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

  const handleRandomDivideGroup = async (values) => {
    await handleRandomDivide(values.groupSize);

    toast.success('Phân nhóm thành công');
    setShowRandomFormModel(false);

  }

  return (
    <>
      {isEmpty(members) && members !== null &&
        <div style={{
          minHeight: "50vh",
        }}
          className="d-flex flex-column align-items-center justify-content-center"
        >
          <img src="https://www.gstatic.com/classroom/empty_states_home.svg" />
          <h6 className="mt-3">Chưa có thành viên nào tham gia khóa học này</h6>
          {isOwner && <div className="btn btn-primary mt-3" onClick={() => setIsShowAddModal(true)}>Thêm thành viên</div>}
        </div>
      }
      <div className="nk-tb-list is-separate mb-3">
        {(!isEmpty(members) || members === null) &&
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
                        {isOwner && (
                          <li>
                            <a href="#" onClick={() => setShowRandomFormModel(true)}>
                              <em className="icon ni ni-mail" />
                              <span>Phân nhóm ngẫu nhiên</span>
                            </a>
                          </li>
                        )}
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
        }
        {(isLoading || members === null) &&
          [...Array(40)].map((item, index) => (
            <Loading />
          ))
        }
        {!isLoading && members && members.map((member, index) => {
          const status = member.pivot.status;
          const email = member.email;
          const group = member.group;
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
                        <img src={member.avatar} alt="" />
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
                <span>{group ? (group.name ?? group.number) : "Chưa phân nhóm"}</span>
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
                          <li>
                            <a href="#">
                              <em className="icon ni ni-repeat" />
                              <span>Mời đổi nhóm</span>
                            </a>
                          </li>
                          {isOwner && (
                            <>
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

        <RandomDivideGroupModel
          modalName="Phân nhóm ngẫu nhiên"
          onFinish={handleRandomDivideGroup}
          isShow={showRandomFormModel}
          handleCloseModal={() => setShowRandomFormModel(false)}
        />
      </div>
    </>
  );
}

const Loading = () => {
  return (
    <div className="nk-tb-item">
      <div className="nk-tb-col nk-tb-col-check">
        <div className="custom-control custom-control-sm custom-checkbox notext">
          <input type="checkbox" className="custom-control-input" />
          <label className="custom-control-label" />
        </div>
      </div>
      <div className="nk-tb-col">
        <a href="html/ecommerce/customer-details.html">
          <div className="user-card">
            <Skeleton circle={true} className="mr-2" height={40} width={40} />
            <div className="user-info">
              <span className="tb-lead">
                <Skeleton width={50} />
              </span>
              <span>
                <Skeleton width={100} />
              </span>
            </div>
          </div>
        </a>
      </div>
      <div className="nk-tb-col tb-col-mb">
        <span className="tb-amount">
          <Skeleton width={100} height={`1.2rem`} />
        </span>
      </div>
      <div className="nk-tb-col tb-col-md">
        <span>
          <Skeleton width={100} height={`1.2rem`} />
        </span>
      </div>
      <div className="nk-tb-col tb-col-lg">
        <Skeleton width={100} height={`1.2rem`} />
      </div>
      <div className="nk-tb-col tb-col-md">
        <Skeleton width={100} height={`1.2rem`} />
      </div>
      <div className="nk-tb-col nk-tb-col-tools">
        <ul className="nk-tb-actions gx-1">
          <li>
            <div className="drodown">
              <a href="#" className="dropdown-toggle btn btn-icon btn-trigger" data-toggle="dropdown">
                <em className="icon ni ni-more-h" />
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MemberList
