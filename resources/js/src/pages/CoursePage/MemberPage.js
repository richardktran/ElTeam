import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { courseApi } from '../../api/courseApi';
import { userApi } from '../../api/userApi';
import { changePage } from '../../app/reducers/sideBarReducer';
import Layout from '../../components/Layout/Layout';
import AddMemberModal from '../../components/Modal/AddMemberModal';
import MemberList from '../../components/MemberList/MemberList';
import { HTTP_OK } from '../../utils/constant';
import isCourseOwner from '../../hooks/isCourseOwner';
import { requestCourse } from '../../store/Course/Reducer';
import RandomDivideGroupModel from '../../components/Modal/RandomDivideGroupModel';

const MemberPage = () => {
  let { id } = useParams(); //get id from url
  const isOwner = isCourseOwner(id);

  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [showRandomFormModel, setShowRandomFormModel] = useState(false);
  const course = useSelector((state) => state.course.courseInfo);

  const [members, setMembers] = useState(null);
  const fetchMembers = async () => {
    setIsLoading(true);
    let result = await courseApi.getMembers(id);
    if (result.status === HTTP_OK) {
      const { data } = result.data;
      setMembers(data);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    fetchMembers();
    dispatch(requestCourse({ course_id: id }));
  }, []);

  const openDivideGroup = () => {
    let count = 0;
    members.forEach(member => {
      if (member.pivot.status === 'accepted') {
        count++;
      }
    });
    if (count === 0) {
      toast.error('Chưa thể phân nhóm do chưa có thành viên đồng ý tham gia khóa học');
      return;
    }
    setShowRandomFormModel(true);
  }

  const lockGroup = () => {
    if (!isExistsGroup()) {
      toast.error('Mời bạn phân nhóm trước khi chốt nhóm');
      return;
    }
    Swal.fire({
      title: 'Xác nhận chốt nhóm?',
      text: "Bạn không thể thêm thành viên và phân nhóm sau khi đã chốt nhóm!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Chốt nhóm',
      cancelButtonText: 'Huỷ'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await courseApi.lockGroup(id);
          fetchMembers();
          toast.success('Chốt nhóm thành công');
          dispatch(requestCourse({ course_id: id }));
        } catch (e) {
          toast.success('Chốt nhóm thất bại');
          console.log(e);
        }
      }
    })
  }

  const [showMemberModal, setShowMemberModal] = useState(false);

  const addMember = async (values) => {

    try {
      const data = {
        students: [values.email]
      }
      const response = await courseApi.invite(id, data);

    } catch (e) {
      const messages = e.response.data.messages;
      messages.forEach(message => {
        console.log(message.message);
      });
    }
    fetchMembers();
    toast.success('Lời mời tham gia khóa học đã được gởi đến ' + values.email);
    setShowMemberModal(false);
  }

  // write a function to check if any member have group
  const isExistsGroup = () => {
    let count = 0;
    members.forEach(member => {
      if (member.pivot.status === 'accepted' && member.group !== null) {
        count++;
      }
    });
    return count > 0;
  }


  const handleRandomDivideGroup = async (values) => {
    let count = 0;
    members.forEach(member => {
      if (member.pivot.status === 'accepted') {
        count++;
      }
    });
    if (count === 0) {
      toast.error('Chưa thể phân nhóm do chưa có thành viên đồng ý tham gia khóa học');
      return;
    }
    try {
      const data = {
        "group_size": values.groupSize
      }
      const response = await courseApi.randomDivideGroup(id, data);
      fetchMembers();
      toast.success('Phân nhóm thành công');
      setShowRandomFormModel(false);
    } catch (e) {
      const messages = e.response.data.messages;
      messages.forEach(message => {
        console.log(message.message);
      });
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
                <h3 className="nk-block-title page-title">Thành viên - Luận văn tốt nghiệp</h3>
              </div>{/* .nk-block-head-content */}
              <div className="nk-block-head-content mb-0">
                <div className="nk-block-head-sub mb-2"></div>
                <div className="toggle-wrap nk-block-tools-toggle">
                  <a href="#" className="btn btn-icon btn-trigger toggle-expand mr-n1" data-target="pageMenu"><em className="icon ni ni-more-v" /></a>
                  <div className="toggle-expand-content" data-content="pageMenu">
                    <ul className="nk-block-tools g-3">
                      {isOwner && course.lock_group != true &&
                        <li>
                          <div className="drodown">
                            <a href="#" onClick={() => lockGroup()} className=" btn btn-info" >
                              <em class="icon ni ni-check-round-fill"></em>
                              <span>
                                Chốt nhóm
                              </span>
                            </a>
                          </div>
                        </li>
                      }
                      {isOwner && course.lock_group != true &&
                        <li>
                          <div className="drodown">
                            <a onClick={() => openDivideGroup()} className=" btn btn-white btn-dim btn-outline-light" >
                              <em class="icon ni ni-user-list-fill"></em>
                              <span>
                                Phân nhóm
                              </span>
                            </a>
                          </div>
                        </li>
                      }
                      {isOwner && course.lock_group != true &&
                        <li className="nk-block-tools-opt">
                          <a href="#" onClick={() => setShowMemberModal(true)} className="btn btn-primary">
                            <em className="icon ni ni-reports" />
                            <span>Thêm thành viên</span>
                          </a>
                        </li>
                      }
                    </ul>
                  </div>
                </div>
              </div>{/* .nk-block-head-content */}
            </div>{/* .nk-block-between */}
          </div>
          <div className="nk-block">
            <MemberList
              isLoading={isLoading}
              members={members}
              isOwner={isOwner}
              setIsShowAddModal={setShowMemberModal}
              handleRandomDivide={handleRandomDivideGroup}
            />
          </div>
          <AddMemberModal
            courseId={id}
            fetchMembers={fetchMembers}
            modalName="Thêm thành viên"
            onFinish={addMember}
            isShow={showMemberModal}
            setIsShow={setShowMemberModal}
            handleCloseModal={() => setShowMemberModal(false)}
          />

          <RandomDivideGroupModel
            modalName="Phân nhóm ngẫu nhiên"
            onFinish={handleRandomDivideGroup}
            isShow={showRandomFormModel}
            handleCloseModal={() => setShowRandomFormModel(false)}
          />
        </div>
      </div>
    </div>
  );
}

export default MemberPage
