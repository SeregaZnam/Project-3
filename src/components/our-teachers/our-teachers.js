import React, { Component } from 'react';

export default class OurTeachers extends Component {

    exitOurTeachers() {
        const window = document.getElementsByClassName('teachers')[0];
        window.style.display = 'none';
    }

    render () {
        return (
            <div className='teachers'>
                <div className="teachers__position">
                    <div onClick={this.exitOurTeachers.bind(this)} className="teachers__exit"></div>
                    <div className="teachers__header">
                        Our teachers
                    </div>
                    <div className="teachers__block">
                        <div className="teachers__header_img img-one"></div>
                        <div className="teachers__content">
                            <div className="teachers__content_heading">Helen Williams</div>
                            <div className="teachers__content_text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inciddunt ut labore et dolore magna aliqua nostrud exercitation.
                            </div>
                            <div className="teachers__content_info">
                                Read More
                            </div>
                        </div>
                    </div>
                    <div className="teachers__block">
                        <div className="teachers__header_img img-two"></div>
                        <div className="teachers__content">
                            <div className="teachers__content_heading">Jessy Hamper</div>
                            <div className="teachers__content_text">
                                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolorreprehenderit in voluptate velit esse cillum dolore.
                            </div>
                            <div className="teachers__content_info">
                                Read More
                            </div>
                        </div>
                    </div>
                    <div className="teachers__block">
                        <div className="teachers__header_img img-three"></div>
                        <div className="teachers__content">
                            <div className="teachers__content_heading">Chester Hamper</div>
                            <div className="teachers__content_text">
                                Cupidatat non proident sunt culpa officia deserunt mollit anim idst laborum. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
                            </div>
                            <div className="teachers__content_info">
                                Read More
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}