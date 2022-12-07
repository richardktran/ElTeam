import React from 'react'

function FooterCourse() {
  return (
    <footer className="mt-3" style={{
      position: 'absolute',
      bottom: 0,
      width: '100%',
    }}>
      {/* Copyrights ============================================= */}
      <div id="copyrights" style={{ padding: '20px 0' }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 text-md-center">
              <p className="mb-0">
                Trần Đăng Khoa - B1805879
              </p>
              <p className="mb-0">
                Luận văn tốt nghiệp - Đại học Cần Thơ
              </p>
              <p className="mb-0">
                © 2022 Copyright: <span><a href="https://elteam.vn">Elteam</a></span>
              </p>
            </div>
          </div>
        </div>
      </div>{/* #copyrights end */}
    </footer>
  )
}

export default FooterCourse