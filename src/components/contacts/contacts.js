import React, { Component } from 'react';

export default class Contacts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    };

    changeName(event) {
        this.setState({name: event.target.value});
    };

    changeEmail(event) {
        this.setState({email: event.target.value});
    }

    changeMessage(event) {
        this.setState({message: event.target.value});
    }

    handleSubmit(event) {
        alert('Отправляется форма со следующими данными:\nName: ' + this.state.name + '\nEmail: ' + this.state.email + '\nMessage: ' + this.state.message);
        event.preventDefault();
    }

    clearInput() {
        this.setState({
            name: '',
            email: '',
            message: ''
        });
    }

    exitConstacts() {
        const window = document.getElementsByClassName('contacts')[0];
        window.style.display = 'none';
    }

    render () {
        return (
            <div className='contacts'>
                <div className="contacts__position">
                    <div onClick={this.exitConstacts.bind(this)} className="contacts__exit"></div>
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
                            <a href="#" className="contacts__block_email">mail@demolink.org</a>
                        </div>
                    </div>
                    <div className="contacts__block">
                        <div className="contacts__header">Miscellaneous</div>
                        <div className="contacts__text">
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia.
                        </div>
                    </div>
                    <div className="contacts__formdata">
                        <div className="contacts__header">Contact Form</div>
                        <form action="POST" onSubmit={this.handleSubmit.bind(this)} className="contacts__form">
                            <input type="text" value={this.state.name} onChange={this.changeName.bind(this)} className="contacts__form_name" placeholder="Name"/>
                            <input type="text" value={this.state.email} onChange={this.changeEmail.bind(this)} className="contacts__form_email" placeholder="Email"/>
                            <textarea value={this.state.message} onChange={this.changeMessage.bind(this)} className="contacts__form_message" placeholder="Message">
                            </textarea>
                            <div className="contacts__form_btn">
                                <a href="#" onClick={this.handleSubmit.bind(this)} className="contacts__link_clear">Clear</a>
                                <a href="#" onClick={this.clearInput.bind(this)} className="contacts__link_send">Send</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}