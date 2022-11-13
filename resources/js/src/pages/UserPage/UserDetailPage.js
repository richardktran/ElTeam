import React from 'react'

function UserDetailPage() {
  return (
    <div className="container-xl wide-xl">
      <div className="nk-content-inner">
        <div className="nk-content-body">
          <div className="nk-block-head nk-block-head-sm">
            <div className="nk-block-between g-3">
              <div className="nk-block-head-content">
                <h3 className="nk-block-title page-title"><strong className="text-primary small">Abu Bin Ishtiyak</strong>
                </h3>
                <div className="nk-block-des text-soft">
                  <ul className="list-inline">
                    <li>ID: <span className="text-base">UD003054</span>
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
                <div className="card-content"> {/* .nav-tabs */}
                  <div className="card-inner">
                    <div className="nk-block">
                      <div className="nk-block-head">
                        <h5 className="title">Thông tin cơ bản</h5>
                      </div>{/* .nk-block-head */}
                      <div className="profile-ud-list">

                        <div className="profile-ud-item">
                          <div className="profile-ud wider">
                            <span className="profile-ud-label">Họ và tên</span>
                            <span className="profile-ud-value">Trần Đăng Khoa</span>
                          </div>
                        </div>
                        <div className="profile-ud-item">
                          <div className="profile-ud wider">
                            <span className="profile-ud-label">Ngày sinh</span>
                            <span className="profile-ud-value">10 Aug, 1980</span>
                          </div>
                        </div>
                        <div className="profile-ud-item">
                          <div className="profile-ud wider">
                            <span className="profile-ud-label">Số điện thoại</span>
                            <span className="profile-ud-value">01713040400</span>
                          </div>
                        </div>
                        <div className="profile-ud-item">
                          <div className="profile-ud wider">
                            <span className="profile-ud-label">Địa chỉ email</span>
                            <span className="profile-ud-value">info@softnio.com</span>
                          </div>
                        </div>
                      </div>{/* .profile-ud-list */}

                    </div>{/* .nk-block */}
                    <div className="nk-block">
                      <div className="nk-block-head nk-block-head-line">
                        <h6 className="title overline-title text-base">Thông tin thêm</h6>
                      </div>{/* .nk-block-head */}
                      <div className="profile-ud-list">
                        <div className="profile-ud-item">
                          <div className="profile-ud wider">
                            <span className="profile-ud-label">Ngày tham gia</span>
                            <span className="profile-ud-value">08-16-2018 09:04PM</span>
                          </div>
                        </div>
                        <div className="profile-ud-item">
                          <div className="profile-ud wider">
                            <span className="profile-ud-label">Tình trạng</span>
                            <span className="profile-ud-value">Chưa kích hoạt</span>
                          </div>
                        </div>
                        <div className="profile-ud-item">
                          <div className="profile-ud wider">
                            <span className="profile-ud-label">Số khóa học tham gia</span>
                            <span className="profile-ud-value">4</span>
                          </div>
                        </div>
                        <div className="profile-ud-item">
                          <div className="profile-ud wider">
                            <span className="profile-ud-label">Số khóa học đã tạo</span>
                            <span className="profile-ud-value">5</span>
                          </div>
                        </div>

                      </div>{/* .profile-ud-list */}

                    </div>{/* .nk-block */}

                    <div className="nk-divider divider md" />
                    <div className="nk-block">
                      <div className="nk-block-head nk-block-head-sm nk-block-between">
                        <h5 className="title">Admin Note</h5>
                        <a href="#" className="link link-sm">+ Add Note</a>
                      </div>{/* .nk-block-head */}
                      <div className="bq-note">
                        <div className="bq-note-item">
                          <div className="bq-note-text">
                            <p>Aproin at metus et dolor tincidunt feugiat eu id quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean sollicitudin non nunc vel pharetra. </p>
                          </div>
                          <div className="bq-note-meta">
                            <span className="bq-note-added">Added on <span className="date">November 18, 2019</span> at <span className="time">5:34 PM</span>
                            </span>
                            <span className="bq-note-sep sep">|</span>
                            <span className="bq-note-by">By <span>Softnio</span>
                            </span>
                            <a href="#" className="link link-sm link-danger">Delete Note</a>
                          </div>
                        </div>{/* .bq-note-item */}
                        <div className="bq-note-item">
                          <div className="bq-note-text">
                            <p>Aproin at metus et dolor tincidunt feugiat eu id quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean sollicitudin non nunc vel pharetra. </p>
                          </div>
                          <div className="bq-note-meta">
                            <span className="bq-note-added">Added on <span className="date">November 18, 2019</span> at <span className="time">5:34 PM</span>
                            </span>
                            <span className="bq-note-sep sep">|</span>
                            <span className="bq-note-by">By <span>Softnio</span>
                            </span>
                            <a href="#" className="link link-sm link-danger">Delete Note</a>
                          </div>
                        </div>{/* .bq-note-item */}

                      </div>{/* .bq-note */}

                    </div>{/* .nk-block */}

                  </div>{/* .card-inner */}
                </div>{/* .card-content */}
                <div className="card-aside card-aside-right user-aside toggle-slide toggle-slide-right toggle-break-xxl toggle-screen-xxl" data-content="userAside" data-toggle-screen="xxl" data-toggle-overlay="true" data-toggle-body="true">
                  <div className="card-inner-group" data-simplebar="init">
                    <div className="simplebar-wrapper" style={{ margin: '0px' }}>
                      <div className="simplebar-height-auto-observer-wrapper">
                        <div className="simplebar-height-auto-observer" />
                      </div>
                      <div className="simplebar-mask">
                        <div className="simplebar-offset" style={{ right: '0px', bottom: '0px' }}>
                          <div className="simplebar-content-wrapper" style={{ height: 'auto', overflow: 'hidden scroll' }}>
                            <div className="simplebar-content" style={{ padding: '0px' }}>
                              <div className="card-inner">
                                <div className="user-card user-card-s2">
                                  <div className="user-avatar lg bg-primary">
                                    <span>AB</span>
                                  </div>
                                  <div className="user-info">
                                    <div className="badge badge-outline-light badge-pill ucap">Investor</div>
                                    <h5>Abu Bin Ishtiyak</h5>
                                    <span className="sub-text">info@softnio.com</span>
                                  </div>
                                </div>
                              </div>{/* .card-inner */}
                              <div className="card-inner card-inner-sm">
                                <ul className="btn-toolbar justify-center gx-1">
                                  <li>
                                    <a href="#" className="btn btn-trigger btn-icon">
                                      <em className="icon ni ni-shield-off" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" className="btn btn-trigger btn-icon">
                                      <em className="icon ni ni-mail" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" className="btn btn-trigger btn-icon">
                                      <em className="icon ni ni-download-cloud" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" className="btn btn-trigger btn-icon">
                                      <em className="icon ni ni-bookmark" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" className="btn btn-trigger btn-icon text-danger">
                                      <em className="icon ni ni-na" />
                                    </a>
                                  </li>
                                </ul>
                              </div>{/* .card-inner */}
                              <div className="card-inner">
                                <div className="overline-title-alt mb-2">In Account</div>
                                <div className="profile-balance">
                                  <div className="profile-balance-group gx-4">
                                    <div className="profile-balance-sub">
                                      <div className="profile-balance-amount">
                                        <div className="number">2,500.00 <small className="currency currency-usd">USD</small>
                                        </div>
                                      </div>
                                      <div className="profile-balance-subtitle">Invested Amount</div>
                                    </div>
                                    <div className="profile-balance-sub">
                                      <span className="profile-balance-plus text-soft">
                                        <em className="icon ni ni-plus" />
                                      </span>
                                      <div className="profile-balance-amount">
                                        <div className="number">1,643.76</div>
                                      </div>
                                      <div className="profile-balance-subtitle">Profit Earned</div>
                                    </div>
                                  </div>
                                </div>
                              </div>{/* .card-inner */}
                              <div className="card-inner">
                                <div className="row text-center">
                                  <div className="col-4">
                                    <div className="profile-stats">
                                      <span className="amount">23</span>
                                      <span className="sub-text">Total Order</span>
                                    </div>
                                  </div>
                                  <div className="col-4">
                                    <div className="profile-stats">
                                      <span className="amount">20</span>
                                      <span className="sub-text">Complete</span>
                                    </div>
                                  </div>
                                  <div className="col-4">
                                    <div className="profile-stats">
                                      <span className="amount">3</span>
                                      <span className="sub-text">Progress</span>
                                    </div>
                                  </div>
                                </div>
                              </div>{/* .card-inner */}
                              <div className="card-inner">
                                <h6 className="overline-title-alt mb-2">Additional</h6>
                                <div className="row g-3">
                                  <div className="col-6">
                                    <span className="sub-text">User ID:</span>
                                    <span>UD003054</span>
                                  </div>
                                  <div className="col-6">
                                    <span className="sub-text">Last Login:</span>
                                    <span>15 Feb, 2019 01:02 PM</span>
                                  </div>
                                  <div className="col-6">
                                    <span className="sub-text">KYC Status:</span>
                                    <span className="lead-text text-success">Approved</span>
                                  </div>
                                  <div className="col-6">
                                    <span className="sub-text">Register At:</span>
                                    <span>Nov 24, 2019</span>
                                  </div>
                                </div>
                              </div>{/* .card-inner */}
                              <div className="card-inner">
                                <h6 className="overline-title-alt mb-3">Groups</h6>
                                <ul className="g-1">
                                  <li className="btn-group">
                                    <a className="btn btn-xs btn-light btn-dim" href="#">investor</a>
                                    <a className="btn btn-xs btn-icon btn-light btn-dim" href="#">
                                      <em className="icon ni ni-cross" />
                                    </a>
                                  </li>
                                  <li className="btn-group">
                                    <a className="btn btn-xs btn-light btn-dim" href="#">support</a>
                                    <a className="btn btn-xs btn-icon btn-light btn-dim" href="#">
                                      <em className="icon ni ni-cross" />
                                    </a>
                                  </li>
                                  <li className="btn-group">
                                    <a className="btn btn-xs btn-light btn-dim" href="#">another tag</a>
                                    <a className="btn btn-xs btn-icon btn-light btn-dim" href="#">
                                      <em className="icon ni ni-cross" />
                                    </a>
                                  </li>
                                </ul>
                              </div>{/* .card-inner */}

                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="simplebar-placeholder" style={{ width: 'auto', height: '870px' }} />
                    </div>
                    <div className="simplebar-track simplebar-horizontal" style={{ visibility: 'hidden' }}>
                      <div className="simplebar-scrollbar" style={{ width: '0px', display: 'none' }} />
                    </div>
                    <div className="simplebar-track simplebar-vertical" style={{ visibility: 'visible' }}>
                      <div className="simplebar-scrollbar" style={{ height: '124px', transform: 'translate3d(0px, 0px, 0px)', display: 'block' }} />
                    </div>
                  </div>{/* .card-inner */}

                </div>{/* .card-aside */}

              </div>{/* .card-aside-wrap */}

            </div>{/* .card */}

          </div>{/* .nk-block */}
        </div>
      </div>
    </div>
  )
}

export default UserDetailPage