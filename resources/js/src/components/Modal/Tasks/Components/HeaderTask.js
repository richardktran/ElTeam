import { TextField } from '@mui/material';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateTitleTask } from '../../../../store/Tasks/Reducer';
import InlineEdit from '../../../InlineEdit/InlineEdit';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


function HeaderTask(props) {
  const dispatch = useDispatch();
  const { id, title, isLoading, deleteTask } = props;
  const [taskTitle, setTaskTitle] = useState(title);

  useEffect(() => {
    setTaskTitle(title);
  }, [title]);

  const updateTitle = (value) => {
    setTaskTitle(value);
    dispatch(updateTitleTask({ title: value, taskId: id }));
  }


  return (
    <>
      <div className="d-none d-lg-block">
        <ul className="nk-msg-tags">
          <li>
            <a href={`/tasks/${id}`} target="_blank">
              {isLoading ? <Skeleton width='100px' /> :
                <span className="label-tag">
                  <em className="icon ni ni-flag-fill" />
                  <span>CT247-{id}</span>
                </span>
              }
            </a>
          </li>
        </ul>
      </div>
      <div className="nk-msg-head-meta">
        {isLoading ? <Skeleton width="700px" height="1.7rem" /> :
          <InlineEdit value={taskTitle} setValue={setTaskTitle} onSave={updateTitle} />
        }
        <div className="d-lg-none mt-2">
          <a href="#" className="btn btn-icon btn-trigger nk-msg-hide ml-n1">
            <em className="icon ni ni-arrow-left" />
          </a>
        </div>
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
                  <a href="#" onClick={() => deleteTask(id)}>
                    <em className="icon ni ni-archive" />
                    <span>Xóa công việc</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}

export default HeaderTask