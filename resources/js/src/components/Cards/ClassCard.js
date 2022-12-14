import React, { useMemo } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import Skeleton from 'react-loading-skeleton';
import Avatar from '../Avatar/Avatar';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss'
import { courseApi } from '../../api/courseApi';

const ClassCard = (props) => {
  const { id, name, code, credit, lock_group, location, hours_per_week, students, status, handleAccept, handleDecline, isMyCourse = false } = props;

  const navigate = useNavigate();

  const getStudentList = useMemo(() => {
    let members = students;
    members.sort((a, b) => {
      if (a.avatar === null && b.avatar !== null) {
        return 1;
      }
      if (a.avatar !== null && b.avatar === null) {
        return -1;
      }
      return 0;
    });

    return members;
  }, [students]);

  const goToCourse = (courseId) => {
    if (status === 'pending') {
      toast.error('Bạn chưa đăng ký tham gia vào lớp học này');
      return;
    }
    navigate(`${isMyCourse ? '/courses/' : ''}${courseId}/lesson`);
  }

  const exitCourse = async (courseId) => {
    const result = await Swal.fire({
      title: 'Bạn có chắc chắn muốn rời khỏi lớp học này?',
      showCancelButton: true,
      icon: 'warning',
      confirmButtonColor: 'red',
      cancelButtonColor: '#8094ae',
      confirmButtonText: 'Đồng ý',
      cancelButtonText: 'Huỷ'
    })

    if (result.isConfirmed) {
      try {
        const response = await courseApi.exit(courseId);
        toast.success('Rời khỏi lớp học thành công');
        window.location.reload();
      } catch (e) {
        toast.error('Rời khỏi lớp học thất bại');
      }
    }
  }


  const deleteCourse = (courseId) => {
    Swal.fire({
      title: 'Xác nhận xoá?',
      text: "Bạn có muốn xóa lớp học này không?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'red',
      cancelButtonColor: '#8094ae',
      confirmButtonText: 'Xóa',
      cancelButtonText: 'Huỷ'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await courseApi.delete(id);
          if (response.status === 200) {
            toast.success('Xoá thành công');
            window.location.reload();
          }
        } catch (error) {
          toast.error('Xoá thất bại');
        }
      }
    })
  }

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
            {status !== 'pending' &&
              <div className="drodown">
                <a href="#" className="dropdown-toggle btn btn-sm btn-icon btn-trigger mt-n1 mr-n1" data-toggle="dropdown">
                  <em className="icon ni ni-more-h" />
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <ul className="link-list-opt no-bdr">
                    <li>
                      <Link to={`/courses/${id}/lesson`}>
                        <em className="icon ni ni-eye" />
                        <span>Xem lớp học</span>
                      </Link>
                    </li>
                    {isMyCourse === false && lock_group == 0 &&
                      <li>
                        <a onClick={() => exitCourse(id)}>
                          <em class="icon ni ni-user-cross-fill"></em>
                          <span>Rời lớp học</span>
                        </a>
                      </li>
                    }
                    {isMyCourse === true &&
                      <li>
                        <a onClick={() => deleteCourse(id)}>
                          <em class="icon ni ni-trash-alt"></em>
                          <span>Xóa lớp học</span>
                        </a>
                      </li>
                    }
                  </ul>
                </div>
              </div>
            }
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
                  <span> {students.length} thành viên</span>
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
          <div className="project-meta mb-3">
            <ul className="project-users g-1">
              {getStudentList && getStudentList.map((member, index) => {
                if (index < 3) {
                  return (
                    <div>
                      <Avatar user={member} email={member.email} image={member.avatar} name={member.name ?? member.email} size='sm' />
                    </div>
                  );
                }
              })}
              {getStudentList && getStudentList.length - 3 > 0 && (
                <li>
                  <div className="user-avatar bg-light sm">
                    <span>+{getStudentList.length - 3}</span>
                  </div>
                </li>
              )}
            </ul>
            {lock_group == 1 &&
              <span className="badge badge-dim badge-primary">
                <em class="icon ni ni-lock-fill"></em>
                <span>Đã chốt nhóm</span>
              </span>
            }

            {lock_group == 0 &&
              <span className="badge badge-dim badge-warning">
                <em class="icon ni ni-unlock-fill"></em>
                <span>Chưa chốt nhóm</span>
              </span>
            }
          </div>
          {status === 'pending' ? (
            <div className="col-12 mt-3">
              <div className="d-flex justify-content-around mt-2">
                <div onClick={() => handleDecline(id)} className="btn btn-danger">Từ chối</div>
                <div onClick={() => handleAccept(id)} className="btn btn-primary">Tham gia</div>
              </div>
            </div>
          ) : (
            <div className="col-12 mt-3">
              <div onClick={() => goToCourse(id)} className="btn btn-primary btn-block">Vào lớp học</div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

const Loading = () => {
  return (
    <div className="card h-100">
      <div className="card-inner">
        <div className="project">
          <div className="project-head">
            <a className="project-title">
              <div className="project-info">
                <h6 className="title">
                  <Skeleton width={200} />
                </h6>
                <span className="sub-text"><Skeleton width={50} /></span>
              </div>
            </a>
            <div className="drodown">
              <a href="#" className="dropdown-toggle btn btn-sm btn-icon btn-trigger mt-n1 mr-n1" data-toggle="dropdown">
                <em className="icon ni ni-more-h" />
              </a>
            </div>
          </div>
          <div className="project-details">
            <div className="row">
              <div className="col-md-6">
                <span className="label-tag ">
                  <em className="text-primary icon ni ni-map-pin-fill"></em>
                  <span> <Skeleton width={50} /></span>
                </span>
              </div>
              <div className="col-md-6">
                <span className="label-tag">
                  <em className="text-primary icon ni ni-cards"></em>
                  <span> <Skeleton width={50} /></span>
                </span>
              </div>
            </div>
            <div className="row my-2">
              <div className="col-md-6">
                <span className="label-tag">
                  <em className="text-primary icon ni ni-users"></em>
                  <span> <Skeleton width={50} /></span>
                </span>
              </div>
              <div className="col-md-6">
                <span className="label-tag">
                  <em className="text-primary icon ni ni-clock-fill"></em>
                  <span> <Skeleton width={50} /></span>
                </span>
              </div>
            </div>
          </div>
          <div className="project-progress">
            <div className="project-progress-details">
              <div className="project-progress-task">
                <em className="icon ni ni-check-round-cut" />
                <span><Skeleton width={50} /></span>
              </div>
              <div className="project-progress-percent"><Skeleton width={50} /></div>
            </div>
            <div className="progress progress-pill progress-md bg-light">
              <Skeleton />
            </div>
          </div>
          <div className="project-meta mb-3">
            <ul className="project-users g-1">
              <li>
                <Skeleton circle={true} height={32} width={32} />
              </li>
              <li>
                <Skeleton circle={true} height={32} width={32} />
              </li>
              <li>
                <Skeleton circle={true} height={32} width={32} />
              </li>
            </ul>
            <span className="badge badge-dim badge-warning">
              <em className="icon ni ni-clock" />
              <span><Skeleton width={50} /></span>
            </span>
          </div>
          <div className="col-12 mt-3">
            <div className="btn btn-primary btn-block"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

ClassCard.Loading = Loading;

export default ClassCard
