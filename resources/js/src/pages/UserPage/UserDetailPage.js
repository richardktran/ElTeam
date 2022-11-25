import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { userApi } from '../../api/userApi';
import Avatar from '../../components/Avatar/Avatar'
import { HTTP_OK } from '../../utils/constant';

function UserDetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    let result = await userApi.getById(id);
    if (result.status === HTTP_OK) {
      const { data } = result.data;
      setUser(data);
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);



  return (
    <div className="container-xl wide-xl">
      {user !== null && (
        <div className="nk-content-inner">
          <div className="nk-content-body">
            <div className="nk-block-head nk-block-head-sm">
              <div className="nk-block-between g-3">
                <div className="nk-block-head-content">
                  <h3 className="nk-block-title page-title"><strong className="text-primary small">{user.name}</strong>
                  </h3>
                  <div className="nk-block-des text-soft">
                    <ul className="list-inline">
                      <li>User ID: <span className="text-base">#{user.id}</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="nk-block-head-content">
                  <a href="/courses" className="btn btn-outline-light bg-white d-none d-sm-inline-flex">
                    <em className="icon ni ni-arrow-left" />
                    <span>Về trang chủ</span>
                  </a>
                  <a href="html/user-list-regular.html" className="btn btn-icon btn-outline-light bg-white d-inline-flex d-sm-none">
                    <em className="icon ni ni-arrow-left" />
                  </a>
                </div>
              </div>
            </div>{/* .nk-block-head */}
            <div className="nk-block">
              <div className="card card-bordered">
                <div className="card-aside-wrap">
                  <div className="card-content mt-4"> {/* .nav-tabs */}
                    <div className="card-inner ">
                      <div className="nk-block">
                        <div className="nk-block-head">
                          <h5 className="title">Thông tin cơ bản</h5>
                        </div>{/* .nk-block-head */}
                        <div className="profile-ud-list">

                          <div className="profile-ud-item">
                            <div className="profile-ud wider">
                              <span className="profile-ud-label">Họ và tên</span>
                              <span className="profile-ud-value">{user.name}</span>
                            </div>
                          </div>
                          <div className="profile-ud-item">
                            <div className="profile-ud wider">
                              <span className="profile-ud-label">Ngày sinh</span>
                              <span className="profile-ud-value">Chưa thiết lập</span>
                            </div>
                          </div>
                          <div className="profile-ud-item">
                            <div className="profile-ud wider">
                              <span className="profile-ud-label">Số điện thoại</span>
                              <span className="profile-ud-value">Chưa thiết lập</span>
                            </div>
                          </div>
                          <div className="profile-ud-item">
                            <div className="profile-ud wider">
                              <span className="profile-ud-label">Địa chỉ email</span>
                              <span className="profile-ud-value">{user.email}</span>
                            </div>
                          </div>
                        </div>{/* .profile-ud-list */}
                      </div>{/* .nk-block */}
                      <div className="nk-divider divider md" />
                      <div className="nk-block">
                        <div className="nk-block-head nk-block-head-line">
                          <h6 className="title">Thông tin thêm</h6>
                        </div>{/* .nk-block-head */}
                        <div className="profile-ud-list">
                          <div className="profile-ud-item">
                            <div className="profile-ud wider">
                              <span className="profile-ud-label">Ngày tham gia</span>
                              <span className="profile-ud-value">{new Date(user.created_at).toLocaleString()}</span>
                            </div>
                          </div>
                          <div className="profile-ud-item">
                            <div className="profile-ud wider">
                              <span className="profile-ud-label">Lớp học tham gia</span>
                              <span className="profile-ud-value">4</span>
                            </div>
                          </div>
                          <div className="profile-ud-item">
                            <div className="profile-ud wider">
                              <span className="profile-ud-label">Tình trạng</span>
                              <span className={`profile-ud-value text-${user.status === 1 ? "primary" : "danger"}`}>{user.status === 1 ? "Kích hoạt" : "Chưa kích hoạt"}</span>
                            </div>
                          </div>

                          <div className="profile-ud-item">
                            <div className="profile-ud wider">
                              <span className="profile-ud-label">Lớp học đã tạo</span>
                              <span className="profile-ud-value">5</span>
                            </div>
                          </div>

                        </div>{/* .profile-ud-list */}

                      </div>{/* .nk-block */}



                    </div>{/* .card-inner */}
                  </div>{/* .card-content */}
                  <div className="card-aside card-aside-right user-aside" style={{ minHeight: '100% !important' }}>
                    <div className="card-inner-group" data-simplebar="init">
                      <div className="simplebar-wrapper" style={{ margin: '0px' }}>
                        <div className="simplebar-height-auto-observer-wrapper">
                          <div className="simplebar-height-auto-observer" />
                        </div>
                        <div className="simplebar-mask">
                          <div className="simplebar-offset" style={{ right: '0px', bottom: '0px' }}>
                            <div className="simplebar-content-wrapper" style={{ height: 'auto', overflow: 'hidden scroll' }}>
                              <div className="simplebar-content" style={{ padding: '0px' }}>
                                <div className="card-inner pt-3 pb-3">
                                  <div className="user-card user-card-s2">
                                    <Avatar name={user.name} image={user.avatar} size='lg' />
                                    <div className="user-info">
                                      <h5>{user.name}</h5>
                                      <span className="sub-text">{user.email}</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="card-inner">
                                  <h6 className="overline-title-alt mb-1">Additional</h6>
                                  <div className="row g-2">
                                    <div className="col-6">
                                      <span className="sub-text">User ID:</span>
                                      <span>#{user.id}</span>
                                    </div>
                                    <div className="col-6">
                                      <span className="sub-text">Last Login:</span>
                                      <span>15 Feb, 2019 01:02 PM</span>
                                    </div>
                                    <div className="col-6">
                                      <span className="sub-text">Tình trạng:</span>
                                      <span className={`lead-text text-${user.status === 1 ? "primary" : "danger"}`}>{user.status === 1 ? "Kích hoạt" : "Chưa kích hoạt"}</span>
                                    </div>
                                    <div className="col-6">
                                      <span className="sub-text">Ngày tham gia:</span>
                                      <span>{new Date(user.created_at).toLocaleString()}</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="simplebar-placeholder" style={{ width: 'auto', height: '400px' }} />
                      </div>
                    </div>{/* .card-inner */}

                  </div>{/* .card-aside */}

                </div>{/* .card-aside-wrap */}

              </div>{/* .card */}

            </div>{/* .nk-block */}
          </div>
        </div>
      )}
    </div>
  )
}

export default UserDetailPage