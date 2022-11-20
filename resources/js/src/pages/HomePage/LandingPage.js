import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ClassCard from "../../components/Cards/ClassCard";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div id="wrapper" className="clearfix">
      <section id="slider" className="slider-element slider-parallax min-vh-100 min-vh-md-100 slider-parallax-visible">
        <div className="slider-inner" style={{ background: 'url("https://elteam.s3.ap-southeast-1.amazonaws.com/images/appshowcase/1.jpg") 0% 0% / cover', height: '100vh' }}>
          <div className="container-fluid">
            <img src="/images/elteam_logo.png" width={600} height={200} className="d-none d-lg-block" style={{ position: 'absolute', left: 0, top: 20 }} />
            {/* <img src="https://elteam.s3.ap-southeast-1.amazonaws.com/images/appshowcase/slider-iphone.png" alt="Image" className="d-none d-lg-block" style={{ position: 'absolute', left: 20, bottom: 0 }} /> */}
            <div className="vertical-middle">
              <div className="row">
                <div className="col-lg-5 offset-lg-7 col-xl-6 offset-xl-6 dark fadeIn animated" data-animate="fadeIn">
                  <div className="heading-block border-bottom-0">
                    <h1 className="nott">The new way to create awesome websites. Try using <strong>Canvas</strong> Template. </h1>
                  </div>
                  <a href="#" className="button button-light button-xlarge button-rounded m-0">
                    <i className="icon-apple" />Start Free Trial </a>
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
                <h4>Responsive Layout</h4>
                <p>Powerful Layout with Responsive functionality that can be adapted to any screen size. Resize browser to view.</p>
              </div>
              <div className="col-sm-6 col-lg-4 text-center">
                <a href="#">
                  <img src="https://elteam.s3.ap-southeast-1.amazonaws.com/images/appshowcase/s4.png" alt="Image" className="bottommargin-sm" />
                </a>
                <h4>Retina Ready Graphics</h4>
                <p>Looks beautiful &amp; ultra-sharp on Retina Screen Displays. Retina Icons, Fonts &amp; all others graphics are optimized.</p>
              </div>
              <div className="col-sm-6 col-lg-4 text-center">
                <a href="#">
                  <img src="https://elteam.s3.ap-southeast-1.amazonaws.com/images/appshowcase/s5.png" alt="Image" className="bottommargin-sm" />
                </a>
                <h4>Powerful Performance</h4>
                <p>Canvas includes tons of optimized code that are completely customizable and deliver unmatched fast performance.</p>
              </div>
            </div>
          </div>
          <div className="section mb-0" style={{ paddingBottom: '150px' }}>
            <div className="d-none d-lg-block" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'transparent url("https://elteam.s3.ap-southeast-1.amazonaws.com/images/appshowcase/ipad-section.png") bottom right no-repeat' }} />
            <div className="container clearfix" style={{ zIndex: 1 }}>
              <div className="row">
                <div className="col-lg-5">
                  <div className="heading-block topmargin-sm">
                    <h2>Awesome Scalable Apps</h2>
                    <span>Our Template acts &amp; behaves truly as a Canvas.</span>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem maiores pariatur voluptatem placeat laborum iste accusamus nam unde, iure id.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet cumque, perferendis accusamus porro illo exercitationem molestias, inventore obcaecati ut omnis voluptatibus ratione.</p>
                  <a href="#" className="button button-border button-rounded button-large button-dark ms-0">Start Trial</a>
                </div>
              </div>
            </div>
          </div>
          <div className="section my-0">
            <div className="container">
              <div className="row align-items-center col-mb-30 mt-0 mt-lg-5">
                <div className="col-md-6">
                  <img src="https://elteam.s3.ap-southeast-1.amazonaws.com/images/appshowcase/iphone-solid.png" alt="Image" className="center-block" />
                </div>
                <div className="col-md-6 text-center text-md-start">
                  <div className="heading-block border-bottom-0">
                    <h2>Typically Responsive</h2>
                    <span>Our App scales beautifully to different Devices.</span>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet cumque, perferendis accusamus porro illo exercitationem molestias, inventore obcaecati ut omnis voluptatibus ratione odio amet magnam quidem tempore necessitatibus quaerat, voluptates excepturi voluptatem, veritatis qui temporibus.</p>
                  <a href="#" className="button button-border button-rounded button-large button-dark ms-0">View Gallery</a>
                </div>
              </div>
            </div>
          </div>
          <div className="section dark mt-0 pb-0" style={{ paddingTop: '60px' }}>
            <div className="container clearfix">
              <div className="row col-mb-50">
                <div className="col-md-6 col-lg-4">
                  <div className="feature-box fbox-plain">
                    <div className="fbox-icon">
                      <a href="#">
                        <i className="icon-screen" />
                      </a>
                    </div>
                    <div className="fbox-content">
                      <h3>Responsive Layout</h3>
                      <p>Powerful Layout with Responsive functionality that can be adapted to any screen size. Resize browser to view.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="feature-box fbox-plain">
                    <div className="fbox-icon">
                      <a href="#">
                        <i className="icon-eye" />
                      </a>
                    </div>
                    <div className="fbox-content">
                      <h3>Retina Ready Graphics</h3>
                      <p>Looks beautiful &amp; ultra-sharp on Retina Screen Displays. Retina Icons, Fonts &amp; all others graphics are optimized.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="feature-box fbox-plain">
                    <div className="fbox-icon">
                      <a href="#">
                        <i className="icon-beaker" />
                      </a>
                    </div>
                    <div className="fbox-content">
                      <h3>Powerful Performance</h3>
                      <p>Canvas includes tons of optimized code that are completely customizable and deliver unmatched fast performance.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="feature-box fbox-plain">
                    <div className="fbox-icon">
                      <a href="#">
                        <i className="icon-ok" />
                      </a>
                    </div>
                    <div className="fbox-content">
                      <h3>12+ Header Designs</h3>
                      <p>We have included 12+ Header + Menu Designs for your convenience so that you can match your style.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="feature-box fbox-plain">
                    <div className="fbox-icon">
                      <a href="#">
                        <i className="icon-thumbs-up" />
                      </a>
                    </div>
                    <div className="fbox-content">
                      <h3>Awesome Mega menu</h3>
                      <p>Completely Customizable 2 Columns, 3 Columns, 4 Columns &amp; 5 Columns Mega Menus are available with Canvas.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="feature-box fbox-plain">
                    <div className="fbox-icon">
                      <a href="#">
                        <i className="icon-magnet" />
                      </a>
                    </div>
                    <div className="fbox-content">
                      <h3>Attractive Sticky Menu</h3>
                      <p>Smooth &amp; Stylish Sticky Menu is what will make your Website differentiate with others.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="line" />
            </div>
          </div>
          <div className="container clearfix">
            <div className="heading-block center">
              <h3>Available on all Major Platforms.</h3>
              <span>We have made our App available on all Major Platforms</span>
            </div>
            <p className="mx-auto center" style={{ maxWidth: '800px' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo animi ab dolorem deleniti, incidunt, recusandae tenetur eius aut similique delectus nisi labore odit temporibus reprehenderit eum iure natus voluptatem commodi? Quam ea, placeat quia et dignissimos laboriosam unde earum repudiandae?</p>
            <div className="w-100 center topmargin mb-0">
              <a href="#" className="social-icon si-appstore si-large si-rounded si-colored inline-block" title="iOS App Store">
                <i className="icon-appstore" />
                <i className="icon-appstore" />
              </a>
              <a href="#" className="social-icon si-android si-large si-rounded si-colored inline-block" title="Android Store">
                <i className="icon-android" />
                <i className="icon-android" />
              </a>
              <a href="#" className="social-icon si-gplus si-large si-rounded si-colored inline-block" title="Windows Store">
                <i className="icon-windows3" />
                <i className="icon-windows3" />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* #content end */}
    </div>
  );
}

export default LandingPage;
