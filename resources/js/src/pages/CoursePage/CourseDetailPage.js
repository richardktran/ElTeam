import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { changePage } from '../../app/reducers/sideBarReducer';
import { courseDetailItems, courseMembersItems } from './sidebars/courseDetail';
import Curriculum from './Components/Curriculum';
import isCourseOwner from '../../hooks/isCourseOwner';
import Lesson from './Components/Lesson';
import { requestCourse, requestTopics } from '../../store/Course/Reducer';
import { changeLoading } from '../../store/App/Reducer';
import Skeleton from 'react-loading-skeleton';
import { isEmpty } from 'lodash';

const CourseDetailPage = () => {
  let { id } = useParams(); //get id from url
  const isOwner = isCourseOwner(id);
  const dispatch = useDispatch();
  const loading = useSelector(state => state.course.submitting);
  const courseData = useSelector(state => state.course.courseInfo);

  const [course, setCourse] = useState([]);


  useEffect(() => {
    dispatch(changeLoading(loading));
  }, [loading]);

  const [isAddTopic, setIsAddTopic] = useState(false);

  useEffect(() => {
    setCourse(courseData);
  }, [courseData]);

  const toggleEditable = () => {
    setIsAddTopic(!isAddTopic);
  }


  const fetchCourseInfo = () => {
    dispatch(requestCourse({ course_id: id }));
    dispatch(requestTopics());
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
                {(loading || isEmpty(course)) &&
                  <h2 className="nk-block-title page-title">
                    <Skeleton width={200} height={`1.5rem`} />
                  </h2>
                }
                {!loading && !isEmpty(course) &&
                  <h3 className="nk-block-title page-title">
                    {course.code} - {course.name}
                  </h3>
                }
              </div>{/* .nk-block-head-content */}
              <div className="nk-block-head-content">
                <div className="nk-block-head-sub mb-2"></div>
                <div className="toggle-wrap nk-block-tools-toggle">
                  <a href="#" className="btn btn-icon btn-trigger toggle-expand mr-n1" data-target="pageMenu"><em className="icon ni ni-more-v" /></a>
                  <div className="toggle-expand-content" data-content="pageMenu">
                    <ul className="nk-block-tools g-3">
                      <li>
                        <div className="drodown">
                          <a href="#" className="dropdown-toggle btn btn-white btn-dim btn-outline-light" data-toggle="dropdown"><em className="d-none d-sm-inline icon ni ni-calender-date" /><span><span className="d-none d-md-inline">Last</span> 30 Days</span><em className="dd-indc icon ni ni-chevron-right" /></a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <ul className="link-list-opt no-bdr">
                              <li><a href="#"><span>Last 30 Days</span></a></li>
                              <li><a href="#"><span>Last 6 Months</span></a></li>
                              <li><a href="#"><span>Last 1 Years</span></a></li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      {isOwner &&
                        <li className="nk-block-tools-opt">
                          <div onClick={toggleEditable} className="btn btn-primary">
                            <em className="icon ni ni-reports" />
                            <span>Thêm chủ đề</span>
                          </div>
                        </li>
                      }
                    </ul>
                  </div>
                </div>
              </div>{/* .nk-block-head-content */}
            </div>{/* .nk-block-between */}
          </div>
          <div className="nk-block">
            <Lesson isLoading={loading} isOwner={isOwner} courseId={id} isAddTopic={isAddTopic} setIsAddTopic={setIsAddTopic} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetailPage
