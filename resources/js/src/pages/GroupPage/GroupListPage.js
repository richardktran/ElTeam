import { isEmpty } from 'lodash';
import React, { useCallback, useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { groupApi } from '../../api/groupApi';
import Avatar from '../../components/Avatar/Avatar';
import { changeLoading } from '../../store/App/Reducer';
import { requestCourse } from '../../store/Course/Reducer';
import { HTTP_OK } from '../../utils/constant';

function GroupListPage() {
  let { id } = useParams(); //get id from url
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const courseData = useSelector(state => state.course.courseInfo);

  const loading = useSelector(state => state.course.submitting);

  const [course, setCourse] = useState(null);
  const [groupList, setGroupList] = useState(null);


  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setCourse(courseData);
  }, [courseData]);

  useEffect(() => {
    setIsLoading(loading);
  }, [loading]);

  useEffect(() => {
    dispatch(changeLoading(isLoading));
  }, [isLoading]);

  //Create a function to get all groups of course
  const fetchAllGroups = useCallback(async () => {
    let result = await groupApi.getAllGroups(id);
    if (result.status === HTTP_OK) {
      const { data } = result.data;
      console.log(data);
      setGroupList(data);
      return data;
    }
  }, []);


  useEffect(() => {
    dispatch(requestCourse({ course_id: id }));
    fetchAllGroups();
  }, [fetchAllGroups]);

  const getNameLabel = (fullName) => {
    if (fullName) {
      const lastName = fullName.split(' ').pop();
      //Get first name 
      const firstName = fullName.split(' ').shift();
      const firstLetter = lastName.charAt(0);
      return firstName.charAt(0) + firstLetter;
    }
    return '';
  }

  const goToMemberPage = () => {
    navigate(`/courses/${id}/members`);
  }

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
          {!isLoading && course.lock_group == false &&
            <div style={{
              minHeight: "50vh",
            }}
              className="d-flex flex-column align-items-center justify-content-center"
            >
              <img src="https://www.gstatic.com/classroom/empty_states_home.svg" />
              <h6 className="mt-3">Bạn chưa chốt nhóm cho khóa học này</h6>
              <div className="btn btn-primary mt-3" onClick={() => goToMemberPage()}>Phân nhóm và chốt nhóm ngay</div>
            </div>
          }
          <div className="nk-block">
            <table className="nk-tb-list is-separate nk-tb-ulist">
              {(!isEmpty(groupList) || groupList === null) && courseData.lock_group == true &&
                <thead>
                  <tr className="nk-tb-item nk-tb-head">
                    <th className="nk-tb-col"><span className="sub-text">Tên nhóm</span></th>
                    <th className="nk-tb-col tb-col-xxl"><span className="sub-text">Mã số nhóm</span></th>
                    <th className="nk-tb-col tb-col-lg"><span className="sub-text">Trưởng nhóm</span></th>
                    <th className="nk-tb-col tb-col-lg"><span className="sub-text">Thành viên</span></th>
                    <th className="nk-tb-col tb-col-md"><span className="sub-text">Tiến độ</span></th>
                    <th className="nk-tb-col tb-col-mb"><span className="sub-text">Trạng thái</span></th>
                  </tr>
                  {/* .nk-tb-item */}
                </thead>
              }
              {isLoading && <Loading />}
              {!isLoading && courseData.lock_group == true &&
                <tbody>
                  {groupList !== null && groupList && groupList.map((group, index) => {
                    let completePercent = 0;
                    if (group.number_of_tasks !== 0) {
                      completePercent = Math.round(group.number_of_completed_tasks / group.number_of_tasks * 100);
                    }

                    // Get list of members and sort with avatar first
                    let members = group.students;
                    members.sort((a, b) => {
                      if (a.avatar === null && b.avatar !== null) {
                        return 1;
                      }
                      if (a.avatar !== null && b.avatar === null) {
                        return -1;
                      }
                      return 0;
                    });

                    return (
                      <tr className="nk-tb-item">
                        <td className="nk-tb-col">
                          <Link to={`/courses/${id}/groups/${group.id}`} className="project-title">
                            <div className="user-avatar sq bg-purple"><span>{getNameLabel(group.name)}</span></div>
                            <div className="project-info">
                              <h6 className="title">{group.name}</h6>
                            </div>
                          </Link>
                        </td>
                        <td className="nk-tb-col tb-col-xxl">
                          <span>Softnio</span>
                        </td>
                        <td className="nk-tb-col tb-col-lg">
                          <span>{members[0].name}</span>
                        </td>
                        <td className="nk-tb-col tb-col-lg">
                          <ul className="project-users g-1">
                            {members.map((member, index) => {
                              if (index < 3) {
                                return (
                                  <div>
                                    <Avatar image={member.avatar} name={member.name} size='sm' />
                                  </div>
                                );
                              }
                            })}
                            {members.length - 3 > 0 && (
                              <li>
                                <div className="user-avatar bg-light sm">
                                  <span>+{members.length - 3}</span>
                                </div>
                              </li>
                            )}
                          </ul>
                        </td>

                        <td className="nk-tb-col tb-col-md">
                          <div className="project-list-progress">
                            <div className="progress progress-pill progress-md bg-light">
                              <div className="progress-bar" data-progress={completePercent} style={{ width: completePercent }} />
                            </div>
                            <div className="project-progress-percent">{completePercent}%</div>
                          </div>
                        </td>
                        <td className="nk-tb-col tb-col-mb">
                          {completePercent === 0 &&
                            <span className="badge badge-dim badge-danger">
                              <em className="icon ni ni-cross-circle" />
                              <span>Chưa làm</span>
                            </span>
                          }
                          {completePercent !== 0 && completePercent !== 100 &&
                            <span className="badge badge-dim badge-warning">
                              <em className="icon ni ni-alert-circle" />
                              <span>Đang làm</span>
                            </span>
                          }

                          {completePercent === 100 &&
                            <span className="badge badge-dim badge-success">
                              <em className="icon ni ni-check-circle" />
                              <span>Hoàn thành</span>
                            </span>
                          }
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              }
            </table>
          </div>
          {/* .nk-block */}
        </div>
      </div>
    </div>
  )
}

const Loading = () => {
  return (
    <tbody>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((group, index) => {
        return (
          <tr className="nk-tb-item">
            <td className="nk-tb-col">
              <a href='#' className="project-title">
                <div className="user-avatar sq bg-purple">
                  <Skeleton />
                </div>
                <div className="project-info">
                  <h6 className="title"><Skeleton width={100} /></h6>
                </div>
              </a>
            </td>
            <td className="nk-tb-col tb-col-xxl">
              <span><Skeleton width={100} /></span>
            </td>
            <td className="nk-tb-col tb-col-lg">
              <span><Skeleton width={200} /></span>
            </td>
            <td className="nk-tb-col tb-col-lg">
              <ul className="project-users g-1">
                {[1, 2, 3].map((member, index) => {
                  return (
                    <div>
                      <Skeleton circle={true} height={32} width={32} />
                    </div>
                  );
                })}
              </ul>
            </td>

            <td className="nk-tb-col tb-col-md">
              <div className="project-list-progress">
                <Skeleton height={10} width={200} />
              </div>
            </td>
            <td className="nk-tb-col tb-col-mb">
              <Skeleton height={20} width={100} />
            </td>
          </tr>
        )
      })}
    </tbody>
  )
}

export default GroupListPage