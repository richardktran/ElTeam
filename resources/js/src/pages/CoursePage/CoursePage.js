import React from 'react'
import { Link, useParams } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import TeamList from '../../components/TeamList/TeamList';

const CoursePage = () => {
  let { id } = useParams(); //get id from url

  return (
    <Layout>
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
                  <h3 className="nk-block-title page-title">CT240 - Luận văn tốt nghiệp</h3>
                </div>{/* .nk-block-head-content */}
                <div className="nk-block-head-content">
                  <div className="nk-block-head-sub mb-2"></div>
                  <div className="toggle-wrap nk-block-tools-toggle">
                    <a href="#" className="btn btn-icon btn-trigger toggle-expand mr-n1" data-target="pageMenu"><em className="icon ni ni-more-v" /></a>
                    <div className="toggle-expand-content" data-content="pageMenu">
                      <ul className="nk-block-tools g-3">
                        <li>
                          <div className="drodown">
                            <a href="#" className="dropdown-toggle btn btn-white btn-dim btn-outline-light" data-toggle="dropdown"><em className="d-none d-sm-inline icon ni ni-calender-date" /><span><span className="d-none d-md-inline">Last</span> 30 Days</span><em className="dd-indc icon ni ni-chevron-right" /></a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <ul className="link-list-opt no-bdr">
                                <li><a href="#"><span>Last 30 Days</span></a></li>
                                <li><a href="#"><span>Last 6 Months</span></a></li>
                                <li><a href="#"><span>Last 1 Years</span></a></li>
                              </ul>
                            </div>
                          </div>
                        </li>
                        <li className="nk-block-tools-opt">
                          <a href="#" className="btn btn-primary">
                            <em className="icon ni ni-reports" />
                            <span>Thêm thành viên</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>{/* .nk-block-head-content */}
              </div>{/* .nk-block-between */}
            </div>
            <div className="nk-block">
              <Link to={"members"} className="btn btn-primary">
                <em className="icon ni ni-reports" />
                <span>Danh sách thành viên</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default CoursePage
