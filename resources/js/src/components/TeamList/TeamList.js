import React from 'react'

const TeamList = () => {
    return (
        <table className="nk-tb-list is-separate nk-tb-ulist">
            <thead>
                <tr className="nk-tb-item nk-tb-head">
                    <th className="nk-tb-col nk-tb-col-check">
                        <div className="custom-control custom-control-sm custom-checkbox notext">
                            <input type="checkbox" className="custom-control-input" id="pid-all" />
                            <label className="custom-control-label" htmlFor="pid-all" />
                        </div>
                    </th>
                    <th className="nk-tb-col"><span className="sub-text">Project Name</span></th>
                    <th className="nk-tb-col tb-col-xxl"><span className="sub-text">Client</span></th>
                    <th className="nk-tb-col tb-col-lg"><span className="sub-text">Project Lead</span></th>
                    <th className="nk-tb-col tb-col-lg"><span className="sub-text">Team</span></th>
                    <th className="nk-tb-col tb-col-xxl"><span className="sub-text">Status</span></th>
                    <th className="nk-tb-col tb-col-md"><span className="sub-text">Progress</span></th>
                    <th className="nk-tb-col tb-col-mb"><span className="sub-text">Deadline</span></th>
                    <th className="nk-tb-col nk-tb-col-tools text-right">
                        <div className="dropdown">
                            <a href="#" className="btn btn-xs btn-trigger btn-icon dropdown-toggle mr-n1" data-toggle="dropdown" data-offset="0,5"><em className="icon ni ni-more-h" /></a>
                            <div className="dropdown-menu dropdown-menu-right">
                                <ul className="link-list-opt no-bdr">
                                    <li><a href="#"><em className="icon ni ni-check-round-cut" /><span>Mark As Done</span></a></li>
                                    <li><a href="#"><em className="icon ni ni-archive" /><span>Mark As Archive</span></a></li>
                                    <li><a href="#"><em className="icon ni ni-trash" /><span>Remove Projects</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </th>
                </tr>{/* .nk-tb-item */}
            </thead>
            <tbody>
                <tr className="nk-tb-item">
                    <td className="nk-tb-col nk-tb-col-check">
                        <div className="custom-control custom-control-sm custom-checkbox notext">
                            <input type="checkbox" className="custom-control-input" id="pid-01" />
                            <label className="custom-control-label" htmlFor="pid-01" />
                        </div>
                    </td>
                    <td className="nk-tb-col">
                        <a href="html/apps-kanban.html" className="project-title">
                            <div className="user-avatar sq bg-purple"><span>DD</span></div>
                            <div className="project-info">
                                <h6 className="title">Dashlite Development</h6>
                            </div>
                        </a>
                    </td>
                    <td className="nk-tb-col tb-col-xxl">
                        <span>Softnio</span>
                    </td>
                    <td className="nk-tb-col tb-col-lg">
                        <span>Abu Bin Istiak</span>
                    </td>
                    <td className="nk-tb-col tb-col-lg">
                        <ul className="project-users g-1">
                            <li>
                                <div className="user-avatar sm bg-primary"><span>A</span></div>
                            </li>
                            <li>
                                <div className="user-avatar sm bg-blue"><img src="./images/avatar/b-sm.jpg" alt="" /></div>
                            </li>
                            <li>
                                <div className="user-avatar bg-light sm"><span>+12</span></div>
                            </li>
                        </ul>
                    </td>
                    <td className="nk-tb-col tb-col-xxl">
                        <span>Open</span>
                    </td>
                    <td className="nk-tb-col tb-col-md">
                        <div className="project-list-progress">
                            <div className="progress progress-pill progress-md bg-light">
                                <div className="progress-bar" data-progress="93.5" style={{ width: '93.5%' }} />
                            </div>
                            <div className="project-progress-percent">93.5%</div>
                        </div>
                    </td>
                    <td className="nk-tb-col tb-col-mb">
                        <span className="badge badge-dim badge-warning"><em className="icon ni ni-clock" /><span>5 Days Left</span></span>
                    </td>
                    <td className="nk-tb-col nk-tb-col-tools">
                        <ul className="nk-tb-actions gx-1">
                            <li>
                                <div className="drodown">
                                    <a href="#" className="dropdown-toggle btn btn-sm btn-icon btn-trigger" data-toggle="dropdown"><em className="icon ni ni-more-h" /></a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <ul className="link-list-opt no-bdr">
                                            <li><a href="html/apps-kanban.html"><em className="icon ni ni-eye" /><span>View Project</span></a></li>
                                            <li><a href="#"><em className="icon ni ni-edit" /><span>Edit Project</span></a></li>
                                            <li><a href="#"><em className="icon ni ni-check-round-cut" /><span>Mark As Done</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </td>
                </tr>{/* .nk-tb-item */}
                <tr className="nk-tb-item">
                    <td className="nk-tb-col nk-tb-col-check">
                        <div className="custom-control custom-control-sm custom-checkbox notext">
                            <input type="checkbox" className="custom-control-input" id="pid-02" />
                            <label className="custom-control-label" htmlFor="pid-02" />
                        </div>
                    </td>
                    <td className="nk-tb-col">
                        <a href="html/apps-kanban.html" className="project-title">
                            <div className="user-avatar sq bg-warning"><span>RW</span></div>
                            <div className="project-info">
                                <h6 className="title">Redesign Website</h6>
                            </div>
                        </a>
                    </td>
                    <td className="nk-tb-col tb-col-xxl">
                        <span>Runnergy</span>
                    </td>
                    <td className="nk-tb-col tb-col-lg">
                        <span>Alex Ashley</span>
                    </td>
                    <td className="nk-tb-col tb-col-lg">
                        <ul className="project-users g-1">
                            <li>
                                <div className="user-avatar sm bg-primary"><img src="./images/avatar/c-sm.jpg" alt="" /></div>
                            </li>
                            <li>
                                <div className="user-avatar sm bg-blue"><span>N</span></div>
                            </li>
                        </ul>
                    </td>
                    <td className="nk-tb-col tb-col-xxl">
                        <span>Onhold</span>
                    </td>
                    <td className="nk-tb-col tb-col-md">
                        <div className="project-list-progress">
                            <div className="progress progress-pill progress-md bg-light">
                                <div className="progress-bar" data-progress={23} style={{ width: '23%' }} />
                            </div>
                            <div className="project-progress-percent">23%</div>
                        </div>
                    </td>
                    <td className="nk-tb-col tb-col-mb">
                        <span className="badge badge-dim badge-light text-gray"><em className="icon ni ni-clock" /><span>21 Days Left</span></span>
                    </td>
                    <td className="nk-tb-col nk-tb-col-tools">
                        <ul className="nk-tb-actions gx-1">
                            <li>
                                <div className="drodown">
                                    <a href="#" className="dropdown-toggle btn btn-sm btn-icon btn-trigger" data-toggle="dropdown"><em className="icon ni ni-more-h" /></a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <ul className="link-list-opt no-bdr">
                                            <li><a href="html/apps-kanban.html"><em className="icon ni ni-eye" /><span>View Project</span></a></li>
                                            <li><a href="#"><em className="icon ni ni-edit" /><span>Edit Project</span></a></li>
                                            <li><a href="#"><em className="icon ni ni-check-round-cut" /><span>Mark As Done</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </td>
                </tr>{/* .nk-tb-item */}
                <tr className="nk-tb-item">
                    <td className="nk-tb-col nk-tb-col-check">
                        <div className="custom-control custom-control-sm custom-checkbox notext">
                            <input type="checkbox" className="custom-control-input" id="pid-03" />
                            <label className="custom-control-label" htmlFor="pid-03" />
                        </div>
                    </td>
                    <td className="nk-tb-col">
                        <a href="html/apps-kanban.html" className="project-title">
                            <div className="user-avatar sq bg-info"><span>KR</span></div>
                            <div className="project-info">
                                <h6 className="title">Keyword Research for SEO</h6>
                            </div>
                        </a>
                    </td>
                    <td className="nk-tb-col tb-col-xxl">
                        <span>Techyspec</span>
                    </td>
                    <td className="nk-tb-col tb-col-lg">
                        <span>Emily Smith</span>
                    </td>
                    <td className="nk-tb-col tb-col-lg">
                        <ul className="project-users g-1">
                            <li>
                                <div className="user-avatar sm bg-primary"><img src="./images/avatar/a-sm.jpg" alt="" /></div>
                            </li>
                        </ul>
                    </td>
                    <td className="nk-tb-col tb-col-xxl">
                        <span>Ongoing</span>
                    </td>
                    <td className="nk-tb-col tb-col-md">
                        <div className="project-list-progress">
                            <div className="progress progress-pill progress-md bg-light">
                                <div className="progress-bar" data-progress="52.5" style={{ width: '52.5%' }} />
                            </div>
                            <div className="project-progress-percent">52.5%</div>
                        </div>
                    </td>
                    <td className="nk-tb-col tb-col-mb">
                        <span className="badge badge-dim badge-danger"><em className="icon ni ni-clock" /><span>Due Tomorrow</span></span>
                    </td>
                    <td className="nk-tb-col nk-tb-col-tools">
                        <ul className="nk-tb-actions gx-1">
                            <li>
                                <div className="drodown">
                                    <a href="#" className="dropdown-toggle btn btn-sm btn-icon btn-trigger" data-toggle="dropdown"><em className="icon ni ni-more-h" /></a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <ul className="link-list-opt no-bdr">
                                            <li><a href="html/apps-kanban.html"><em className="icon ni ni-eye" /><span>View Project</span></a></li>
                                            <li><a href="#"><em className="icon ni ni-edit" /><span>Edit Project</span></a></li>
                                            <li><a href="#"><em className="icon ni ni-check-round-cut" /><span>Mark As Done</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </td>
                </tr>{/* .nk-tb-item */}
                <tr className="nk-tb-item">
                    <td className="nk-tb-col nk-tb-col-check">
                        <div className="custom-control custom-control-sm custom-checkbox notext">
                            <input type="checkbox" className="custom-control-input" id="pid-04" />
                            <label className="custom-control-label" htmlFor="pid-04" />
                        </div>
                    </td>
                    <td className="nk-tb-col">
                        <a href="html/apps-kanban.html" className="project-title">
                            <div className="user-avatar sq bg-danger"><span>WD</span></div>
                            <div className="project-info">
                                <h6 className="title">Website Development</h6>
                            </div>
                        </a>
                    </td>
                    <td className="nk-tb-col tb-col-xxl">
                        <span>Fitness Next</span>
                    </td>
                    <td className="nk-tb-col tb-col-lg">
                        <span>Michael Wood</span>
                    </td>
                    <td className="nk-tb-col tb-col-lg">
                        <ul className="project-users g-1">
                            <li>
                                <div className="user-avatar sm bg-blue"><span>N</span></div>
                            </li>
                            <li>
                                <div className="user-avatar sm bg-primary"><img src="./images/avatar/c-sm.jpg" alt="" /></div>
                            </li>
                        </ul>
                    </td>
                    <td className="nk-tb-col tb-col-xxl">
                        <span>Open</span>
                    </td>
                    <td className="nk-tb-col tb-col-md">
                        <div className="project-list-progress">
                            <div className="progress progress-pill progress-md bg-light">
                                <div className="progress-bar" data-progress="65.5" style={{ width: '65.5%' }} />
                            </div>
                            <div className="project-progress-percent">65.5%</div>
                        </div>
                    </td>
                    <td className="nk-tb-col tb-col-mb">
                        <span className="badge badge-dim badge-light text-gray"><em className="icon ni ni-clock" /><span>16 Days Left</span></span>
                    </td>
                    <td className="nk-tb-col nk-tb-col-tools">
                        <ul className="nk-tb-actions gx-1">
                            <li>
                                <div className="drodown">
                                    <a href="#" className="dropdown-toggle btn btn-sm btn-icon btn-trigger" data-toggle="dropdown"><em className="icon ni ni-more-h" /></a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <ul className="link-list-opt no-bdr">
                                            <li><a href="html/apps-kanban.html"><em className="icon ni ni-eye" /><span>View Project</span></a></li>
                                            <li><a href="#"><em className="icon ni ni-edit" /><span>Edit Project</span></a></li>
                                            <li><a href="#"><em className="icon ni ni-check-round-cut" /><span>Mark As Done</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </td>
                </tr>{/* .nk-tb-item */}
                <tr className="nk-tb-item">
                    <td className="nk-tb-col nk-tb-col-check">
                        <div className="custom-control custom-control-sm custom-checkbox notext">
                            <input type="checkbox" className="custom-control-input" id="pid-05" />
                            <label className="custom-control-label" htmlFor="pid-05" />
                        </div>
                    </td>
                    <td className="nk-tb-col">
                        <a href="html/apps-kanban.html" className="project-title">
                            <div className="user-avatar sq bg-blue"><span>SO</span></div>
                            <div className="project-info">
                                <h6 className="title">SEO Optimization</h6>
                            </div>
                        </a>
                    </td>
                    <td className="nk-tb-col tb-col-xxl">
                        <span>Techyspec</span>
                    </td>
                    <td className="nk-tb-col tb-col-lg">
                        <span>Emily Smith</span>
                    </td>
                    <td className="nk-tb-col tb-col-lg">
                        <ul className="project-users g-1">
                            <li>
                                <div className="user-avatar sm bg-primary"><img src="./images/avatar/a-sm.jpg" alt="" /></div>
                            </li>
                            <li>
                                <div className="user-avatar sm bg-primary"><img src="./images/avatar/d-sm.jpg" alt="" /></div>
                            </li>
                        </ul>
                    </td>
                    <td className="nk-tb-col tb-col-xxl">
                        <span>Closed</span>
                    </td>
                    <td className="nk-tb-col tb-col-md">
                        <div className="project-list-progress">
                            <div className="progress progress-pill progress-md bg-light">
                                <div className="progress-bar" data-progress={100} style={{ width: '100%' }} />
                            </div>
                            <div className="project-progress-percent">100%</div>
                        </div>
                    </td>
                    <td className="nk-tb-col tb-col-mb">
                        <span className="badge badge-dim badge-success"><em className="icon ni ni-clock" /><span>Done</span></span>
                    </td>
                    <td className="nk-tb-col nk-tb-col-tools">
                        <ul className="nk-tb-actions gx-1">
                            <li>
                                <div className="drodown">
                                    <a href="#" className="dropdown-toggle btn btn-sm btn-icon btn-trigger" data-toggle="dropdown"><em className="icon ni ni-more-h" /></a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <ul className="link-list-opt no-bdr">
                                            <li><a href="html/apps-kanban.html"><em className="icon ni ni-eye" /><span>View Project</span></a></li>
                                            <li><a href="#"><em className="icon ni ni-edit" /><span>Edit Project</span></a></li>
                                            <li><a href="#"><em className="icon ni ni-check-round-cut" /><span>Mark As Done</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </td>
                </tr>{/* .nk-tb-item */}
                <tr className="nk-tb-item">
                    <td className="nk-tb-col nk-tb-col-check">
                        <div className="custom-control custom-control-sm custom-checkbox notext">
                            <input type="checkbox" className="custom-control-input" id="uid1" />
                            <label className="custom-control-label" htmlFor="uid1" />
                        </div>
                    </td>
                    <td className="nk-tb-col">
                        <a href="html/apps-kanban.html" className="project-title">
                            <div className="user-avatar sq bg-purple"><span>DD</span></div>
                            <div className="project-info">
                                <h6 className="title">Dashlite Development</h6>
                            </div>
                        </a>
                    </td>
                    <td className="nk-tb-col tb-col-xxl">
                        <span>Softnio</span>
                    </td>
                    <td className="nk-tb-col tb-col-lg">
                        <span>Abu Bin Istiak</span>
                    </td>
                    <td className="nk-tb-col tb-col-lg">
                        <ul className="project-users g-1">
                            <li>
                                <div className="user-avatar sm bg-danger"><span>D</span></div>
                            </li>
                            <li>
                                <div className="user-avatar sm bg-primary"><img src="./images/avatar/c-sm.jpg" alt="" /></div>
                            </li>
                        </ul>
                    </td>
                    <td className="nk-tb-col tb-col-xxl">
                        <span>Open</span>
                    </td>
                    <td className="nk-tb-col tb-col-md">
                        <div className="project-list-progress">
                            <div className="progress progress-pill progress-md bg-light">
                                <div className="progress-bar" data-progress="65.5" style={{ width: '65.5%' }} />
                            </div>
                            <div className="project-progress-percent">65.5%</div>
                        </div>
                    </td>
                    <td className="nk-tb-col tb-col-mb">
                        <span className="badge badge-dim badge-warning"><em className="icon ni ni-clock" /><span>5 Days Left</span></span>
                    </td>
                    <td className="nk-tb-col nk-tb-col-tools">
                        <ul className="nk-tb-actions gx-1">
                            <li>
                                <div className="drodown">
                                    <a href="#" className="dropdown-toggle btn btn-sm btn-icon btn-trigger" data-toggle="dropdown"><em className="icon ni ni-more-h" /></a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <ul className="link-list-opt no-bdr">
                                            <li><a href="html/apps-kanban.html"><em className="icon ni ni-eye" /><span>View Project</span></a></li>
                                            <li><a href="#"><em className="icon ni ni-edit" /><span>Edit Project</span></a></li>
                                            <li><a href="#"><em className="icon ni ni-check-round-cut" /><span>Mark As Done</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </td>
                </tr>{/* .nk-tb-item */}
                <tr className="nk-tb-item">
                    <td className="nk-tb-col nk-tb-col-check">
                        <div className="custom-control custom-control-sm custom-checkbox notext">
                            <input type="checkbox" className="custom-control-input" id="pid-07" />
                            <label className="custom-control-label" htmlFor="pid-07" />
                        </div>
                    </td>
                    <td className="nk-tb-col">
                        <a href="html/apps-kanban.html" className="project-title">
                            <div className="user-avatar sq bg-danger"><span>WD</span></div>
                            <div className="project-info">
                                <h6 className="title">Website Development</h6>
                            </div>
                        </a>
                    </td>
                    <td className="nk-tb-col tb-col-xxl">
                        <span>Fitness Next</span>
                    </td>
                    <td className="nk-tb-col tb-col-lg">
                        <span>Alex Ashley</span>
                    </td>
                    <td className="nk-tb-col tb-col-lg">
                        <ul className="project-users g-1">
                            <li>
                                <div className="user-avatar sm bg-primary"><img src="./images/avatar/b-sm.jpg" alt="" /></div>
                            </li>
                            <li>
                                <div className="user-avatar sm bg-indigo"><span>P</span></div>
                            </li>
                        </ul>
                    </td>
                    <td className="nk-tb-col tb-col-xxl">
                        <span>Open</span>
                    </td>
                    <td className="nk-tb-col tb-col-md">
                        <div className="project-list-progress">
                            <div className="progress progress-pill progress-md bg-light">
                                <div className="progress-bar" data-progress="65.5" style={{ width: '65.5%' }} />
                            </div>
                            <div className="project-progress-percent">65.5%</div>
                        </div>
                    </td>
                    <td className="nk-tb-col tb-col-mb">
                        <span className="badge badge-dim badge-light text-gray"><em className="icon ni ni-clock" /><span>21 Days Left</span></span>
                    </td>
                    <td className="nk-tb-col nk-tb-col-tools">
                        <ul className="nk-tb-actions gx-1">
                            <li>
                                <div className="drodown">
                                    <a href="#" className="dropdown-toggle btn btn-sm btn-icon btn-trigger" data-toggle="dropdown"><em className="icon ni ni-more-h" /></a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <ul className="link-list-opt no-bdr">
                                            <li><a href="html/apps-kanban.html"><em className="icon ni ni-eye" /><span>View Project</span></a></li>
                                            <li><a href="#"><em className="icon ni ni-edit" /><span>Edit Project</span></a></li>
                                            <li><a href="#"><em className="icon ni ni-check-round-cut" /><span>Mark As Done</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </td>
                </tr>{/* .nk-tb-item */}
                <tr className="nk-tb-item">
                    <td className="nk-tb-col nk-tb-col-check">
                        <div className="custom-control custom-control-sm custom-checkbox notext">
                            <input type="checkbox" className="custom-control-input" id="pid-08" />
                            <label className="custom-control-label" htmlFor="pid-08" />
                        </div>
                    </td>
                    <td className="nk-tb-col">
                        <a href="html/apps-kanban.html" className="project-title">
                            <div className="user-avatar sq bg-warning"><span>RW</span></div>
                            <div className="project-info">
                                <h6 className="title">Redesign Website</h6>
                            </div>
                        </a>
                    </td>
                    <td className="nk-tb-col tb-col-xxl">
                        <span>Runnergy</span>
                    </td>
                    <td className="nk-tb-col tb-col-lg">
                        <span>Michael Wood</span>
                    </td>
                    <td className="nk-tb-col tb-col-lg">
                        <ul className="project-users g-1">
                            <li>
                                <div className="user-avatar sm bg-pink"><span>I</span></div>
                            </li>
                            <li>
                                <div className="user-avatar sm bg-primary"><img src="./images/avatar/a-sm.jpg" alt="" /></div>
                            </li>
                        </ul>
                    </td>
                    <td className="nk-tb-col tb-col-xxl">
                        <span>Onhold</span>
                    </td>
                    <td className="nk-tb-col tb-col-md">
                        <div className="project-list-progress">
                            <div className="progress progress-pill progress-md bg-light">
                                <div className="progress-bar" data-progress={23} style={{ width: '23%' }} />
                            </div>
                            <div className="project-progress-percent">23%</div>
                        </div>
                    </td>
                    <td className="nk-tb-col tb-col-mb">
                        <span className="badge badge-dim badge-light text-gray"><em className="icon ni ni-clock" /><span>21 Days Left</span></span>
                    </td>
                    <td className="nk-tb-col nk-tb-col-tools">
                        <ul className="nk-tb-actions gx-1">
                            <li>
                                <div className="drodown">
                                    <a href="#" className="dropdown-toggle btn btn-sm btn-icon btn-trigger" data-toggle="dropdown"><em className="icon ni ni-more-h" /></a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <ul className="link-list-opt no-bdr">
                                            <li><a href="html/apps-kanban.html"><em className="icon ni ni-eye" /><span>View Project</span></a></li>
                                            <li><a href="#"><em className="icon ni ni-edit" /><span>Edit Project</span></a></li>
                                            <li><a href="#"><em className="icon ni ni-check-round-cut" /><span>Mark As Done</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </td>
                </tr>{/* .nk-tb-item */}
            </tbody>
        </table>

    );
}

export default TeamList
