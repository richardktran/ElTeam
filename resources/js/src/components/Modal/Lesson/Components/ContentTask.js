import React from 'react'
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import parse from 'html-react-parser';
import { updateContentTask } from '../../../../store/Tasks/Reducer';
import TextEditor from '../../../TextEditor/TextEditor';
import Skeleton from 'react-loading-skeleton';
import Avatar from '../../../Avatar/Avatar';

function ContentTask(props) {
  const { activity, isLoading } = props;


  const transformText = useCallback((text) => {
    if (text === undefined) return "";
    let newText = text.replace("<ul", '<ul class="list list-sm list-checked"');
    newText = newText.replaceAll("h2>", 'h4>');
    return parse(newText);
  }, [activity]);

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

  return (
    <div>
      <div className="nk-msg-head-meta">
        <h4 className="title mb-2 text-info">
          <em class="icon ni ni-info mr-1" style={{ top: '2px', position: 'relative' }}></em>
          Mô tả công việc
        </h4>
        <ul className="nk-msg-actions">
          <li className="d-lg-none">
            <a href="#" className="btn btn-icon btn-sm btn-white btn-light profile-toggle">
              <em className="icon ni ni-info-i" />
            </a>
          </li>
          <li className="dropdown">
            <a href="#" className="btn btn-icon btn-sm btn-white btn-light dropdown-toggle" data-toggle="dropdown">
              <em className="icon ni ni-more-h" />
            </a>
            <div className="dropdown-menu dropdown-menu-right">
              <ul className="link-list-opt no-bdr">
                <li>
                  <a href="#">
                    <em className="icon ni ni-archive" />
                    <span>Xóa công việc</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div className='ml-2'>
        {isLoading ? <Skeleton count={5.5} /> : (
          activity && transformText(activity.content)
        )}
      </div>

      {activity && activity.tasks.length > 0 &&
        <>
          <div className="nk-msg-head-meta mt-2">
            <h4 className="title mb-2 text-info">
              <em class="icon ni ni-clipboad-check mr-1" style={{ top: '2px', position: 'relative' }}></em>
              Bài nộp của các nhóm
              <span className='ml-3'>
                <div className="btn btn-sm btn-primary">
                  <em className="icon ni ni-download-cloud" />
                  <span>Tải về tất cả</span>
                </div>
              </span>
            </h4>
          </div>
          <div className='ml-2'>
            <div className="nk-block">
              <table className="nk-tb-list is-separate nk-tb-ulist">
                <tbody>
                  {activity.tasks.map((task, index) => (
                    <tr className="nk-tb-item">
                      <td className="nk-tb-col">
                        <a href={`/tasks/${task.id}`} target="_blank" className="project-title">
                          <div className="user-avatar sq bg-purple">
                            <span>{getNameLabel(task.group_info)}</span>
                          </div>
                          <div className="project-info">
                            <h6 className="title">{task.group_info}</h6>
                          </div>
                        </a>
                      </td>
                      <td className="nk-tb-col tb-col-lg">
                        <ul className="project-users g-1">
                          {task.group_students.map((member, index) => {
                            if (index < 3) {
                              return (
                                <div>
                                  <Avatar user={member} email={member.email} image={member.avatar} name={member.name} size='sm' />
                                </div>
                              );
                            }
                          })}
                          {task.group_students.length - 3 > 0 && (
                            <li>
                              <div className="user-avatar bg-light sm">
                                <span>+{task.group_students.length - 3}</span>
                              </div>
                            </li>
                          )}
                        </ul>
                      </td>
                      <td className="nk-tb-col tb-col-mb">
                        {task.status === 'todo' &&
                          <span className="badge badge-dim badge-danger">
                            <em className="icon ni ni-cross-circle" />
                            <span>Chưa làm</span>
                          </span>
                        }
                        {task.status === 'in-progress' &&
                          <span className="badge badge-dim badge-warning">
                            <em className="icon ni ni-alert-circle" />
                            <span>Đang làm</span>
                          </span>
                        }

                        {task.status === 'done' &&
                          <span className="badge badge-dim badge-success">
                            <em className="icon ni ni-check-circle" />
                            <span>Hoàn thành</span>
                          </span>
                        }
                      </td>

                      <td className="nk-tb-col tb-col-mb">
                        {task.status === 'done' &&
                          <div className="btn btn-sm btn-primary">
                            <em className="icon ni ni-download-cloud" />
                            <span>Tải về</span>
                          </div>
                        }
                        {task.status !== 'done' &&
                          <div className="btn btn-sm disabled">
                            <em className="icon ni ni-download-cloud" />
                            <span>Tải về</span>
                          </div>
                        }
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      }
    </div>
  )
}

export default ContentTask