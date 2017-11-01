import React, { Component } from 'react';

export default class About extends Component {

    exitAbout() {
        const window = document.getElementsByClassName('about')[0];
        window.style.display = 'none';
    }

    render () {
        return (
            <div className='about'>
                <div className="about__block">
                    <div className="about__block_title">Yoga Philosophy</div>
                    <div className="about__block_slogan">Body is your temple. Keep it pure and clean for the soul to reside in.</div>
                    <div className="about__block_text">Feel free to start your project using this <span className="about__block_underline">Hatha Yoga Template</span> that goes with two packages! Tell everyone about yoga lifestyle and yoga philosophy.</div>
                    <div className="about__block_footer">Do your practice and reach harmony!</div>
                </div>
                <div className="about__block">
                    <div className="about__block_title">About Us</div>
                    <div className="about__block_text"><span className="about__block_bold">Hatha Yoga</span> is one of <span className="about__block_underline">free website templates</span> created by TemplateMonster.com team. This website template is optimized for 1024X768 resolution. It is also XHTML & CSS valid. This website template has </div>
                    <div className="about__block_icons">
                        <div className="about__block_up"></div>
                        <div className="about__block_down"></div>
                    </div>
                </div>
                <div onClick={this.exitAbout.bind(this)} className='about__exit'></div>
            </div>
         );
    }
}