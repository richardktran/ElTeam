import React from 'react'

function CommentTask() {
  return (
    <div className="nk-msg-reply nk-reply" data-simplebar="init">
      <div className="simplebar-wrapper" style={{ margin: '0px' }}>
        <div className="simplebar-height-auto-observer-wrapper">
          <div className="simplebar-height-auto-observer" />
        </div>
        <div className="simplebar-mask">
          <div className="simplebar-offset" style={{ right: '0px', bottom: '0px' }}>
            <div className="simplebar-content-wrapper" style={{ height: '100%', overflow: 'hidden scroll' }}>
              <div className="simplebar-content" style={{ padding: '0px' }}>
                <div className="nk-reply-item">
                  <div className="nk-reply-header">
                    <div className="user-card">
                      <div className="user-avatar sm bg-blue">
                        <span>AB</span>
                      </div>
                      <div className="user-name">Abu Bin Ishtiyak</div>
                    </div>
                    <div className="date-time">14 Jan, 2020</div>
                  </div>
                  <div className="nk-reply-body">
                    <div className="nk-reply-entry entry">
                      <p>Hello team,</p>
                      <p>I am facing problem as i can not select currency on buy order page. Can you guys let me know what i am doing doing wrong? Please check attached files.</p>
                      <p>Thank you <br /> Ishityak </p>
                    </div>
                    <div className="attach-files">
                      <ul className="attach-list">
                        <li className="attach-item">
                          <a className="download" href="#">
                            <em className="icon ni ni-img" />
                            <span>error-show-On-order.jpg</span>
                          </a>
                        </li>
                        <li className="attach-item">
                          <a className="download" href="#">
                            <em className="icon ni ni-img" />
                            <span>full-page-error.jpg</span>
                          </a>
                        </li>
                      </ul>
                      <div className="attach-foot">
                        <span className="attach-info">2 files attached</span>
                        <a className="attach-download link" href="#">
                          <em className="icon ni ni-download" />
                          <span>Download All</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* .nk-reply-item */}
                <div className="nk-reply-item">
                  <div className="nk-reply-header">
                    <div className="user-card">
                      <div className="user-avatar sm bg-pink">
                        <span>ST</span>
                      </div>
                      <div className="user-name">Support Team <span>(You)</span>
                      </div>
                    </div>
                    <div className="date-time">14 Jan, 2020</div>
                  </div>
                  <div className="nk-reply-body">
                    <div className="nk-reply-entry entry">
                      <p>Hello Ishtiyak,</p>
                      <p>We are really sorry to hear that, you have face an unexpected experience. Our team urgently look this matter and get back to you asap. </p>
                      <p>Thank you very much. </p>
                    </div>
                    <div className="nk-reply-from"> Replied by <span>Iliash Hossain</span> at 11:32 AM </div>
                  </div>
                </div>
                {/* .nk-reply-item */}
                <div className="nk-reply-meta">
                  <div className="nk-reply-meta-info">
                    <span className="who">Iliash Hossian</span> assigned user: <span className="whom">Saiful Islam</span> at 14 Jan, 2020 at 11:34 AM
                  </div>
                </div>
                {/* .nk-reply-meta */}
                <div className="nk-reply-item">
                  <div className="nk-reply-header">
                    <div className="user-card">
                      <div className="user-avatar sm bg-purple">
                        <span>IH</span>
                      </div>
                      <div className="user-name">Iliash Hossain <span>added a note</span>
                      </div>
                    </div>
                    <div className="date-time">14 Jan, 2020</div>
                  </div>
                  <div className="nk-reply-body">
                    <div className="nk-reply-entry entry note">
                      <p>Devement Team need to check out the issues.</p>
                    </div>
                  </div>
                </div>
                {/* .nk-reply-item */}
                <div className="nk-reply-meta">
                  <div className="nk-reply-meta-info">
                    <strong>15 January 2020</strong>
                  </div>
                </div>
                {/* .nk-reply-meta */}
                <div className="nk-reply-item">
                  <div className="nk-reply-header">
                    <div className="user-card">
                      <div className="user-avatar sm bg-pink">
                        <span>ST</span>
                      </div>
                      <div className="user-name">Support Team <span>(You)</span>
                      </div>
                    </div>
                    <div className="date-time">15 Jan, 2020</div>
                  </div>
                  <div className="nk-reply-body">
                    <div className="nk-reply-entry entry">
                      <p>Hello Ishtiyak,</p>
                      <p>Thanks for waiting for us. Our team solved the issues. So check now on our website. Hopefuly you can order now.</p>
                      <p>Thank you very much once again.</p>
                    </div>
                    <div className="nk-reply-from"> Replied by <span>Noor Parvez</span> at 11:32 AM </div>
                  </div>
                </div>
                {/* .nk-reply-item */}
                <div className="nk-reply-form">
                  <div className="nk-reply-form-header">
                    <ul className="nav nav-tabs-s2 nav-tabs nav-tabs-sm">
                      <li className="nav-item">
                        <a className="nav-link active" data-toggle="tab" href="#reply-form">Reply</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#note-form">Private Note</a>
                      </li>
                    </ul>
                    <div className="nk-reply-form-title">
                      <div className="title">Reply as:</div>
                      <div className="user-avatar xs bg-purple">
                        <span>IH</span>
                      </div>
                    </div>
                  </div>
                  <div className="tab-content">
                    <div className="tab-pane active" id="reply-form">
                      <div className="nk-reply-form-editor">
                        <div className="nk-reply-form-field">
                          <textarea className="form-control form-control-simple no-resize" placeholder="Hello" defaultValue={""} />
                        </div>
                        <div className="nk-reply-form-tools">
                          <ul className="nk-reply-form-actions g-1">
                            <li className="mr-2">
                              <button className="btn btn-primary" type="submit">Reply</button>
                            </li>
                            <li>
                              <div className="dropdown">
                                <a className="btn btn-icon btn-sm btn-tooltip" data-toggle="dropdown" title href="#" data-original-title="Templates">
                                  <em className="icon ni ni-hash" />
                                </a>
                                <div className="dropdown-menu">
                                  <ul className="link-list-opt no-bdr link-list-template">
                                    <li className="opt-head">
                                      <span>Quick Insert</span>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <span>Thank you message</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <span>Your issues solved</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <span>Thank you message</span>
                                      </a>
                                    </li>
                                    <li className="divider"></li>
                                    <li>
                                      <a href="#">
                                        <em className="icon ni ni-file-plus" />
                                        <span>Save as Template</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <em className="icon ni ni-notes-alt" />
                                        <span>Manage Template</span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </li>
                            <li>
                              <a className="btn btn-icon btn-sm" data-toggle="tooltip" data-placement="top" title href="#" data-original-title="Upload Attachment">
                                <em className="icon ni ni-clip-v" />
                              </a>
                            </li>
                            <li>
                              <a className="btn btn-icon btn-sm" data-toggle="tooltip" data-placement="top" title href="#" data-original-title="Insert Emoji">
                                <em className="icon ni ni-happy" />
                              </a>
                            </li>
                            <li>
                              <a className="btn btn-icon btn-sm" data-toggle="tooltip" data-placement="top" title href="#" data-original-title="Upload Images">
                                <em className="icon ni ni-img" />
                              </a>
                            </li>
                          </ul>
                          <div className="dropdown">
                            <a href="#" className="dropdown-toggle btn-trigger btn btn-icon mr-n2" data-toggle="dropdown">
                              <em className="icon ni ni-more-v" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <ul className="link-list-opt no-bdr">
                                <li>
                                  <a href="#">
                                    <span>Another Option</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <span>More Option</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        {/* .nk-reply-form-tools */}

                      </div>
                      {/* .nk-reply-form-editor */}

                    </div>
                    <div className="tab-pane" id="note-form">
                      <div className="nk-reply-form-editor">
                        <div className="nk-reply-form-field">
                          <textarea className="form-control form-control-simple no-resize" placeholder="Type your private note, that only visible to internal team." defaultValue={""} />
                        </div>
                        <div className="nk-reply-form-tools">
                          <ul className="nk-reply-form-actions g-1">
                            <li className="mr-2">
                              <button className="btn btn-primary" type="submit">Add Note</button>
                            </li>
                            <li>
                              <a className="btn btn-icon btn-sm" data-toggle="tooltip" data-placement="top" title href="#" data-original-title="Upload Attachment">
                                <em className="icon ni ni-clip-v" />
                              </a>
                            </li>
                          </ul>
                          <div className="dropdown">
                            <a href="#" className="dropdown-toggle btn-trigger btn btn-icon mr-n2" data-toggle="dropdown">
                              <em className="icon ni ni-more-v" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <ul className="link-list-opt no-bdr">
                                <li>
                                  <a href="#">
                                    <span>Another Option</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <span>More Option</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        {/* .nk-reply-form-tools */}

                      </div>
                      {/* .nk-reply-form-editor */}

                    </div>
                  </div>
                </div>
                {/* .nk-reply-form */}

              </div>
            </div>
          </div>
        </div>
        <div className="simplebar-placeholder" style={{ width: 'auto', height: '1399px' }} />
      </div>
      <div className="simplebar-track simplebar-horizontal" style={{ visibility: 'hidden' }}>
        <div className="simplebar-scrollbar" style={{ width: '0px', display: 'none' }} />
      </div>
      <div className="simplebar-track simplebar-vertical" style={{ visibility: 'visible' }}>
        <div className="simplebar-scrollbar" style={{ height: '85px', transform: 'translate3d(0px, 260px, 0px)', display: 'block' }} />
      </div>
    </div>
  )
}

export default CommentTask