import React, {PropTypes} from 'react';

import IconZoomPlus from 'react-icons/lib/ti/zoom-in';
import IconZoomMinus from 'react-icons/lib/ti/zoom-out';
import IconComment from 'react-icons/lib/fa/comment';

import {MODE_ZOOMING_IN, MODE_ZOOMING_OUT, MODE_ADDING_COMMENT, MODE_PANNING} from '../../constants/modes';

import ToolboxButton from './toolbox-button';


const STYLE = {
    
    position: 'absolute',
    bottom: '10px',
    right: '0px',
    padding: "10px 10px 0px 10px"

};

export default function Toolbox({enterCommentMode, cancelCommentMode, mode}, {}) {

    return (
        <div style={{...STYLE}}>



            <ToolboxButton active={[MODE_ZOOMING_IN].includes(mode)} tooltip={"Zoom in"}>
                <IconZoomPlus />
            </ToolboxButton>

            <ToolboxButton active={[MODE_ZOOMING_OUT].includes(mode)} tooltip={"Zoom Out"}>
                <IconZoomMinus />
            </ToolboxButton>

            <ToolboxButton active={[MODE_ADDING_COMMENT].includes(mode)} tooltip={"Aggiungi Commento"}
                           onClick={event => [MODE_PANNING].includes(mode) ? enterCommentMode() : cancelCommentMode()}>
                <IconComment />
            </ToolboxButton>



        </div>
    )
}

Toolbox.propTypes = {
    enterCommentMode: PropTypes.func.isRequired,
    cancelCommentMode: PropTypes.func.isRequired,
    mode:PropTypes.string.isRequired
};