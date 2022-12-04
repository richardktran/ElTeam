import React, { useMemo } from 'react'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import Skeleton from 'react-loading-skeleton';
import Avatar from '../Avatar/Avatar';

const ClassCard = (props) => {
  const { id, name, code, credit, location, hours_per_week, students, status, handleAccept, handleDecline, isMyCourse = false } = props;

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
                      <Avatar email={member.email} image={member.avatar} name={member.name ?? member.email} size='sm' />
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
            <span className="badge badge-dim badge-warning">
              <em className="icon ni ni-clock" />
              <span>5 Days Left</span>
            </span>
          </div>
          {status === 'pending' ? (
            <div className="col-12 mt-3">
              <ul className="align-center flex-wrap flex-sm-nowrap gx-5 gy-2">
                <li>
                  <div onClick={() => handleDecline(id)} className="btn btn-danger">Từ chối</div>
                </li>
                <li>
                  <div onClick={() => handleAccept(id)} className="btn btn-primary">Tham gia</div>
                </li>
              </ul>
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
