import React, { useEffect, useState } from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import toast from 'react-hot-toast';
import { useSelector, useDispatch } from 'react-redux';
import AddTopicModal from '../../../components/Modal/Lesson/AddTopicModal';
import { requestTopics, updateTopicPosition } from '../../../store/Course/Reducer';
import { lessonApi } from '../../../api/lessonApi';
import { HTTP_OK } from '../../../utils/constant';

function Lesson(props) {
  const dispatch = useDispatch();
  const { courseId, isAddTopic, setIsAddTopic, isOwner } = props;
  const topicsData = useSelector(state => state.course.lesson.topics);

  const [topics, setTopics] = useState(topicsData);

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
                                      <li><a href="#">Thêm hoạt động</a></li>
                                      <li><a href="#">Sửa chủ đề</a></li>
                                      <li><a href="#" onClick={() => toggleLockTopic(topic.id, topic.enable)}>{topic.enable === 1 ? "Khóa chủ đề" : "Mở khóa chủ đề"}</a></li>
                                      <li><a href="#">Xóa chủ đề</a></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            }
                          </div>
                          <div className="entry">
                            <p>Rất nhiều bạn chưa đọc phần hướng dẫn làm bài trên hệ thống này đã vội gởi bài dẫn đến gặp rất nhiều lỗi mà không biết tại sao.</p>
                            <p>Một số lời khuyên với các bạn:</p>
                            <ul class="list list-sm list-checked">
                              <li>Đọc kỹ phần hướng dẫn cách làm bài thực hành.</li>
                              <li>Làm các bài tập trong phần KHỞI ĐỘNG để làm quen với cách làm bài.</li>
                              <li>Khi viết chương trình trên DEV-C, các bạn nhớ lưu tập tin với phần mở rộng là .c, đừng lưu với .cpp.</li>
                              <li>Các bài tập thực hành đều có phần ví dụ về đọc đồ thị, các bạn cứ theo đó mà làm.</li>
                              <li>Các bạn NÊN thử nhiều lần để khám phá và hiểu hệ thống</li>
                              <li>Các bạn NÊN siêng năng làm tất cả các bài tập để hiểu được các giải thuật trong LTĐT, qua đó củng cố được lý thuyết và rèn luyện kỹ năng lập trình</li>
                            </ul>
                            <h5>HƯỚNG DẪN LÀM BÀI THI THỰC HÀNH</h5>
                            <ul class="list list-sm list-checked">
                              <li>Viết chương trình hoàn chỉnh: sinh viên cần phải #include, khai báo các hàm, biến cần thiết, nhập dữ liệu, tính toán và in kết quả ra màn hình.</li>
                              <li>Các bạn NÊN siêng năng làm tất cả các bài tập để hiểu được các giải thuật trong LTĐT, qua đó củng cố được lý thuyết và rèn luyện kỹ năng lập trình</li>
                            </ul>
                          </div>{/* .entry */}
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
    </div>
  )
}

export default Lesson