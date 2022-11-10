import React, { useState } from 'react'
import { useEffect } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { useDispatch } from 'react-redux';
import { lessonApi } from '../../api/lessonApi';
import { requestTopics, updateActivities } from '../../store/Course/Reducer';
import ActivitySection from './ActivitySection';
import { HTTP_OK } from '../../utils/constant';
import toast from 'react-hot-toast';
import EditActivityModal from '../Modal/Lesson/EditActivityModal';

function Activities(props) {
  const dispatch = useDispatch();
  const { topicId, activities, isOwner } = props;
  const [activitiesData, setActivitiesData] = useState(activities);
  const [showEditActivityModal, setShowEditActivityModal] = useState({ show: false, activity: null });

  useEffect(() => {
    setActivitiesData(activities);
  }, [activities]);

  const toggleLockActivity = async (activityId, oldStatus) => {
    try {
      const response = await lessonApi.toggleLockActivity(activityId);
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

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const { source, destination } = result;
    const sourceIndex = source.index;
    const destinationIndex = destination.index;

    const newActivities = [...activitiesData];
    const [removed] = newActivities.splice(sourceIndex, 1);
    newActivities.splice(destinationIndex, 0, removed);
    //update all position of topic equal index
    const newActivitiesData = [];
    newActivities.forEach((topic, index) => {
      topic = { ...topic, position: index }
      newActivitiesData.push(topic);
    });
    setActivitiesData(newActivitiesData);
    dispatch(updateActivities({ topicId: topicId, newActivities: newActivitiesData }));
  }

  const deleteActivity = async (id) => {
    try {
      const response = await lessonApi.deleteActivity(id);
      if (response.status === HTTP_OK) {
        toast.success('Xóa hoạt động thành công!');
        dispatch(requestTopics());
      } else {
        console.log(response);
        toast.error("Xóa hoạt động thất bại!!!");
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable key="activities-1" droppableId="activities-1">
          {(provided, snapshot) => (
            <div className="entry" {...provided.droppableProps} ref={provided.innerRef}>
              {activitiesData.map((activity, index) => (
                <Draggable
                  key={activity.id}
                  draggableId={activity.id.toString()}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <div
                      className="mb-3 d-flex justify-content-start"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      style={{
                        ...provided.draggableProps.style,
                        opacity: snapshot.isDragging ? '0.5' : '1'
                      }}
                    >
                      {isOwner &&
                        <div className='dropdown d-flex align-items-center'>
                          <span className='dropdown-toggle' data-toggle="dropdown">
                            <em class="icon ni ni-menu-circled" {...provided.dragHandleProps}></em>
                          </span>
                          <div className="dropdown-menu dropdown-menu-left">
                            <ul className="link-list-opt no-bdr">
                              <li>
                                <a href="#" onClick={() => setShowEditActivityModal({ show: true, activity })}>
                                  <span>Sửa hoạt động</span>
                                </a>
                              </li>
                              <li>
                                <a href="#" onClick={() => toggleLockActivity(activity.id, activity.enable)}>
                                  <span>{activity.enable === 1 ? "Khóa hoạt động" : "Mở khóa hoạt động"}</span>
                                </a>
                              </li>
                              <li>
                                <a onClick={() => deleteActivity(activity.id)}>
                                  <span>Xóa hoạt động</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      }
                      <div className='pl-2'>
                        <ActivitySection activity={activity} isOwner={isOwner} />
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <EditActivityModal
        modalName="Cập nhật hoạt động"
        activity={showEditActivityModal.activity}
        isShow={showEditActivityModal.show}
        setIsShow={setShowEditActivityModal}
        handleCloseModal={() => setShowEditActivityModal({ show: false, activity: null })}
      />
    </div>
  )
}

export default Activities