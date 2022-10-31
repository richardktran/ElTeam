import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import moment from 'moment';
import { groupApi } from '../../api/groupApi';
import { changePage } from '../../app/reducers/sideBarReducer';
import Kanban from '../../components/Kanban/Kanban';
import isCourseOwner from '../../hooks/isCourseOwner';
import { HTTP_OK } from '../../utils/constant';
import { courseDetailItems, courseMembersItems } from '../CoursePage/sidebars/courseDetail';
import { requestTasks } from '../../store/Tasks/Reducer';
import AddTaskModal from '../../components/Modal/AddTaskModal';

const MyGroupPage = () => {
  let { courseId } = useParams(); //get id from url
  const isOwner = isCourseOwner(courseId);

  const dispatch = useDispatch();
  const tasks = useSelector(state => state.groupTasks.sections);
  const sidebarItems = useSelector(state => state.sidebar);
  const [groupInfo, setGroupInfo] = useState({});

  const [boardData, setBoardData] = useState(tasks);
  const [sectionId, setSectionId] = useState(0);
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);

  const fetchGroupInfo = async () => {
    let result = await groupApi.getMyGroupInfo(courseId);
    if (result.status === HTTP_OK) {
      const { data } = result.data;
      setGroupInfo(data);

      const fetchTasksAction = requestTasks(data.id);
      dispatch(fetchTasksAction);
    }
  }

  useEffect(() => {
    setBoardData(tasks);
  }, [tasks]);

  useEffect(() => {
    const items = isOwner ? courseDetailItems : courseMembersItems;
    const action = changePage(sidebarItems.length === 0 ? items : sidebarItems);
    dispatch(action);
  }, [isOwner]);

  useEffect(() => {
    const items = isOwner ? courseDetailItems : courseMembersItems;
    const action = changePage(sidebarItems.length === 0 ? items : sidebarItems);
    dispatch(action);
    fetchGroupInfo();
  }, []);

  const openAddTaskModal = (sectionId) => {
    setShowAddTaskModal(true);
    setSectionId(sectionId);
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
        dispatch(requestTasks(groupInfo.id));
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
                <h3 className="nk-block-title page-title">Nhóm {groupInfo.number} - {groupInfo.name}</h3>
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
          <div className="nk-block">
            <Kanban
              boardData={boardData}
              openAddTaskModal={openAddTaskModal}
              groupId={groupInfo.id}
            />
          </div>
          <AddTaskModal
            modalName="Thêm công việc"
            modalSize='lg'
            onFinish={addTask}
            isShow={showAddTaskModal}
            handleCloseModal={() => setShowAddTaskModal(false)}
          />
        </div>
      </div>
    </div>
  );
}

export default MyGroupPage
