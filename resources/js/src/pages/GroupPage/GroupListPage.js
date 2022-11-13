import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { requestCourse } from '../../store/Course/Reducer';

function GroupListPage() {
  let { id } = useParams(); //get id from url
  const dispatch = useDispatch();
  const courseData = useSelector(state => state.course.courseInfo);

  const [course, setCourse] = useState(courseData);

  useEffect(() => {
    setCourse(courseData);
  }, [courseData]);


  const fetchCourseInfo = () => {
    dispatch(requestCourse(id));
  }

  useEffect(() => {
    fetchCourseInfo();
  }, []);

  return (
    <div className="container-fluid">
      <div className="nk-content-inner">
        <div className="nk-content-body">
          <div className="nk-block-head nk-block-head-sm">
            <div className="nk-block-between">
              <div className="nk-block-head-content">
                <div className="nk-block-head-sub mb-2">
                  <Link className="back-to" to={"/courses"} >
                    <em className="icon ni ni-arrow-left" />
                    <span>Trở lại</span>
                  </Link>
                </div>
                <h3 className="nk-block-title page-title">Danh sách nhóm</h3>
              </div>{/* .nk-block-head-content */}
              <div className="nk-block-head-content">
                <div className="nk-block-head-sub mb-2"></div>
                <div className="toggle-wrap nk-block-tools-toggle">
                  <a href="#" className="btn btn-icon btn-trigger toggle-expand mr-n1" data-target="pageMenu"><em className="icon ni ni-more-v" /></a>
                  <div className="toggle-expand-content" data-content="pageMenu">
                    <ul className="nk-block-tools g-3">
                      <li>
                        <div className="drodown">
                          <a href="#" className="dropdown-toggle btn btn-white btn-dim btn-outline-light" data-toggle="dropdown">
                            <em className="d-none d-sm-inline icon ni ni-calender-date" />
                            <span>
                              Phân nhóm
                            </span>
                            <em className="dd-indc icon ni ni-chevron-right" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <ul className="link-list-opt no-bdr">
                              <li><a href="#"><span>Phân nhóm ngẫu nhiên</span></a></li>
                              <li><a href="#"><span>Sinh viên chọn nhóm</span></a></li>
                              <li><a href="#"><span>Chốt nhóm</span></a></li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>{/* .nk-block-head-content */}
            </div>{/* .nk-block-between */}
          </div>
          {/* .nk-block-head */}
          <div className="nk-block">
            <table className="nk-tb-list is-separate nk-tb-ulist">
              <thead>
                <tr className="nk-tb-item nk-tb-head">
                  <th className="nk-tb-col"><span className="sub-text">Tên nhóm</span></th>
                  <th className="nk-tb-col tb-col-xxl"><span className="sub-text">Mã số nhóm</span></th>
                  <th className="nk-tb-col tb-col-lg"><span className="sub-text">Trưởng nhóm</span></th>
                  <th className="nk-tb-col tb-col-lg"><span className="sub-text">Thành viên</span></th>
                  <th className="nk-tb-col tb-col-md"><span className="sub-text">Tiến độ</span></th>
                  <th className="nk-tb-col tb-col-mb"><span className="sub-text">Trạng thái</span></th>
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
                </tr>
                {/* .nk-tb-item */}
              </thead>
              <tbody>
                <tr className="nk-tb-item">
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
                </tr>
                {/* .nk-tb-item */}
                <tr className="nk-tb-item">
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
                </tr>
                {/* .nk-tb-item */}
                <tr className="nk-tb-item">
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
                </tr>
                {/* .nk-tb-item */}
                <tr className="nk-tb-item">
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
                </tr>
                {/* .nk-tb-item */}
                <tr className="nk-tb-item">
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
                </tr>
                {/* .nk-tb-item */}
                <tr className="nk-tb-item">
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
                </tr>
                {/* .nk-tb-item */}
                <tr className="nk-tb-item">
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
                </tr>
                {/* .nk-tb-item */}
                <tr className="nk-tb-item">
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
                </tr>
                {/* .nk-tb-item */}
              </tbody>
            </table>
          </div>
          {/* .nk-block */}
        </div>
      </div>
    </div>
  )
}

export default GroupListPage