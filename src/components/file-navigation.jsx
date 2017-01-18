import React, {PropTypes} from 'react';

import IconCheck from 'react-icons/lib/fa/check';
import IconClose from 'react-icons/lib/fa/close';
import IconFile from 'react-icons/lib/fa/file-text-o';
import IconFolder from 'react-icons/lib/fa/folder-o';


const STYLE = {
    backgroundColor: "#424242",
    height: "100%",
    width: "100%",
    fontFamily: "helvetica",
    overflow: "hidden",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 5
};

const STYLE_CENTER = {
    maxWidth: "700px",
    height: "100%",
    margin: "0 auto",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
};

const STYLE_BUTTON = {
    color: "white",
    width: "70px",
    height: "70px",
    borderRadius: "35px",
    textDecoration: "none",
    display: "inline-block",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "25px",
    backgroundColor: "#478dda",
    margin: "14px 12px 14px 12px"
};


const STYLE_UL = {
    width: "100%",
    height: "220px",
    color: "black",
    fontFamily: "helvetica",
    fontWeight: 300,
    borderRadius: "5px",
    lineHeight: "22px",
    backgroundColor: "#fbfbfb",
    padding: "20px 20px 20px 20px",
    maxWidth: "600px",
    overflow: "scroll",
    listStyleType: "none"
};

const STYLE_LI_FILE = {
    padding: "6px",
    borderBottom: "1px solid #ccc",
    margin: "10px",
    fontSize: "18px",
};

const STYLE_LI_FOLDER = {
    padding: "6px",
    borderBottom: "1px solid #999",
    fontWeight: 400,
    margin: "10px",
    fontSize: "18px",
};

const STYLE_LI_ICON = {
    float: "left",
    margin: "0 15px 0 0"
};

const STYLE_LI_TIME = {
    fontSize: "16px",
    float: "right",
    margin: "0 0 15px 0",
    color: "#777"
};


export default class FileNavigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: this.props.text};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        this.props.saveCommentText(this.props.activeComment, this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div style={{... STYLE}}>
                <div style={{... STYLE_CENTER}}>


                    <ul style={{... STYLE_UL}}>
                        <li style={{... STYLE_LI_FILE}}>
                            <IconFile style={{... STYLE_LI_ICON}}/>
                            Test test test
                            <time style={{... STYLE_LI_TIME}}> 20/01/2017 24:00</time>
                        </li>
                        <li style={{... STYLE_LI_FILE}}>
                            <IconFile style={{... STYLE_LI_ICON}}/>
                            Test test test
                            <time style={{... STYLE_LI_TIME}}> 20/01/2017 24:00</time>
                        </li>
                        <li style={{... STYLE_LI_FILE}}>
                            <IconFile style={{... STYLE_LI_ICON}}/>
                            Test test test
                            <time style={{... STYLE_LI_TIME}}> 20/01/2017 24:00</time>
                        </li>
                        <li style={{... STYLE_LI_FILE}}>
                            <IconFile style={{... STYLE_LI_ICON}}/>
                            Test test test
                            <time style={{... STYLE_LI_TIME}}> 20/01/2017 24:00</time>
                        </li>
                        <li style={{... STYLE_LI_FOLDER}}>
                            <IconFolder style={{... STYLE_LI_ICON}}/>
                            Test test test
                            <time style={{... STYLE_LI_TIME}}> 20/01/2017 24:00</time>
                        </li>


                    </ul>

                    <div style={{display: "inline-flex"}}>
                        <div style={{width: "100px", textAlign: "center"}}>
                            <a
                                href="javascript:;"
                                style={{... STYLE_BUTTON}}
                                title={"Salva"}
                                onClick={this.handleSubmit}
                            >
                                <IconCheck style={{marginTop: "22px"}}/>
                            </a>
                            <a
                                href="javascript:;"
                                style={{... STYLE_BUTTON}}
                                title={"Annulla"}
                                onClick={event => this.props.cancelModifyCommentTextFn()}
                            >
                                <IconClose style={{marginTop: "22px"}}/>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

FileNavigation.propTypes = {
    // text: PropTypes.string.isRequired,
    // activeComment: PropTypes.number.isRequired,
    // saveCommentText: PropTypes.func.isRequired,
    // cancelModifyCommentTextFn: PropTypes.func.isRequired
};