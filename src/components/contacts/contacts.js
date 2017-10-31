import React, { Component } from 'react';

export default class Contacts extends Component {
    render () {
        return (
            <div className='contacts'>
                <div className="contacts__position">
                    <div className="contacts__exit"></div>
                    <div className="contacts__block">
                        <div className="contacts__header">Our Address</div>
                        <div className="contacts__block_address">
                            8901 Marmora, <br></br>
                            Glasgow, D04 89GR
                        </div>
                        <div className="contacts__block_info">
                            Freephone:
                            Telephone:
                            FAX:
                            E-mail:
                        </div>
                        <div className="contacts__block_data">
                            +1 800 559 6580<br></br>
                            +1 959 603 6035<br></br>
                            +1 504 889 9898<br></br>
                            <a href="#">mail@demolink.org</a>
                        </div>
                    </div>
                    <div className="contacts__block">
                        <div className="contacts__header">Miscellaneous</div>
                        <div className="contacts__text">
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia.
                        </div>
                    </div>
                    <div className="contacts__form">
                        <div className="contacts__header">Contact Form</div>
                    </div>
                </div>
            </div>
        );
    }
}