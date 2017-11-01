import React, { Component } from 'react';

export default class Prices extends Component {

    exitPrices() {
        const window = document.getElementsByClassName('prices')[0];
        window.style.display = 'none';
    }

    render () {
        return (
            <div className='prices'>
                <div className="prices__position">
                    <div onClick={this.exitPrices.bind(this)} className="prices__exit"></div>
                    <div className="prices__header">
                        Schedule
                    </div>
                    <div className="price__block">
                        <span className="price__block_bold">Introductory Offer:</span><br></br>
                        One Month Unlimited <span className="price__block_blue">$39</span><br></br>
                        New clients only. One time purchase. Must purchase with-in first week of coming to studio.<br></br>
                    </div>
                    <div className="price__block">
                        <span className="price__block_bold">Auto-Pay Membership: Unlimited Yoga</span><br></br>
                        <span className="price__block_blue">$89</span> per month - with a minimum 6 month commitment <br></br>
                        <span className="price__block_blue">$79</span> per month - student/senior pricing - with a 6 month minimum commitment <br></br>
                    </div>
                    <div className="price__block">
                        <span className="price__block_bold">Regular Pricing:</span><br></br>
                        Drop In - $17 ** New Rate** <br></br>
                        One Month Unlimited - <span className="price__block_blue">$135</span><br></br>
                        One Year Unlimited - <span className="price__block_blue">$1000</span><br></br>
                        5 Class Package - <span className="price__block_blue">$70</span><br></br>
                    </div>
                    <div className="price__block">
                        <span className="price__block_bold">Student/Senior Pricing:</span><br></br>
                        Drop In - <span className="price__block_blue">$13</span> **New Rate** <br></br>
                        One Month Unlimited - <span className="price__block_blue">$110</span><br></br>
                        One Year Unlimited - <span className="price__block_blue">$750</span><br></br>
                    </div>
                    <div className="price__block">
                        Please note - student pricing is for full time students. Must present valid ID. 
                    </div>
                </div>
            </div>
        );
    }
}