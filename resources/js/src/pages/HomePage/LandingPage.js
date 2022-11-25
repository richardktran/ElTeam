import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ClassCard from "../../components/Cards/ClassCard";

function LandingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/courses');
    }
  }, [])

  return (
    <div id="wrapper" className="clearfix">
      <section id="slider" className="slider-element slider-parallax min-vh-100 min-vh-md-100 slider-parallax-visible">
        <div className="slider-inner" >
          <div style={{ background: 'url("https://elteam.s3.ap-southeast-1.amazonaws.com/images/appshowcase/1.jpg") 0% 0% / cover', height: '100vh', width: '100vw', zIndex: '-1000', position: "fixed", top: 0, left: 0, filter: "blur(5px)", }}></div>
          <div className="container-fluid">
            <img src="/images/elteam_logo.png" width={600} height={200} className="d-none d-lg-block" style={{ position: 'absolute', left: 0, top: 20 }} />
            <img src="/images/mockup_0.png" alt="Image" className="d-none d-lg-block fadeIn animated" data-animate="fadeIn" style={{ position: 'absolute', left: 0, bottom: 0, width: 800 }} />
            <div className="vertical-middle" >
              <div className="row">
                <div className="col-lg-5 offset-lg-7 col-xl-6 offset-xl-6 dark fadeIn animated" data-animate="fadeIn">
                  <div className="heading-block border-bottom-0">
                    <h1 className="nott" style={{ fontSize: '50px', color: "rgb(104 255 207)" }}>Học tập theo nhóm một cách hiệu quả với ELTEAM</h1>
                    <p className="nott mt-3" style={{ fontSize: '18px', color: "white" }}>Đăng ký ngay để tham gia lớp học của bạn và làm việc nhóm với mọi người một cách thật hiệu quả nhé 🚀</p>
                  </div>
                  <a href="/login" className="button button-primary button-xlarge button-rounded m-0">
                    <i className="icon-apple" />THAM GIA NGAY </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Content ============================================= */}
      <section id="content">
        <div className="content-wrap">
          <div className="container clearfix">
            <div className="row justify-content-center col-mb-50">
              <div className="col-sm-6 col-lg-4 text-center">
                <a href="#">
                  <img src="https://elteam.s3.ap-southeast-1.amazonaws.com/images/appshowcase/s1.png" alt="Image" className="bottommargin-sm" />
                </a>
                <h4>THEO DÕI CÔNG VIỆC</h4>
                <p>Quản lý công việc của các thành viên trong nhóm thông qua Kanban board.</p>
              </div>
              <div className="col-sm-6 col-lg-4 text-center">
                <a href="#">
                  <img src="https://elteam.s3.ap-southeast-1.amazonaws.com/images/appshowcase/s4.png" alt="Image" className="bottommargin-sm" />
                </a>
                <h4>THỜI GIAN THỰC</h4>
                <p>Bình luận, hỗ trợ để giúp đỡ nhau thông qua bình luận và thông báo bằng thời gian thực.</p>
              </div>
              <div className="col-sm-6 col-lg-4 text-center">
                <a href="#">
                  <img src="https://elteam.s3.ap-southeast-1.amazonaws.com/images/appshowcase/s5.png" alt="Image" className="bottommargin-sm" />
                </a>
                <h4>TÙY BIẾN NỘI DUNG ĐA DẠNG</h4>
                <p>Có thể tự tạo nội dung bài giảng cho riêng mình với đa dạng các loại dữ liệu (video, hình ảnh, file, văn bản,...)</p>
              </div>
            </div>
          </div>
          <div className="section mb-0" style={{ paddingBottom: '150px' }}>
            <div className="d-none d-lg-block" style={{
              position: 'absolute',
              top: 0,
              right: -150,
              width: '61%',
              height: '100%',
              background: 'transparent url("/images/mockup_1.png") top right',
              backgroundSize: 'cover'
            }} />
            <div className="container clearfix" style={{ zIndex: 1 }}>
              <div className="row">
                <div className="col-lg-5">
                  <div className="heading-block topmargin-sm">
                    <h2>QUẢN LÝ CÔNG VIỆC NHÓM</h2>
                    <span>Phương pháp quản lý công việc hiện đại và trực quan với Kanban board.</span>
                  </div>
                  <p>Với Kanban board, bạn có thể quản lý được các tiến độ công việc của nhóm mình cũng như là đo được chất lượng làm việc của người chịu trách nhiệm cho công việc đó.</p>
                  <p>Theo dõi được mức độ hiệu quả trong công việc của các thành viên trong nhóm, phối hợp giữa các thành viên trong nhóm một cách mượt mà hơn.</p>
                  <a href="/login" className="button button-border button-rounded button-large button-dark ms-0">Thử ngay</a>
                </div>
              </div>
            </div>
          </div>
          <div className="section my-0">
            <div className="d-none d-lg-block" style={{
              position: 'absolute',
              top: 0,
              left: -150,
              width: '60%',
              height: '100%',
              background: 'transparent url("/images/mockup_2.png") top left',
              backgroundSize: 'cover'
            }} />
            <div className="container">
              <div className="row align-items-center col-mb-30 mt-0 mt-lg-5">
                <div className="col-md-6">
                  {/* <img src="/images/mockup_2.png" alt="Image" className="center-block" /> */}
                </div>
                <div className="col-md-6 text-center text-md-start">
                  <div className="heading-block border-bottom-0">
                    <h2>Quản lý lớp học</h2>
                    <span>Hệ thống giúp giáo viên có thể quản lý lớp học dễ dàng.</span>
                  </div>
                  <p>Với hệ thống quản lý tài nguyên học tập, thầy cô có thể tạo những bài giảng cũng như là soạn nội dung bài học trực tiếp trên hệ thống với đa dạng các thể loại tập tin như văn bản, hình ảnh, âm thanh,... </p>
                  <a href="/login" className="button button-border button-rounded button-large button-dark ms-0">THỬ NGAY</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* #content end */}

      <footer id="footer" className="dark" data-scrollto-settings="{&quot;offset&quot;:140,&quot;speed&quot;:1250,&quot;easing&quot;:&quot;easeOutQuad&quot;}"> {/* Copyrights ============================================= */} <div id="copyrights">
        <div className="container-fluid">
          <div className="row col-mb-30">
            <div className="col-md-1"></div>
            <div className="col-md-7 text-md-start">
              Bản quyền thuộc về <span><a href="/">ELTEAM</a> - Hệ thống quản lý lớp học trực tuyến</span>. <br />
              Tác giả: Trần Đăng Khoa <br />
              <div className="copyright-links">
                Luận văn tốt nghiệp của sinh viên trường Đại học Công Nghệ Thông Tin - Đại học Cần Thơ
              </div>
            </div>
            <div className="col-md-4 text-md-start">
              <div className="clear" />
              <div>
                <em class="icon ni ni-emails-fill mr-2"></em> richardktran.dev@gmail.com
              </div>
              <div>
                <em class="icon ni ni-call-alt-fill mr-2"></em> (+84) 947 685 343
              </div>
              <div>
                <em class="icon ni ni-cards-fill mr-2"></em>
                B1805879
              </div>
            </div>
          </div>
        </div>
      </div>{/* #copyrights end */} </footer>
    </div>
  );
}

export default LandingPage;
