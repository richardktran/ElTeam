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
import { isEmpty } from "lodash";

function MyCoursesPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [OwnCoursesData, setOwnCourses] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [totalOwnCourses, setTotalOwnCourses] = useState(0);

    const fetchOwnCourses = async () => {
        let result = await courseApi.getOwnCourses();
        if (result.status === HTTP_OK) {
            const { data, meta } = result.data;
            const { total } = meta.pagination;
            setOwnCourses(data);
            setTotalOwnCourses(total);
        }
    }

    useEffect(() => {
        fetchOwnCourses();
    }, []);

    const addCourse = async (values) => {
        try {
            const startDate = moment(values.start_date).format('YYYY-MM-DD');
            const endDate = moment(values.end_date).format('YYYY-MM-DD');
            const data = {
                name: values.name,
                code: values.code,
                start_date: startDate,
                end_date: endDate,
                credit: values.credit,
                location: values.location,
                hours_per_week: values.hours_per_week,
            }

            const response = await courseApi.create(data);
            if (response.status === HTTP_OK) {
                toast.success('Thêm lớp học thành công!');
                fetchOwnCourses();
                setShowModal(false);
            } else {
                console.log(response);
                toast.error("Thêm lớp học thất bại!!!");
                setShowModal(true);
            }
        } catch (e) {
            const messages = e.response.data.messages;
            messages.forEach(message => {
                toast.error(message.message);
            });
            setShowModal(true);
        }

    }

    return (
        <Layout>
            <div className="nk-content-body">
                <div className="nk-block-head nk-block-head-sm">
                    <div className="nk-block-between">
                        <div className="nk-block-head-content">
                            <h3 className="nk-block-title page-title">Lớp học của tôi</h3>
                            <div className="nk-block-des text-soft">
                                <p>Bạn có {totalOwnCourses} lớp học.</p>
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
                                                <span>Thêm lớp học</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>{/* .toggle-wrap */}
                        </div>{/* .nk-block-head-content */}
                    </div>{/* .nk-block-between */}
                </div>{/* .nk-block-head */}


                {isEmpty(OwnCoursesData) && OwnCoursesData !== null &&
                    <div style={{
                        minHeight: "50vh",
                    }}
                        className="d-flex flex-column align-items-center justify-content-center"
                    >
                        <img src="https://www.gstatic.com/classroom/empty_states_home.svg" />
                        <h6 className="mt-3">Bạn chưa tạo lớp học nào, hãy tạo lớp học cho bạn</h6>
                        <div className="btn btn-primary mt-3" onClick={() => setShowModal(true)}>Tạo lớp học</div>

                    </div>
                }
                <div className="nk-block">

                    <div className="row g-gs">
                        {OwnCoursesData === null &&
                            [...Array(6)].map((item, index) => (
                                <div className="col-sm-6 col-lg-4 col-xxl-3">
                                    <ClassCard.Loading />
                                </div>
                            ))
                        }

                        {OwnCoursesData && OwnCoursesData.map((course, index) => {
                            return (
                                <div key={index} className="col-sm-6 col-lg-4 col-xxl-3">
                                    <ClassCard {...course} isMyCourse={true} />
                                </div>
                            )
                        })}
                    </div>
                </div>
                {/* .nk-block */}
                <AddCoursesModal
                    modalName="Thêm lớp học"
                    onFinish={addCourse}
                    isShow={showModal}
                    handleCloseModal={() => setShowModal(false)}
                />
            </div>
        </Layout >
    );
}

export default MyCoursesPage;
