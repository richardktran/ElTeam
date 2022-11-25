import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { groupApi } from '../../api/groupApi';
import { changePage } from '../../app/reducers/sideBarReducer';
import CommentTask from '../../components/Modal/Tasks/Components/CommentTask';
import ContentTask from '../../components/Modal/Tasks/Components/ContentTask';
import HeaderTask from '../../components/Modal/Tasks/Components/HeaderTask';
import Members from '../../components/Modal/Tasks/Components/Members';
import SubmitTask from '../../components/Modal/Tasks/Components/SubmitTask';
import isCourseOwner from '../../hooks/isCourseOwner';
import { getGroupInfo, requestTask } from '../../store/Tasks/Reducer';
import { requestCourse } from '../../store/Course/Reducer';
import { HTTP_OK } from '../../utils/constant';
import { changeLoading } from '../../store/App/Reducer';

function TaskDetailPage(props) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const group = useSelector(state => state.groupTasks.groupInfo);
  const task = useSelector(state => state.groupTasks.currentTask);
  const isLoading = useSelector(state => state.groupTasks.submitting);
  const [taskInfo, setTaskInfo] = useState(task);
  const [groupInfo, setGroupInfo] = useState(group);

  const fetchGroupInfo = async () => {
    let result = await groupApi.getGroupOfTask(taskInfo.id);
    if (result.status === HTTP_OK) {
      const { data } = result.data;
      setGroupInfo(data);
      dispatch(getGroupInfo(data));
      dispatch(requestCourse({ course_id: data.course_id, isLoading: true }));
    }
  }

  useEffect(() => {
    dispatch(changeLoading(isLoading));
    console.log('Loading: ' + isLoading);
  }, [isLoading]);

  useEffect(() => {
    if (taskInfo === null) {
      return;
    }
    fetchGroupInfo();
  }, [taskInfo])

  useEffect(() => {
    setTaskInfo(task);
  }, [task]);

  useEffect(() => {
    setGroupInfo(group);
  }, [group]);

  useEffect(() => {
    dispatch(requestTask({ task_id: id, isLoading: true }));
  }, []);

  return (
    <div>
      <div className="modal-body" style={{ padding: 0 }}>
        <div className="nk-msg-body bg-white">
          <div className="nk-msg-head">
            <HeaderTask
              id={taskInfo.id}
              title={taskInfo.title}
              isLoading={isLoading}
            />
            <Members
              id={taskInfo.id}
              assignees={taskInfo.assignees}
              members={groupInfo.students}
              isLoading={isLoading}
            />

            <ContentTask id={taskInfo.id} isLoading={isLoading}>
              {taskInfo.content}
            </ContentTask>

            <SubmitTask id={taskInfo.id} isLoading={isLoading} />
          </div>


          <CommentTask members={groupInfo.students} id={taskInfo.id} />

        </div>
      </div>
    </div>
  )
}

export default TaskDetailPage