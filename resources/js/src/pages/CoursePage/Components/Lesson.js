import React, { useEffect, useState } from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import toast from 'react-hot-toast';
import { useSelector, useDispatch } from 'react-redux';
import AddTopicModal from '../../../components/Modal/Lesson/AddTopicModal';
import { requestTopics, updateTopicPosition } from '../../../store/Course/Reducer';
import { lessonApi } from '../../../api/lessonApi';
import { HTTP_OK } from '../../../utils/constant';
import Activities from '../../../components/Activity';
import AddActivityModal from '../../../components/Modal/Lesson/AddActivityModal';
import EditTopicModal from '../../../components/Modal/Lesson/EditTopicModal';
import EditActivityModal from '../../../components/Modal/Lesson/EditActivityModal';
import Skeleton from 'react-loading-skeleton';
import { isEmpty } from 'lodash';

function Lesson(props) {
  const dispatch = useDispatch();
  const { courseId, isAddTopic, setIsAddTopic, isOwner, isLoading } = props;
  const topicsData = useSelector(state => state.course.lesson.topics);

  const [topics, setTopics] = useState(null);
  const [showAddActivityModal, setShowAddActivityModal] = useState({ show: false, topicId: null });

  const [showAddTopic, setShowAddTopic] = React.useState(false);
  const [showEditTopic, setShowEditTopic] = useState({ show: false, topic: {} });

  useEffect(() => {
    setTopics(topicsData);
  }, [topicsData]);

  useEffect(() => {
    setShowAddTopic(isAddTopic);
  }, [isAddTopic])



  useEffect(() => {
    setIsAddTopic(showAddTopic);
  }, [showAddTopic])

  const addTopic = async (values) => {
    try {
      const data = {
        name: values.name,
        course_id: courseId,
      }

      const response = await lessonApi.create(data);
      if (response.status === HTTP_OK) {
        toast.success('Thêm chủ đề thành công!');
        dispatch(requestTopics({ loading: false }));
        setIsAddTopic(false);
      } else {
        console.log(response);
        toast.error("Thêm chủ đề thất bại!!!");
        setIsAddTopic(true);
      }
    } catch (e) {
      console.log(e);
      const messages = e.response.data.messages;
      messages.forEach(message => {
        toast.error(message.message);
      });
      setIsAddTopic(true);
    }
  }

  const deleteTopic = async (id) => {
    try {
      const response = await lessonApi.delete(id);
      if (response.status === HTTP_OK) {
        toast.success('Xóa chủ đề thành công!');
        dispatch(requestTopics({ loading: false }));
      } else {
        console.log(response);
        toast.error("Xóa chủ đề thất bại!!!");
      }
    } catch (e) {
      console.log(e);
      toast.error("Xóa chủ đề thất bại!!!");
    }
  }

  const toggleLockTopic = async (topicId, oldStatus) => {
    try {
      const response = await lessonApi.toggleLockTopic(topicId);
      if (response.status === HTTP_OK) {
        toast.success(oldStatus ? 'Khóa chủ đề thành công!' : 'Mở khóa chủ đề thành công!');
        dispatch(requestTopics({ loading: false }));
      } else {
        console.log(response);
        toast.error(!oldStatus ? 'Khóa chủ đề thất bại!' : 'Mở khóa chủ đề thất bại!');
      }
    } catch (e) {
      console.log(e);
      const messages = e.response.data.messages;
      messages.forEach(message => {
        toast.error(message.message);
      });
    }
  }

  const onDragEnd = result => {
    if (!result.destination) return;
    const { source, destination } = result;
    const sourceIndex = source.index;
    const destinationIndex = destination.index;

    const newTopics = [...topics];
    const [removed] = newTopics.splice(sourceIndex, 1);
    newTopics.splice(destinationIndex, 0, removed);
    //update all position of topic equal index
    const newTopicsData = [];
    newTopics.forEach((topic, index) => {
      topic = { ...topic, position: index }
      newTopicsData.push(topic);
    });
    setTopics(newTopicsData);
    dispatch(updateTopicPosition({ courseId, newTopics: newTopicsData }));
  }

  return (
    <>
      {!isLoading && isEmpty(topics) && topics !== null &&
        <div style={{
          minHeight: "50vh",
        }}
          className="d-flex flex-column align-items-center justify-content-center"
        >
          <img src="https://www.gstatic.com/classroom/empty_states_home.svg" />
          <h6 className="mt-3">Khóa học này chưa có chủ đề nào
            {isOwner && <span>, tạo chủ đề ngay!</span>}
          </h6>
          {isOwner && <div className="btn btn-primary mt-3" onClick={() => setIsAddTopic(true)}>Tạo chủ đề</div>}
        </div>
      }
      {(isLoading || topics === null) && <Loading />}
      {!isLoading && topics !== null &&
        <div className="lesson">
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable key="drop-1" droppableId="drop-1">
              {(provided, snapshot) => (
                <div
                  {...provided.droppableProps}
                  className='nk-block'
                  ref={provided.innerRef}
                >
                  {topics && topics.map((topic, index) => {
                    if (!isOwner && topic.enable === 0) return null;
                    return (
                      <Draggable
                        key={topic.id}
                        draggableId={topic.id.toString()}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div
                            className="support-topic-details card card-bordered"
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            style={{
                              ...provided.draggableProps.style,
                              opacity: snapshot.isDragging ? '0.5' : '1'
                            }}
                          >
                            <div className="card-inner">
                              <div
                                className="card-title-group mb-4"
                                {...isOwner ? provided.dragHandleProps : {}}
                              >
                                <div className="card-title">
                                  <h4 style={{ color: "#6576ff" }}>
                                    {topic.enable !== 1 ? <span><em class="icon ni ni-lock-alt-fill mr-2"></em></span> : <span></span>}
                                    {topic.name}
                                  </h4>
                                </div>
                                {isOwner &&
                                  <div className="card-tools mr-n1">
                                    <div className="dropdown">
                                      <a className="text-soft dropdown-toggle btn btn-icon btn-trigger" data-toggle="dropdown"><em className="icon ni ni-more-h" /></a>
                                      <div className="dropdown-menu dropdown-menu-right dropdown-menu-sm">
                                        <ul className="link-list-plain">
                                          <li>
                                            <a href="#" onClick={() => setShowAddActivityModal({
                                              show: true,
                                              topicId: topic.id
                                            })}>Thêm hoạt động</a>
                                          </li>
                                          <li><a href="#" onClick={() => setShowEditTopic({ show: true, topic: topic })}>Sửa chủ đề</a></li>
                                          <li><a href="#" onClick={() => toggleLockTopic(topic.id, topic.enable)}>{topic.enable === 1 ? "Khóa chủ đề" : "Mở khóa chủ đề"}</a></li>
                                          <li><a onClick={() => deleteTopic(topic.id)}>Xóa chủ đề</a></li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                }
                              </div>

                              <Activities topicId={topic.id} activities={topic.activities} isOwner={isOwner} />
                            </div>{/* .support-topic-meta */}
                          </div>
                        )}
                      </Draggable>
                    );
                  })}
                </div>
              )}
            </Droppable>
          </DragDropContext>
          <AddTopicModal
            modalName="Thêm chủ đề"
            courseId={courseId}
            onFinish={addTopic}
            isShow={showAddTopic}
            handleCloseModal={() => setShowAddTopic(false)}
          />
          <EditTopicModal
            modalName="Cập nhật chủ đề"
            topicInfo={showEditTopic.topic}
            isShow={showEditTopic.show}
            setIsShow={setShowEditTopic}
            handleCloseModal={() => setShowEditTopic({ show: false, topic: {} })}
          />
          <AddActivityModal
            modalName="Thêm hoạt động mới"
            topicId={showAddActivityModal.topicId}
            isShow={showAddActivityModal.show}
            setIsShow={setShowAddActivityModal}
            handleCloseModal={() => setShowAddActivityModal({ show: false })}
          />

        </div>
      }
    </>
  )
}

const Loading = () => {
  return (
    <div className="lesson">
      <div className="nk-block">
        {Array.from({ length: 5 }).map((_, index) => (
          <div className="support-topic-details card card-bordered" data-rbd-draggable-context-id={0} data-rbd-draggable-id={3} style={{ opacity: 1 }}>
            <div className="card-inner">
              <div className="card-title-group mb-4">
                <div className="card-title">
                  <h4 style={{ color: 'rgb(101, 118, 255)' }}>
                    <Skeleton width={200} height={`1.5rem`} />
                  </h4>
                </div>
              </div>
              <div>
                <div className="entry" data-rbd-droppable-id="activities-1" data-rbd-droppable-context-id={1}>
                  <div className="mb-3 d-flex justify-content-start" data-rbd-draggable-context-id={1} data-rbd-draggable-id={19} style={{ opacity: 1 }}>
                    <div className="pl-2 mb-2">
                      {[...Array(7)].map((e, i) => (
                        <Skeleton height={`1.3rem`} className="mb-2" width={`70rem`} />
                      ))}
                      <Skeleton height={`1.3rem`} className="mb-2" count={0.5} width={`70rem`} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Lesson