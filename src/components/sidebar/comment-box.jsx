import React, {PropTypes} from 'react';

import IconAlignLeft from 'react-icons/lib/fa/align-left';
import IconTrash from 'react-icons/lib/fa/trash';
import IconPaintBrush from 'react-icons/lib/fa/paint-brush';

const STYLE = {
    position: "relative",
    background: "#478dda",
    height: "50px",
    overflowY: "hidden",
    padding: 20,
    margin: "10px",
    color: "white",
    fontFamily: "helvetica",
    borderRadius: "2px"
};

const STYLE_ACTIVE = {
    position: "relative",
    background: "#FEFEFE",
    maxHeight: "200px",
    minHeight: "50px",
    padding: "20px 0px 42px 0px",
    margin: "10px",
    color: "#050505",
    fontFamily: "helvetica",
    borderRadius: "2px"
};

const STYLE_BUTTON = {
    color: "#28292D",
    textDecoration: "none",
    fontSize: "24px",
    padding: "8px 14px 8px 14px",
    display: "inline-block",
    verticalAlign: "middle"
};

export default function CommentBox({text, active, openComment, deleteComment, modifyComment}) {
    let truncatedText = text.substring(0, 85);
    if (active)
        return (
            <div style={{... STYLE_ACTIVE}}>
                <div style={{maxHeight: "150px", overflow: "scroll", margin: "0px 20px 0px 20px"}}>
                    {text}
                </div>
                <div style={{width: "100%", textAlign: "center", position: "absolute", bottom: "0px"}}>

                    <a href="javascript:;" style={{... STYLE_BUTTON}} title={"Modifica"} onClick={modifyComment}>
                        <IconAlignLeft />
                    </a>
                    {/*<a href="javascript:;" style={{... STYLE_BUTTON}} title={"Disegna"}>*/}
                    {/*<IconPaintBrush />*/}
                    {/*</a>*/}
                    <a href="javascript:;" style={{... STYLE_BUTTON}} title={"Elimina"} onClick={deleteComment}>
                        <IconTrash />
                    </a>
                </div>

            </div>
        )
    else
        return (
            <div style={{...  STYLE}} onClick={key => openComment(key)}>
                {truncatedText}...
            </div>
        )
}

CommentBox.propTypes = {
    text: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
    openComment: PropTypes.func.isRequired,
    // deleteComment: PropTypes.func.isRequired,
    // modifyComment: PropTypes.func.isRequired
};