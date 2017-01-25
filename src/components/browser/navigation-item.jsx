import React, {PropTypes} from 'react';
import IconFile from 'react-icons/lib/fa/file-text-o';
import IconFolder from 'react-icons/lib/fa/folder-o';

const STYLE_LI = {
    overflow: "auto",
    borderBottom: "1px solid #ccc",
    margin: "10px",
    fontSize: "18px",
    whiteSpace: "nowrap",
    paddingTop:"2px"
};

const STYLE_LI_ICON = {
    margin: "-6px 15px 0 0",
    display: "inline-block",
    whiteSpace: "normal"
};

const STYLE_LI_TIME = {
    fontSize: "16px",
    margin: "0 0 15px 0",
    color: "#777",
    display: "inline-block",
    float: "right",
    whiteSpace: "normal"
};

export default function NavigationItem({text, date, openItem, fileId, projectId}) {
    let isProject = fileId == 'null';
    //console.log(projectId + " " + fileId);
    let icon = isProject ? <IconFolder style={{... STYLE_LI_ICON}}/> : <IconFile style={{... STYLE_LI_ICON}}/>;

    return (

        <li style={{... STYLE_LI}} onClick={event => isProject ? openItem(projectId) : openItem(projectId, fileId)}>
            {icon}
            <div style={{overflow: "hidden", textOverflow: "ellipsis", maxHeight: "22px", display: "inline-block"}}>
                {text}
            </div>
            <time style={{... STYLE_LI_TIME}}> {date} </time>
        </li>
    )

}

NavigationItem.propTypes = {
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    openItem: PropTypes.func.isRequired,
    fileId: PropTypes.string.isRequired,
    projectId: PropTypes.string.isRequired
};