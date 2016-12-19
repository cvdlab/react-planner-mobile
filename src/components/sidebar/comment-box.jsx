import React, {PropTypes} from 'react';

const STYLE = {
    background: "#478dda",
    padding: 20,
    margin: 5,
    color: "white",
    fontFamily: "helvetica"
};


export default function CommentBox({state, index}) {

    return (
        <div style={{...STYLE}}>
            Commento Lorem ipsum

        </div>
    )

}

CommentBox.propTypes = {
    //state: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
};