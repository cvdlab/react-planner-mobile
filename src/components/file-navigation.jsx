import React, {PropTypes} from 'react';

import IconClose from 'react-icons/lib/fa/close';


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
    minWidth: "400px",
    height: "220px",
    color: "black",
    fontFamily: "helvetica",
    fontWeight: 300,
    borderRadius: "5px",
    lineHeight: "22px",
    backgroundColor: "#fbfbfb",
    padding: "20px 20px 20px 20px",
    maxWidth: "600px",
    listStyleType: "none",
    overflow: "scroll"

};




export default class FileNavigation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let lis;
        return (
            <div style={{... STYLE}}>
                <div style={{... STYLE_CENTER}}>


                    <ul style={{... STYLE_UL}}>
                        {lis}
                    </ul>

                    <div style={{display: "inline-flex"}}>
                        <div style={{width: "100px", textAlign: "center"}}>

                            <a
                                href="javascript:;"
                                style={{... STYLE_BUTTON}}
                                title={"Annulla"}
                                onClick={event => this.props.cancelOpenItem()}
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
    // openItem: PropTypes.number.isRequired,
    // loadSomething: PropTypes.func.isRequired
    cancelOpenItem: PropTypes.func.isRequired
};