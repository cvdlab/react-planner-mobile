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

const STYLE_BUTTON_BIG = {
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

const STYLE_BUTTON_SMALL = {
    color: "white",
    width: "48px",
    height: "48px",
    borderRadius: "24px",
    textDecoration: "none",
    display: "inline-block",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "17px",
    backgroundColor: "#478dda",
    margin: "7px 6px 7px 6px"
};


const STYLE_TEXTAREA = {
    width: "100%",
    height: "auto",
    minHeight: "120px",
    maxHeight: "220px",
    color: "black",
    fontFamily: "helvetica",
    fontWeight: 500,
    fontSize: "20px",
    borderRadius: "5px",
    lineHeight: "22px",
    backgroundColor: "#fbfbfb",
    padding: "20px 20px 20px 20px",
    boxSizing: "border-box",
    border: "3px solid rgba(0,0,0,0)",
};


export default class CommentTextEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: this.props.text};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        this.textareain.focus();
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        this.props.saveCommentText(this.props.activeComment, this.state.value);
        event.preventDefault();
    }


    render() {
        let isSmall = this.props.containerHeight < 400;
        return (
            <div style={{... STYLE}}>
                <div style={{... STYLE_CENTER}}>

                    <div style={{width: "100%", maxWidth: "600px", height: "auto",textAlign: "center", display: "inline-flex"}}>
                            <textarea
                                ref={(input) => { this.textareain = input;}}
                                style={{...  STYLE_TEXTAREA, ... isSmall ? {height:"120px" }: {height:"220px"}  }}
                                value={this.state.value}
                                onChange={this.handleChange}/>
                    </div>
                    <div style={{display: "inline-flex"}}>
                        <div style={{width: "83px", textAlign: "center"}}>
                            <a
                                href="javascript:;"
                                style={{...  isSmall ? STYLE_BUTTON_SMALL : STYLE_BUTTON_BIG}}
                                title={"Salva"}
                                onClick={this.handleSubmit}
                            >
                                <IconCheck style={{... isSmall ? {marginTop: "16px"} : {marginTop: "22px"}}}/>
                            </a>
                            <a
                                href="javascript:;"
                                style={{...  isSmall ? STYLE_BUTTON_SMALL : STYLE_BUTTON_BIG}}
                                title={"Annulla"}
                                onClick={event => this.props.cancelModifyCommentTextFn()}
                            >
                                <IconClose style={{... isSmall ? {marginTop: "16px"} : {marginTop: "22px"}}}/>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

CommentTextEditor.propTypes = {
    text: PropTypes.string.isRequired,
    activeComment: PropTypes.number.isRequired,
    saveCommentText: PropTypes.func.isRequired,
    containerHeight: PropTypes.number.isRequired,
    cancelModifyCommentTextFn: PropTypes.func.isRequired
};