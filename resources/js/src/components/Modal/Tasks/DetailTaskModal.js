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

const { TextArea } = Input;

const DetailTaskModal = (props) => {
    const { isShow, modalName, taskId, handleCloseModal, modalSize } = props
    const dispatch = useDispatch();
    const group = useSelector(state => state.groupTasks.groupInfo);
    const task = useSelector(state => state.groupTasks.currentTask);
    const isLoading = useSelector(state => state.groupTasks.isSubmitting);
    const [taskInfo, setTaskInfo] = useState(task);
    const [groupInfo, setGroupInfo] = useState(group);

    useEffect(() => {
        setTaskInfo(task);
    }, [task]);

    useEffect(() => {
        setGroupInfo(group);
    }, [group]);

    return (
        <Modal show={isShow} className="fade" size={modalSize} tabIndex={-1} backdrop='true'>
            <a href="#" onClick={handleCloseModal} className="close" data-dismiss="modal" aria-label="Close">
                <em className="icon ni ni-cross" />
            </a>
            <div className="modal-body" style={{ padding: 0 }}>
                {isLoading ? (
                    <div className="text-center">
                        <div className="spinner-border text-primary" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                ) : (
                    <div className="nk-msg-body bg-white">
                        <div className="nk-msg-head">
                            <HeaderTask
                                id={taskInfo.id}
                                title={taskInfo.title}
                            />
                            <Members
                                id={taskInfo.id}
                                assignees={taskInfo.assignees}
                                members={groupInfo.students}
                            />

                            <ContentTask id={taskInfo.id}>
                                {taskInfo.content}
                            </ContentTask>
                        </div>


                        <CommentTask id={taskInfo.id} />

                    </div>
                )}
            </div>
        </Modal>
    )
}

export default DetailTaskModal
