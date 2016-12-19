import React, {PropTypes} from 'react';
import CommentBox from './comment-box';

export default function Sidebar({width, height}) {

    return (
        <aside style={{backgroundColor: "#28292D", display: "block", overflow: "scroll", width: width, height: height}}
        >
            <CommentBox state={null} index={0}/>
        </aside>

    )

}