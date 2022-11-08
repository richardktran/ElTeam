import React, { useState } from 'react'
import { useEffect } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { useDispatch } from 'react-redux';
import { updateActivities } from '../../store/Course/Reducer';
import ActivitySection from './ActivitySection';

function Activities(props) {
  const dispatch = useDispatch();
  const { topicId, activities, isOwner } = props;
  const [isHover, setIsHover] = useState(false);
  const [activitiesData, setActivitiesData] = useState(activities);

  useEffect(() => {
    setActivitiesData(activities);
  }, [activities]);

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

  return (
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
                    className="mb-2 d-flex justify-content-start"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    style={{
                      ...provided.draggableProps.style,
                      opacity: snapshot.isDragging ? '0.5' : '1'
                    }}
                  >
                    {isOwner &&
                      <span style={{ paddingTop: '5px' }}>
                        <em class="icon ni ni-menu-circled" {...provided.dragHandleProps}></em>
                      </span>
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
  )
}

export default Activities