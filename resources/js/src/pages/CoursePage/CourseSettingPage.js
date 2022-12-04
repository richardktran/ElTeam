import React, { useState } from 'react'
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import Skeleton from 'react-loading-skeleton';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { courseApi } from '../../api/courseApi';
import EditCourseModal from '../../components/Modal/Course/EditCourseModal';
import isCourseOwner from '../../hooks/isCourseOwner';
import { requestCourse } from '../../store/Course/Reducer';
import { HTTP_OK } from '../../utils/constant';

function CourseSettingPage() {
  const { courseId } = useParams();
  const isOwner = isCourseOwner(courseId);
  const dispatch = useDispatch();
  const course = useSelector(state => state.course.courseInfo);
  const loading = useSelector(state => state.course.submitting);

  const [isOpenEditCourseModal, setIsOpenEditCourseModal] = useState({
    isOpen: false,
    value: '',
    type: 'text',
    field: '',
    label: '',
  });

  useEffect(() => {
    dispatch(requestCourse({ course_id: courseId }));
  }, [])

  const handleEditCourse = async (values) => {
    const isUndefined = Object.values(values).some(value => value === undefined);
    if (isUndefined) {
      setIsOpenEditCourseModal({ isOpen: false, field: '', value: '', type: 'text', label: '' });
      return;
    }
    try {
      let data = values;
      if (values.start_date) {
        data = {
          ...values,
          start_date: values.start_date.format('YYYY-MM-DD'),
        }
      }
      if (values.end_date) {
        data = {
          ...data,
          end_date: values.end_date.format('YYYY-MM-DD'),
        }
      }

      const response = await courseApi.update(courseId, data);
      if (response.status === HTTP_OK) {
        toast.success('Chỉnh sửa thành công!');
        dispatch(requestCourse({ course_id: courseId }));
        setIsOpenEditCourseModal({ isOpen: false, field: '', value: '', type: 'text', label: '' });
      } else {
        console.log(response);
        setIsOpenEditCourseModal({ isOpen: false, field: '', value: '', type: 'text', label: '' });
      }
    } catch (e) {
      console.log(e);
      setIsOpenEditCourseModal({ isOpen: false, field: '', value: '', type: 'text', label: '' });
    }
  }
  return (
    <div className="container-fluid">
      <div className="nk-content-inner">
        <div className="nk-content-body">
          <div className="nk-block">
            <div className="card">
              <div className="card-aside-wrap">
                <div className="card-inner card-inner-lg">
                  <div className="nk-block-head nk-block-head-sm">
                    <div className="nk-block-between">
                      <div className="nk-block-head-content">
                        <div className="nk-block-head-sub mb-2">
                          <Link className="back-to" to={"/courses"} >
                            <em className="icon ni ni-arrow-left" />
                            <span>Trở lại</span>
                          </Link>
                        </div>

                        <h3 className="nk-block-title page-title">
                          Cài đặt lớp học
                        </h3>
                      </div>{/* .nk-block-head-content */}
                    </div>{/* .nk-block-between */}
                  </div>
                  <div className="nk-block mt-3">
                    <div className="nk-data data-list">
                      <div className="data-head">
                        {loading &&
                          <h6 className="overline-title"><Skeleton /></h6>

                        }
                        {!loading && <h6 className="overline-title">{course.code} - {course.name}</h6>}
                      </div>
                      <div className="data-item" data-toggle="modal" data-target="#profile-edit">
                        <div className="data-col">
                          <span className="data-label">Mã học phần</span>
                          {loading &&
                            <span className="data-value"><Skeleton width={100} height={`1.5rem`} /></span>
                          }
                          {!loading && <span className="data-value">{course.code}</span>}
                        </div>
                        <div className="data-col data-col-end">
                          <span className="data-more" onClick={
                            () => setIsOpenEditCourseModal({
                              isOpen: true,
                              value: course.code,
                              type: 'text',
                              field: 'code',
                              label: 'Mã học phần'
                            })
                          }>
                            <em className="icon ni ni-forward-ios" />
                          </span>
                        </div>
                      </div>{/* data-item */}
                      <div className="data-item" data-toggle="modal" data-target="#profile-edit">
                        <div className="data-col">
                          <span className="data-label">Tên học phần</span>
                          {loading &&
                            <span className="data-value"><Skeleton width={200} height={`1.5rem`} /></span>
                          }
                          {!loading && <span className="data-value">{course.name}</span>}
                        </div>
                        <div className="data-col data-col-end">
                          <span className="data-more" onClick={
                            () => setIsOpenEditCourseModal({
                              isOpen: true,
                              value: course.name,
                              type: 'text',
                              field: 'name',
                              label: 'Tên học phần'
                            })
                          }>
                            <em className="icon ni ni-forward-ios" />
                          </span>
                        </div>
                      </div>{/* data-item */}
                      <div className="data-item" data-toggle="modal" data-target="#profile-edit">
                        <div className="data-col">
                          <span className="data-label">Địa điểm</span>
                          {loading &&
                            <span className="data-value"><Skeleton width={100} height={`1.5rem`} /></span>
                          }
                          {!loading && <span className="data-value">{course.location}</span>}
                        </div>
                        <div className="data-col data-col-end">
                          <span className="data-more" onClick={
                            () => setIsOpenEditCourseModal({
                              isOpen: true,
                              value: course.location,
                              type: 'text',
                              field: 'location',
                              label: 'Địa điểm'
                            })
                          }>
                            <em className="icon ni ni-forward-ios" />
                          </span>
                        </div>
                      </div>{/* data-item */}
                      <div className="data-item" data-toggle="modal" data-target="#profile-edit">
                        <div className="data-col">
                          <span className="data-label">Số tín chỉ</span>
                          {loading &&
                            <span className="data-value"><Skeleton width={100} height={`1.5rem`} /></span>
                          }
                          {!loading && <span className="data-value">{course.credit}</span>}
                        </div>
                        <div className="data-col data-col-end">
                          <span className="data-more" onClick={
                            () => setIsOpenEditCourseModal({
                              isOpen: true,
                              value: course.credit,
                              type: 'text',
                              field: 'credit',
                              label: 'Số tín chỉ'
                            })
                          }>
                            <em className="icon ni ni-forward-ios" />
                          </span>
                        </div>
                      </div>{/* data-item */}
                      <div className="data-item" data-toggle="modal" data-target="#profile-edit">
                        <div className="data-col">
                          <span className="data-label">Ngày bắt đầu lớp học</span>
                          {loading &&
                            <span className="data-value"><Skeleton width={100} height={`1.5rem`} /></span>
                          }
                          {!loading && <span className="data-value">{(new Date(course.start_date)).toLocaleDateString()}</span>}
                        </div>
                        <div className="data-col data-col-end">
                          <span className="data-more" onClick={
                            () => setIsOpenEditCourseModal({
                              isOpen: true,
                              value: course.start_date,
                              type: 'date',
                              field: 'start_date',
                              label: 'Ngày bắt đầu lớp học'
                            })
                          }>
                            <em className="icon ni ni-forward-ios" />
                          </span>
                        </div>
                      </div>{/* data-item */}
                      <div className="data-item" data-toggle="modal" data-target="#profile-edit" data-tab-target="#address">
                        <div className="data-col">
                          <span className="data-label">Ngày kết thúc lớp học</span>
                          {loading &&
                            <span className="data-value"><Skeleton width={100} height={`1.5rem`} /></span>
                          }
                          {!loading && <span className="data-value">{(new Date(course.end_date)).toLocaleDateString()}</span>}
                        </div>
                        <div className="data-col data-col-end">
                          <span className="data-more" onClick={
                            () => setIsOpenEditCourseModal({
                              isOpen: true,
                              value: course.end_date,
                              type: 'date',
                              field: 'end_date',
                              label: 'Ngày kết thúc lớp học'
                            })
                          }>
                            <em className="icon ni ni-forward-ios" />
                          </span>
                        </div>
                      </div>{/* data-item */}

                    </div>{/* data-list */}

                  </div>{/* .nk-block */}

                </div> {/* card-aside */}

              </div>{/* .card-aside-wrap */}

            </div>{/* .card */}

          </div>{/* .nk-block */}

        </div>
      </div>
      <EditCourseModal
        courseId={courseId}
        modalName="Chỉnh sửa thông tin học phần"
        field={isOpenEditCourseModal.field}
        value={isOpenEditCourseModal.value}
        type={isOpenEditCourseModal.type}
        label={isOpenEditCourseModal.label}
        isShow={isOpenEditCourseModal.isOpen}
        setIsShow={setIsOpenEditCourseModal}
        onFinish={handleEditCourse}
        handleCloseModal={() => setIsOpenEditCourseModal({ isOpen: false, field: '', value: '', type: 'text', label: '' })}
      />
    </div>
  )
}

export default CourseSettingPage