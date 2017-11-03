import React, { Component } from 'react';

export default class Footer extends Component {
    render () {
        return (
            <div className='footer'>
                <div className="content">
                    <div className="footer__block-left">
                        <div className="footer__block_center">
                            Background:
                            <div className="footer__number"></div>
                            <div className="footer__number"></div>
                            <div className="footer__number"></div>
                        </div>
                        <div className="footer__block-left_icons">
                            <div className="footer_icon"><a href="#"></a></div>
                            <div className="footer_icon"><a href="#"></a></div>
                            <div className="footer_icon"><a href="#"></a></div>
                            <div className="footer_icon"><a href="#"></a></div>
                        </div>
                    </div>
                    <div className="footer__block-right">
                        <div className="footer__block_vertical">
                            <div className="footer__block_vercenter">
                                <span className="footer__block_blue">Hatha Yoga</span> Copyright 2011<br></br>
                                Website Template by <span className="footer__block_blue">TemplateMonster.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}