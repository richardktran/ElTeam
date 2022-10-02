import React from 'react'
import { useNavigate } from 'react-router-dom';

const ClassCard = (props) => {
    const navigate = useNavigate();

    const goToCourse = (courseId) => {
        navigate(`${courseId}/info`);
    }

    const { id, name, code, credit, location, hours_per_week } = props;
    return (
        <div id={id} className="card h-100">
            <div className="card-inner">
                <div className="project">
                    <div className="project-head">
                        <a onClick={() => goToCourse(id)} className="project-title">
                            <div className="project-info">
                                <h6 className="title">{code} - {name}</h6>
                                <span className="sub-text">10 nhóm</span>
                            </div>
                        </a>
                        <div className="drodown">
                            <a href="#" className="dropdown-toggle btn btn-sm btn-icon btn-trigger mt-n1 mr-n1" data-toggle="dropdown">
                                <em className="icon ni ni-more-h" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                                <ul className="link-list-opt no-bdr">
                                    <li>
                                        <a href="html/apps-kanban.html">
                                            <em className="icon ni ni-eye" />
                                            <span>View Project</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <em className="icon ni ni-edit" />
                                            <span>Edit Project</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <em className="icon ni ni-check-round-cut" />
                                            <span>Mark As Done</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="project-details">
                        <div className="row">
                            <div className="col-md-6">
                                <span className="label-tag ">
                                    <em className="text-primary icon ni ni-map-pin-fill"></em>
                                    <span> {location}</span>
                                </span>
                            </div>
                            <div className="col-md-6">
                                <span className="label-tag">
                                    <em className="text-primary icon ni ni-cards"></em>
                                    <span> {credit} tín chỉ</span>
                                </span>
                            </div>
                        </div>
                        <div className="row my-2">
                            <div className="col-md-6">
                                <span className="label-tag">
                                    <em className="text-primary icon ni ni-users"></em>
                                    <span> 40 sinh viên</span>
                                </span>
                            </div>
                            <div className="col-md-6">
                                <span className="label-tag">
                                    <em className="text-primary icon ni ni-clock-fill"></em>
                                    <span> {hours_per_week}h/tuần</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="project-progress">
                        <div className="project-progress-details">
                            <div className="project-progress-task">
                                <em className="icon ni ni-check-round-cut" />
                                <span>3 Tasks</span>
                            </div>
                            <div className="project-progress-percent">93.5%</div>
                        </div>
                        <div className="progress progress-pill progress-md bg-light">
                            <div className="progress-bar" data-progress="93.5" style={{ width: '93.5%' }} />
                        </div>
                    </div>
                    <div className="project-meta">
                        <ul className="project-users g-1">
                            <li>
                                <div className="user-avatar sm bg-primary">
                                    <span>A</span>
                                </div>
                            </li>
                            <li>
                                <div className="user-avatar sm bg-blue">
                                    <img src="./images/avatar/b-sm.jpg" alt="" />
                                </div>
                            </li>
                            <li>
                                <div className="user-avatar bg-light sm">
                                    <span>+12</span>
                                </div>
                            </li>
                        </ul>
                        <span className="badge badge-dim badge-warning">
                            <em className="icon ni ni-clock" />
                            <span>5 Days Left</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClassCard
