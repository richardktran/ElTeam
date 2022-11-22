import React from 'react'

const AuthSlider = () => {
    return (
        <div className="nk-split-content nk-split-stretch bg-lighter d-flex toggle-break-lg toggle-slide toggle-slide-right toggle-screen-lg" data-content="athPromo" data-toggle-screen="lg" data-toggle-overlay="true">
            <div className="slider-wrap w-100 w-max-550px p-3 p-sm-5 m-auto">
                <div className="slider-init slick-initialized slick-slider slick-dotted" data-slick="{&quot;dots&quot;:true, &quot;arrows&quot;:false}">
                    <div className="slick-list draggable">
                        <div className="slick-track" style={{ opacity: 1, width: '3241px', transform: 'translate3d(-1389px, 0px, 0px)' }}>

                            <div className="slider-item slick-slide slick-current slick-active" data-slick-index={2} aria-hidden="false" style={{ width: '463px' }} tabIndex={0} role="tabpanel" id="slick-slide02" aria-describedby="slick-slide-control02">
                                <div className="nk-feature nk-feature-center">
                                    <div className="nk-feature-img">
                                        <img className="round" src="./images/slides/promo-c.png" srcSet="./images/slides/promo-c2x.png 2x" alt="" />
                                    </div>
                                    <div className="nk-feature-content py-4 p-sm-5">
                                        <h4>Dashlite 1</h4>
                                        <p>You can start to create your products easily with its user-friendly design &amp; most completed responsive layout.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="slider-item slick-slide slick-cloned" data-slick-index={3} id aria-hidden="true" style={{ width: '463px' }} tabIndex={-1}>
                                <div className="nk-feature nk-feature-center">
                                    <div className="nk-feature-img">
                                        <img className="round" src="./images/slides/promo-a.png" srcSet="./images/slides/promo-a2x.png 2x" alt="" />
                                    </div>
                                    <div className="nk-feature-content py-4 p-sm-5">
                                        <h4>Dashlite 1</h4>
                                        <p>You can start to create your products easily with its user-friendly design &amp; most completed responsive layout.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="slider-item slick-slide slick-cloned" data-slick-index={4} id aria-hidden="true" style={{ width: '463px' }} tabIndex={-1}>
                                <div className="nk-feature nk-feature-center">
                                    <div className="nk-feature-img">
                                        <img className="round" src="./images/slides/promo-b.png" srcSet="./images/slides/promo-b2x.png 2x" alt="" />
                                    </div>
                                    <div className="nk-feature-content py-4 p-sm-5">
                                        <h4>Dashlite 1</h4>
                                        <p>You can start to create your products easily with its user-friendly design &amp; most completed responsive layout.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="slider-item slick-slide slick-cloned" data-slick-index={5} id aria-hidden="true" style={{ width: '463px' }} tabIndex={-1}>
                                <div className="nk-feature nk-feature-center">
                                    <div className="nk-feature-img">
                                        <img className="round" src="./images/slides/promo-c.png" srcSet="./images/slides/promo-c2x.png 2x" alt="" />
                                    </div>
                                    <div className="nk-feature-content py-4 p-sm-5">
                                        <h4>QUẢN LÝ CÔNG VIỆC NHÓM </h4>
                                        <p>Theo dõi được mức độ hiệu quả trong công việc của các thành viên trong nhóm, phối hợp giữa các thành viên trong nhóm một cách mượt mà hơn.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>{/* .slider-item */} {/* .slider-item */} {/* .slider-item */} <ul className="slick-dots" style={{}} role="tablist">
                        <li className role="presentation">
                            <button type="button" role="tab" id="slick-slide-control00" aria-controls="slick-slide00" aria-label="1 of 3" tabIndex={-1}>1</button>
                        </li>
                        <li role="presentation" className>
                            <button type="button" role="tab" id="slick-slide-control01" aria-controls="slick-slide01" aria-label="2 of 3" tabIndex={-1}>2</button>
                        </li>
                        <li role="presentation" className="slick-active">
                            <button type="button" role="tab" id="slick-slide-control02" aria-controls="slick-slide02" aria-label="3 of 3" tabIndex={0} aria-selected="true">3</button>
                        </li>
                    </ul>
                </div>{/* .slider-init */}
                <div className="slider-dots" />
                <div className="slider-arrows" />
            </div>{/* .slider-wrap */}
        </div>
    );
}

export default AuthSlider
