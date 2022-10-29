import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import mockData from './mockData'
import { useEffect, useState } from 'react'
import KanbanCard from '../Cards/KanbanCard'
import './kanban.scss'
import { updateTasks } from '../../store/Tasks/Reducer'
import { useDispatch } from 'react-redux'

const Kanban = (props) => {
  const dispatch = useDispatch();

  const { boardData, groupId } = props;
  const [data, setData] = useState(boardData);

  useEffect(() => {
    setData(boardData);
  }, [boardData]);

  const onDragEnd = result => {
    if (!result.destination) return
    const { source, destination } = result

    if (source.droppableId !== destination.droppableId) {
      let dataModify = [...data];
      const sourceColIndex = dataModify.findIndex(e => e.id == source.droppableId)
      const destinationColIndex = dataModify.findIndex(e => e.id == destination.droppableId)

      const sourceCol = dataModify[sourceColIndex]
      const destinationCol = dataModify[destinationColIndex]

      const sourceTask = [...sourceCol.tasks]
      const destinationTask = [...destinationCol.tasks]

      const [removed] = sourceTask.splice(source.index, 1)
      destinationTask.splice(destination.index, 0, removed)

      dataModify[sourceColIndex] = { ...dataModify[sourceColIndex], tasks: sourceTask }
      dataModify[destinationColIndex] = { ...dataModify[destinationColIndex], tasks: destinationTask }

      setData(dataModify);
    }
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="kanban">
        {
          data.map(section => (
            <Droppable
              key={section.id}
              droppableId={section.id.toString()}
            >
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  className='kanban-board'
                  style={{ "width": "320px", "marginLeft": "0", "marginRight": "0" }}
                  ref={provided.innerRef}
                >
                  <header class="kanban-board-header kanban-light">
                    <div class="kanban-title-board">
                      <div class="kanban-title-content">
                        <h6 class="title">{section.title}</h6>
                        <span class="badge badge-pill badge-outline-light text-dark">3</span>
                      </div>
                      <div class="kanban-title-content">
                        <div class="dropdown">
                          <a href="#" class="dropdown-toggle btn btn-sm btn-icon btn-trigger mr-n1" data-toggle="dropdown"><em class="icon ni ni-more-h"></em></a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <ul class="link-list-opt no-bdr">
                              <li><a href="#"><em class="icon ni ni-edit"></em><span>Edit Board</span></a></li>
                              <li><a href="#"><em class="icon ni ni-plus-sm"></em><span>Add Task</span></a></li>
                              <li><a href="#"><em class="icon ni ni-plus-sm"></em><span>Add Option</span></a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </header>
                  <div className="kanban__section__content">
                    {
                      section.tasks.map((task, index) => (
                        <Draggable
                          key={task.id}
                          draggableId={task.id.toString()}
                          index={index}
                        >
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              style={{
                                ...provided.draggableProps.style,
                                opacity: snapshot.isDragging ? '0.5' : '1'
                              }}
                            >
                              <KanbanCard>
                                {task.title}
                              </KanbanCard>
                            </div>
                          )}
                        </Draggable>
                      ))
                    }
                    {provided.placeholder}
                    <footer>
                      <button className="kanban-add-task btn btn-block">
                        <em className="icon ni ni-plus-sm" />
                        <span>Add another task</span>
                      </button>
                    </footer>
                  </div>
                </div>
              )}
            </Droppable>
          ))
        }
      </div>
    </DragDropContext>
  )
}

export default Kanban