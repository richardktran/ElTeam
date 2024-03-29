import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import moment from 'moment';
import { groupApi } from '../../api/groupApi';
import Kanban from '../../components/Kanban/Kanban';
import isCourseOwner from '../../hooks/isCourseOwner';
import { HTTP_OK } from '../../utils/constant';
import { getGroupInfo, getTasks, requestTask, requestTasks } from '../../store/Tasks/Reducer';
import { requestCourse } from '../../store/Course/Reducer';
import AddTaskModal from '../../components/Modal/Tasks/AddTaskModal';
import DetailTaskModal from '../../components/Modal/Tasks/DetailTaskModal';
import { changeLoading } from '../../store/App/Reducer';
import Skeleton from 'react-loading-skeleton';
import isEmpty from 'lodash/isEmpty';
import EditGroupNameModal from '../../components/Modal/Course/EditGroupNameModal';

const MyGroupPage = () => {
  let { courseId } = useParams(); //get id from url
  const isOwner = isCourseOwner(courseId);

  const dispatch = useDispatch();
  const tasks = useSelector(state => state.groupTasks.sections);
  const loading = useSelector(state => state.groupTasks.submitting);
  const [isLoading, setIsLoading] = useState(loading);
  const [groupInfo, setGroupInfo] = useState(null);

  const [boardData, setBoardData] = useState(null);
  const [sectionId, setSectionId] = useState(0);
  const [taskId, setTaskId] = useState(0);
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);
  const [showDetailTaskModal, setShowDetailTaskModal] = useState(false);
  const [showEditGroupNameModal, setShowEditGroupNameModal] = useState({
    show: false,
    name: ''
  });

  const fetchGroupInfo = async () => {
    let result = await groupApi.getMyGroupInfo(courseId);
    if (result.status === HTTP_OK) {
      const { data } = result.data;
      if (data !== null) {
        setGroupInfo(data);
        dispatch(getGroupInfo(data));
        dispatch(requestTasks({ group_id: data.id }));
      } else {
        setGroupInfo({});
        dispatch(getTasks([]));
      }

    }
  }

  useEffect(() => {
    if (loading === undefined) {
      setIsLoading(true);
    }
    setIsLoading(loading);
  }, [loading]);

  useEffect(() => {
    dispatch(changeLoading(isLoading));
  }, [isLoading]);

  useEffect(() => {
    setBoardData(tasks);
  }, [tasks]);

  useEffect(() => {
    dispatch(requestCourse({ course_id: courseId }));
    fetchGroupInfo();
  }, []);

  const openAddTaskModal = (sectionId) => {
    setShowAddTaskModal(true);
    setSectionId(sectionId);
  }

  const openDetailTaskModal = (taskId) => {
    setShowDetailTaskModal(true);
    dispatch(requestTask({ task_id: taskId }));
    setTaskId(taskId);
  }

  const addTask = async (values) => {
    try {
      const deadline = moment(values.deadline).format('YYYY-MM-DD') ?? null;
      const data = {
        title: values.title,
        content: values.content,
        deadline: deadline,
        section_id: sectionId,
      }

      const response = await groupApi.create(groupInfo.id, data);
      if (response.status === HTTP_OK) {
        toast.success('Thêm nhiệm vụ thành công!');
        dispatch(requestTasks({ group_id: groupInfo.id, loading: false }));

        setShowAddTaskModal(false);
      } else {
        console.log(response);
        toast.error("Thêm nhiệm vụ thất bại!!!");
        setShowAddTaskModal(true);
      }
    } catch (e) {
      console.log(e);
      const messages = e.response.data.messages;
      messages.forEach(message => {
        toast.error(message.message);
      });
      setShowAddTaskModal(true);
    }
  }

  const editGroupName = async (values) => {
    const isUndefined = Object.values(values).some(value => value === undefined);
    if (isUndefined) {
      setShowEditGroupNameModal({ show: false, name: '' })
      return;
    }
    try {
      let data = values;

      const response = await groupApi.updateGroup(groupInfo.id, data);
      if (response.status === HTTP_OK) {
        toast.success('Chỉnh sửa thành công!');
        dispatch(requestCourse({ course_id: courseId }));
        fetchGroupInfo();
        setShowEditGroupNameModal({ show: false, name: '' })
      } else {
        console.log(response);
        setShowEditGroupNameModal({ show: false, name: '' })
      }
    } catch (e) {
      console.log(e);
      setShowEditGroupNameModal({ show: false, name: '' })
    }
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
                {loading || groupInfo === null ? (
                  <h3 className="nk-block-title page-title">
                    <Skeleton width={300} />
                  </h3>
                ) :
                  isEmpty(groupInfo) ?
                    <div></div>
                    :
                    <h3 className="nk-block-title page-title">
                      Nhóm {groupInfo.number} - {groupInfo.name}
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
                          <a onClick={() => setShowEditGroupNameModal({ show: true, name: groupInfo.name })} className="btn btn-white btn-dim btn-outline-light" >
                            <em class="icon ni ni-pen2"></em>
                            <span>
                              Đổi tên nhóm
                            </span>
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>{/* .nk-block-head-content */}
            </div>{/* .nk-block-between */}
          </div>

          <div className="nk-block">
            {(isEmpty(groupInfo) && groupInfo !== null) &&
              <div style={{
                minHeight: "50vh",
              }}
                className="d-flex flex-column align-items-center justify-content-center"
              >
                <img src="https://www.gstatic.com/classroom/empty_states_home.svg" />
                <h6 className="mt-3">Giáo viên chưa chốt nhóm, mời bạn quay lại sau!</h6>
              </div>
            }
            {(loading === true || loading === undefined) &&
              <Kanban.Loading />
            }
            {boardData !== null && groupInfo !== null &&
              <Kanban
                isLoading={loading}
                boardData={boardData}
                openAddTaskModal={openAddTaskModal}
                openDetailTaskModal={openDetailTaskModal}
                groupId={groupInfo.id}
              />
            }
          </div>
          <AddTaskModal
            modalName="Thêm công việc"
            modalSize='xl'
            onFinish={addTask}
            isShow={showAddTaskModal}
            handleCloseModal={() => setShowAddTaskModal(false)}
          />

          <DetailTaskModal
            modalName="Chi tiết công việc"
            taskId={taskId}
            modalSize='xl'
            onFinish={addTask}
            isLoading={loading}
            isShow={showDetailTaskModal}
            handleCloseModal={() => setShowDetailTaskModal(false)}
          />

          <EditGroupNameModal
            modalName="Đổi tên nhóm"
            onFinish={editGroupName}
            currentName={showEditGroupNameModal.name}
            isShow={showEditGroupNameModal.show}
            handleCloseModal={() => setShowEditGroupNameModal({ show: false, name: '' })}
          />
        </div>
      </div>
    </div>
  );
}

export default MyGroupPage
