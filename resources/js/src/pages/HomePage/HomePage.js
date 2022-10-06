import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { courseApi } from "../../api/courseApi";
import ClassCard from "../../components/Cards/ClassCard";
import AddCoursesModal from "../../components/Modal/AddCoursesModal";
import { HTTP_OK } from '../../utils/constant';
import moment from 'moment';
import toast from "react-hot-toast";
import Layout from "../../components/Layout/Layout";
import { useDispatch, useSelector } from 'react-redux';
import { homeItems } from "./sidebars/home";
import { changePage } from "../../app/reducers/sideBarReducer";
import useUser from "../../hooks/useUser";

function HomePage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userData = useUser();

    const [coursesData, setCoursesData] = useState([]);
    const [totalCourses, setTotalCourses] = useState(0);


    const getStatusFromData = (data) => {
        const status = data.map((course) => {
            const currentStudent = course.students.filter((item) => {
                return item.id === userData.id;
            })
            return currentStudent[0].pivot.status;
        });

        data = data.map((course, index) => {
            course.status = status[index];
            return course;
        });

        return data;
    }

    const fetchLearningCourses = async () => {
        let result = await courseApi.getLearningCourses();
        if (result.status === HTTP_OK) {
            const { data, meta } = result.data;
            const { total } = meta.pagination;
            setCoursesData(getStatusFromData(data));
            setTotalCourses(total);
        }
    }

    const loadSidebarItems = () => {
        const action = changePage(homeItems);
        dispatch(action);
    }

    useEffect(() => {
        loadSidebarItems();
        fetchLearningCourses();
    }, []);



    return (
        <div className="nk-content-body">
            <div className="nk-block-head nk-block-head-sm">
                <div className="nk-block-between">
                    <div className="nk-block-head-content">
                        <h3 className="nk-block-title page-title">Các khóa học</h3>
                        <div className="nk-block-des text-soft">
                            <p>Bạn có {totalCourses} khóa học.</p>
                        </div>
                    </div>
                    {/* .nk-block-head-content */}
                    <div className="nk-block-head-content">
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
                                                <span>Bộ lọc</span>
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
                                        <a href="#" className="btn btn-primary" onClick={() => setShowModal(true)} data-toggle="modal" data-target="#createCoursesModal">
                                            <em className="icon ni ni-plus" />
                                            <span>Tham gia tất cả</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>{/* .toggle-wrap */}
                    </div>{/* .nk-block-head-content */}
                </div>{/* .nk-block-between */}
            </div>{/* .nk-block-head */}
            <div className="nk-block">
                <div className="row g-gs">
                    {coursesData && coursesData.map((course, index) => {
                        return (
                            <div key={index} className="col-sm-6 col-lg-4 col-xxl-3">
                                <ClassCard {...course} />
                            </div>
                        )
                    })}
                </div>
            </div>
            {/* .nk-block */}
        </div>
    );
}

export default HomePage;
