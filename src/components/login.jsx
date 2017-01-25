import React, {PropTypes} from 'react';

import IconCheck from 'react-icons/lib/fa/check';
import IconClose from 'react-icons/lib/fa/close';


const STYLE = {
    backgroundColor: "#424242",
    height: "100%",
    width: "100%",
    fontFamily: "helvetica",
    overflow: "hidden",
    position:"fixed",
    top:0,
    left:0,
    zIndex:5
};

const STYLE_CENTER = {
    maxWidth: "700px",
    height: "100%",
    margin: "0 auto",
    position: "relative",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding:"10px"
};

const STYLE_FORM = {
    position: "relative",
    zIndex: 1,
    background: "#FFFFFF",
    maxWidth: "360px",
    margin: "0 auto",
    padding: "45px",
    textAlign: "center",
    borderRadius:"5px"
};

const STYLE_INPUT = {
    outline: 0,
    width: "100%",
    border: 0,
    margin: "0 0 15px",
    padding: "15px",
    boxSizing: "border-box",
    fontSize: "14px",
    borderBottom: "1px solid #aaa "
};

const STYLE_BUTTON = {
    marginTop:"30px",
    textTransform: "uppercase",
    outline: "0",
    background: "#478dda",
    width: "100%",
    border: "0",
    padding: "15px",
    color: "#FFFFFF",
    fontSize: "14px",
    transition: "all 0.3 ease",
    cursor: "pointer",
    borderRadius:"3px"

};


export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {user: this.props.text};
        this.state = {pass: this.props.text};
        this.handleChangeUser = this.handleChangeUser.bind(this);
        this.handleChangePass = this.handleChangePass.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeUser(event) {
        this.setState({user: event.target.value});
    }
    handleChangePass(event) {
        this.setState({pass: event.target.value});
    }

    handleSubmit(event) {
        this.props.storeUserInfoFn(this.state.user, this.state.pass);
        event.preventDefault();
    }

    render() {
        return (
            <div style={{... STYLE}}>
                <div style={{... STYLE_CENTER}}>


                    <form style={{... STYLE_FORM}} onSubmit={this.handleSubmit}>
                        <input style={{... STYLE_INPUT}} type="text" placeholder="Username" value={this.state.user} onChange={this.handleChangeUser} required/>
                        <input style={{... STYLE_INPUT}} type="password" placeholder="Password" value={this.state.pass} onChange={this.handleChangePass} required/>
                        <button style={{... STYLE_BUTTON}}>login</button>

                    </form>

                </div>
            </div>
        );
    }
}

LoginForm.propTypes = {
    storeUserInfoFn: PropTypes.func.isRequired
};