import { Form, Input, DatePicker } from 'antd'
import React, { useEffect, useState } from 'react'
import moment from 'moment';
import TextEditor from '../../TextEditor/TextEditor';
import { Modal } from 'react-bootstrap';
import ContentTask from './Components/ContentTask';
import HeaderTask from './Components/HeaderTask';
import CommentTask from './Components/CommentTask';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Members from './Components/Members';
import SubmitTask from './Components/SubmitTask';
import { requestDeleteTask } from '../../../store/Tasks/Reducer';

const { TextArea } = Input;

const DetailTaskModal = (props) => {
    const { isShow, modalName, taskId, handleCloseModal, modalSize, isLoading } = props
    const dispatch = useDispatch();
    const group = useSelector(state => state.groupTasks.groupInfo);
    const task = useSelector(state => state.groupTasks.currentTask);
    const [taskInfo, setTaskInfo] = useState(task);
    const [groupInfo, setGroupInfo] = useState(group);

    useEffect(() => {
        setTaskInfo(task);
    }, [task]);

    useEffect(() => {
        setGroupInfo(group);
    }, [group]);

    const deleteTask = () => {
        Swal.fire({
            title: 'Xác nhận xoá?',
            text: "Bạn có muốn xóa công việc này không?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'red',
            cancelButtonColor: '#8094ae',
            confirmButtonText: 'Xóa',
            cancelButtonText: 'Huỷ'
        }).then(async (result) => {
            if (result.isConfirmed && groupInfo) {
                dispatch(requestDeleteTask({ task_id: taskId, group_id: groupInfo.id, isLoading: false }));
                handleCloseModal();
            }
        })
    }

    return (
        <Modal show={isShow} className="fade" size={modalSize} tabIndex={-1} backdrop='true'>
            <a href="#" onClick={handleCloseModal} className="close" data-dismiss="modal" aria-label="Close">
                <em className="icon ni ni-cross" />
            </a>
            <div className="modal-body" style={{ padding: 0 }}>
                <div className="nk-msg-body bg-white">
                    <div className="nk-msg-head">
                        <HeaderTask
                            id={taskInfo.id}
                            title={taskInfo.title}
                            isLoading={isLoading}
                            deleteTask={deleteTask}
                        />
                        <Members
                            isLoading={isLoading}
                            id={taskInfo.id}
                            assignees={taskInfo.assignees}
                            members={groupInfo.students}
                        />

                        <ContentTask isLoading={isLoading} id={taskInfo.id}>
                            {taskInfo.content}
                        </ContentTask>

                        <SubmitTask isLoading={isLoading} id={taskInfo.id} />
                    </div>
                    <CommentTask members={groupInfo.students} id={taskInfo.id} />

                </div>
            </div>
        </Modal>
    )
}

export default DetailTaskModal
