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

function Lesson(props) {
  const dispatch = useDispatch();
  const { courseId, isAddTopic, setIsAddTopic, isOwner } = props;
  const topicsData = useSelector(state => state.course.lesson.topics);

  const [topics, setTopics] = useState(topicsData);
  const [showAddActivityModal, setShowAddActivityModal] = useState({ show: false, topicId: null });

  const [showAddTopic, setShowAddTopic] = React.useState(false);

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
        dispatch(requestTopics());
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

  const toggleLockTopic = async (topicId, oldStatus) => {
    try {
      const response = await lessonApi.toggleLockTopic(topicId);
      if (response.status === HTTP_OK) {
        toast.success(oldStatus ? 'Khóa chủ đề thành công!' : 'Mở khóa chủ đề thành công!');
        dispatch(requestTopics());
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

  const addActivity = () => {
    //
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
                                      <li><a href="#">Sửa chủ đề</a></li>
                                      <li><a href="#" onClick={() => toggleLockTopic(topic.id, topic.enable)}>{topic.enable === 1 ? "Khóa chủ đề" : "Mở khóa chủ đề"}</a></li>
                                      <li><a href="#">Xóa chủ đề</a></li>
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
      <AddActivityModal
        modalName="Thêm hoạt động mới"
        onFinish={addActivity}
        topicId={showAddActivityModal.topicId}
        isShow={showAddActivityModal.show}
        setIsShow={setShowAddActivityModal}
        handleCloseModal={() => setShowAddActivityModal({ show: false })}
      />
    </div>
  )
}

export default Lesson