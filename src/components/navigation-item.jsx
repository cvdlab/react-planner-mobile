import React, {PropTypes} from 'react';
import IconFile from 'react-icons/lib/fa/file-text-o';
import IconFolder from 'react-icons/lib/fa/folder-o';

const STYLE_LI = {
    overflow: "auto",
    borderBottom: "1px solid #ccc",
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

export default function NavigationItem({text, date, isFolder, openItem}) {

    let Icon = isFolder ? <IconFolder style={{... STYLE_LI_ICON}}/> : <IconFile style={{... STYLE_LI_ICON}}/>;
    return (

        <li style={{... STYLE_LI}} onClick={openItem}>
            {Icon}
            <p style={{overflow: "hidden", textOverflow: "ellipsis", margin: 0}}>
                {text}
            </p>
            <time style={{... STYLE_LI_TIME}}> {date} </time>
        </li>
    )

}

CommentBox.propTypes = {
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    isFolder: PropTypes.bool.isRequired,
    openItem: PropTypes.func.isRequired
};