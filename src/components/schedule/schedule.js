import React, { Component } from 'react';

export default class Schedule extends Component {
    render () {
        return (
            <div className='schedule'>
                <div className="schedule__position">
                    <div className="schedule__exit"></div>
                    <div className="schedule__header">
                        Schedule
                    </div>
                    <div className="schedule__table">
                        <table className="schedule__table_block">
                            <tr className="schedule__table_row">
                                <th className="schedule__table_col"></th>
                                <th className="schedule__table_col">Mon</th>
                                <th className="schedule__table_col">Tue</th>
                                <th className="schedule__table_col">Wed</th>
                                <th className="schedule__table_col">Thur</th>
                                <th className="schedule__table_col">Fri</th>
                                <th className="schedule__table_col">Sat</th>
                            </tr>
                            <tr className="schedule__table_row">
                                <td className="schedule__table_col">9:00</td>
                                <td className="schedule__table_col">Helen Williams</td>
                                <td className="schedule__table_col">Chester Hamper</td>
                                <td className="schedule__table_col">Helen Williams</td>
                                <td className="schedule__table_col">Chester Hamper</td>
                                <td className="schedule__table_col">Helen Williams</td>
                                <td className="schedule__table_col">Chester Hamper</td>
                            </tr>
                            <tr className="schedule__table_row">
                                <td className="schedule__table_col">10:00</td>
                                <td className="schedule__table_col">Jessy Hamper</td>
                                <td className="schedule__table_col">Helen Williams</td>
                                <td className="schedule__table_col">Jessy Hamper</td>
                                <td className="schedule__table_col">Helen Williams</td>
                                <td className="schedule__table_col">Jessy Hamper</td>
                                <td className="schedule__table_col">Helen Williams</td>
                            </tr>
                            <tr className="schedule__table_row">
                                <td className="schedule__table_col">12:00</td>
                                <td className="schedule__table_col">Chester Hamper</td>
                                <td className="schedule__table_col">Jessy Hamper</td>
                                <td className="schedule__table_col">Chester Hamper</td>
                                <td className="schedule__table_col">Jessy Hamper</td>
                                <td className="schedule__table_col">Chester Hamper</td>
                                <td className="schedule__table_col">Jessy Hamper</td>
                            </tr>
                            <tr className="schedule__table_row">
                                <td className="schedule__table_col">14:00</td>
                                <td className="schedule__table_col">Helen Williams</td>
                                <td className="schedule__table_col">Chester Hamper</td>
                                <td className="schedule__table_col">Helen Williams</td>
                                <td className="schedule__table_col">Chester Hamper</td>
                                <td className="schedule__table_col">Helen Williams</td>
                                <td className="schedule__table_col">Chester Hamper</td>
                            </tr>
                            <tr className="schedule__table_row">
                                <td className="schedule__table_col">16:00</td>
                                <td className="schedule__table_col">Jessy Hamper</td>
                                <td className="schedule__table_col">Helen Williams</td>
                                <td className="schedule__table_col">Jessy Hamper</td>
                                <td className="schedule__table_col">Helen Williams</td>
                                <td className="schedule__table_col">Jessy Hamper</td>
                                <td className="schedule__table_col">Helen Williams</td>
                            </tr>
                            <tr className="schedule__table_row">
                                <td className="schedule__table_col">17:00</td>
                                <td className="schedule__table_col">Chester Hamper</td>
                                <td className="schedule__table_col">Jessy Hamper</td>
                                <td className="schedule__table_col">Chester Hamper</td>
                                <td className="schedule__table_col">Jessy Hamper</td>
                                <td className="schedule__table_col">Chester Hamper</td>
                                <td className="schedule__table_col">Jessy Hamper</td>
                            </tr>
                            <tr className="schedule__table_row">
                                <td className="schedule__table_col">18:30</td>
                                <td className="schedule__table_col">Helen Williams</td>
                                <td className="schedule__table_col">Chester Hamper</td>
                                <td className="schedule__table_col">Helen Williams</td>
                                <td className="schedule__table_col">Chester Hamper</td>
                                <td className="schedule__table_col">Helen Williams</td>
                                <td className="schedule__table_col">Chester Hamper</td>
                            </tr>
                            <tr className="schedule__table_row">
                                <td className="schedule__table_col">20:00</td>
                                <td className="schedule__table_col">Jessy Hamper</td>
                                <td className="schedule__table_col">Helen Williams</td>
                                <td className="schedule__table_col">Jessy Hamper</td>
                                <td className="schedule__table_col">Helen Williams</td>
                                <td className="schedule__table_col">Jessy Hamper</td>
                                <td className="schedule__table_col">Helen Williams</td>
                            </tr>
                        </table>
                    </div>
                    <div className="schedule__info">
                        <span className="schedule__info_bold">Online Sign-Ins:<br></br></span>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                </div>
            </div>
        );
    }
}