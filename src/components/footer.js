import React, { Component } from 'react';

export default class Footer extends Component {
    render () {
        return (
            <div className='footer'>
                <div className="content">
                    <div className="footer__block-left">
                        <div className="footer__block_center">
                            Background:
                            <div className="footer__number">1</div>
                            <div className="footer__number">2</div>
                            <div className="footer__number">3</div>
                        </div>
                            <div className="footer__block-left_icons">
                            <div className="footer_icon"><a href="#"></a></div>
                            <div className="footer_icon"><a href="#"></a></div>
                            <div className="footer_icon"><a href="#"></a></div>
                            <div className="footer_icon"><a href="#"></a></div>
                        </div>
                    </div>
                    <div className="footer__block-right"></div>
                </div>
            </div>
        );
    }
}