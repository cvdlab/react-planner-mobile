import React, {PropTypes} from 'react';

const STYLE = {
    background: "#478dda",
    padding: 20,
    margin: "10px",
    color: "white",
    fontFamily: "helvetica",
    borderRadius: "2px"
};

const STYLE_ACTIVE = {
    background: "#FEFEFE",
    padding: 20,
    margin: "10px",
    color: "#050505",
    fontFamily: "helvetica",
    borderRadius: "2px"
};


export default function CommentBox({state, index, active}) {

    return (
        <div style={{... active ? STYLE_ACTIVE : STYLE}}>
            Commento Lorem ipsum

        </div>
    )

}

CommentBox.propTypes = {
    //state: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
};