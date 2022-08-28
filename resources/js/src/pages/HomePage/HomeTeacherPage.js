import React from "react";
import { useNavigate } from "react-router-dom";
import ClassCard from "../../components/Cards/ClassCard";

function HomeTeacherPage() {
    const navigate = useNavigate();

    return (
        <div className="nk-content-body">
            <div className="nk-block-head nk-block-head-sm">
                <div className="nk-block-between">
                    <div className="nk-block-head-content">
                        <h3 className="nk-block-title page-title">Classes</h3>
                        <div className="nk-block-des text-soft">
                            <p>You have total 10 class.</p>
                        </div>
                    </div>{/* .nk-block-head-content */} <div className="nk-block-head-content">
                        <div className="toggle-wrap nk-block-tools-toggle">
                            <a href="#" className="btn btn-icon btn-trigger toggle-expand mr-n1" data-target="pageMenu">
                                <em className="icon ni ni-menu-alt-r" />
                            </a>
                            <div className="toggle-expand-content" data-content="pageMenu">
                                <ul className="nk-block-tools g-3">
                                    <li>
                                        <div className="drodown">
                                            <a href="#" className="dropdown-toggle btn btn-white btn-dim btn-outline-light" data-toggle="dropdown">
                                                <em className="d-none d-sm-inline icon ni ni-filter-alt" />
                                                <span>Filtered By</span>
                                                <em className="dd-indc icon ni ni-chevron-right" />
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <ul className="link-list-opt no-bdr">
                                                    <li>
                                                        <a href="#">
                                                            <span>Open</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <span>Closed</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <span>Onhold</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="nk-block-tools-opt">
                                        <a href="#" className="btn btn-primary">
                                            <em className="icon ni ni-plus" />
                                            <span>Add Project</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>{/* .toggle-wrap */}
                    </div>{/* .nk-block-head-content */}
                </div>{/* .nk-block-between */}
            </div>{/* .nk-block-head */} <div className="nk-block">
                <div className="row g-gs">
                    <div className="col-sm-6 col-lg-4 col-xxl-3">
                        <ClassCard />
                    </div>
                </div>
            </div>{/* .nk-block */}
        </div>
    );
}

export default HomeTeacherPage;
