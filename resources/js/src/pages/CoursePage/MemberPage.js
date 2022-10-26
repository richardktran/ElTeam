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
import { courseDetailItems, courseMembersItems } from './sidebars/courseDetail';
import isCourseOwner from '../../hooks/isCourseOwner';

const MemberPage = () => {
  let { id } = useParams(); //get id from url
  const isOwner = isCourseOwner(id);

  const dispatch = useDispatch();
  const sidebarItems = useSelector(state => state.sidebar);

  const [members, setMembers] = useState([]);
  const fetchMembers = async () => {
    let result = await courseApi.getMembers(id);
    if (result.status === HTTP_OK) {
      const { data } = result.data;
      setMembers(data);
    }
  }

  useEffect(() => {
    const items = isOwner ? courseDetailItems : courseMembersItems;
    const action = changePage(sidebarItems.length === 0 ? items : sidebarItems);
    dispatch(action);
  }, [isOwner]);

  useEffect(() => {
    const items = isOwner ? courseDetailItems : courseMembersItems;
    const action = changePage(sidebarItems.length === 0 ? items : sidebarItems);
    dispatch(action);
    fetchMembers();
  }, []);



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

  const handleRandomDivideGroup = async (groupSize) => {
    try {
      const data = {
        "group_size": groupSize
      }
      const response = await courseApi.randomDivideGroup(id, data);
      fetchMembers();
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
                      {isOwner &&
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
              members={members}
              isOwner={isOwner}
              handleRandomDivide={handleRandomDivideGroup}
            />
          </div>
          <AddMemberModal
            modalName="Thêm thành viên"
            onFinish={addMember}
            isShow={showMemberModal}
            handleCloseModal={() => setShowMemberModal(false)}
          />
        </div>
      </div>
    </div>
  );
}

export default MemberPage
