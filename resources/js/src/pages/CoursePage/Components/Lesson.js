import React from 'react'

function Lesson(props) {
  const { courseId } = props;
  return (
    <div className='nk-block'>
      <div className="support-topic-details card card-bordered">
        <div className="card-inner">
          <div className="card-title-group mb-4">
            <div className="card-title">
              <h4 style={{ color: "#6576ff" }}>ĐỌC KỸ HƯỚNG DẪN TRƯỚC KHI BẮT ĐẦU</h4>
            </div>
            <div className="card-tools mr-n1">
              <div className="dropdown">
                <a className="text-soft dropdown-toggle btn btn-icon btn-trigger" data-toggle="dropdown"><em className="icon ni ni-more-h" /></a>
                <div className="dropdown-menu dropdown-menu-right dropdown-menu-xs">
                  <ul className="link-list-plain">
                    <li><a href="#">View</a></li>
                    <li><a href="#">Edit</a></li>
                    <li><a href="#">Remove</a></li>
                  </ul>
                </div>
              </div>
            </div>{/* card-tools */}
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
    </div>
  )
}

export default Lesson