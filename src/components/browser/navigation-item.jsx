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

export default function NavigationItem({text, date, openItem, fileId, projectId}) {
    let isProject = fileId == 'null';
    //console.log(projectId + " " + fileId);
    let icon = isProject ? <IconFolder style={{... STYLE_LI_ICON}}/> : <IconFile style={{... STYLE_LI_ICON}}/>;
    return (

        <li style={{... STYLE_LI}} onClick={event => isProject ? openItem(projectId) : openItem(projectId, fileId)}>
            {icon}
            <p style={{overflow: "hidden", textOverflow: "ellipsis", margin: 0}}>
                {text}
            </p>
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