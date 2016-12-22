import React, {PropTypes} from 'react';
import Dimensions from 'react-dimensions';
import {ReactSVGPanZoom, TOOL_ZOOM_IN, TOOL_ZOOM_OUT, TOOL_PAN, TOOL_NONE, TOOL_AUTO} from 'react-svg-pan-zoom';

import Comments from './comments';
import Toolbox from './toolbox/toolbox';
import Sidebar from './sidebar/sidebar'

import {Models, State2DViewer, Catalog} from 'react-planner';
import project from '../project/q_mura';
import MyCatalog from '../catalog/mycatalog';

import {MODE_ADDING_COMMENT, MODE_PANNING} from '../constants/modes'
import {ZOOM_IN_DELTA, ZOOM_OUT_DELTA, ZOOM_START_LEVEL} from '../constants/zoom'


class View extends React.Component {

    constructor(props) {
        super(props);
        this.viewer = null;
        this.zoomLevel = ZOOM_START_LEVEL;
    }

    componentDidMount() {
        this.viewer.fitToViewer();

    }

    componentDidUpdate() {
        let deltaZoom = this.props.state.zoomLevel - this.zoomLevel;

        if (deltaZoom > 0)
            this.viewer.zoomOnViewerCenter(ZOOM_IN_DELTA);
        else if (deltaZoom < 0)
            this.viewer.zoomOnViewerCenter(ZOOM_OUT_DELTA);

        this.zoomLevel = this.props.state.zoomLevel;

    }

    onMouseDown(x, y) {
        switch (this.props.state.mode) {
            case MODE_ADDING_COMMENT:
                this.props.addComment(Math.round(x), Math.round(y));
                break;
        }
    }

    onMouseUp(x, y) {

    }

    onMouseMove(x, y) {

    }


    render() {

        let plannerState = new Models.State({scene: project});

        let tool = TOOL_PAN;
        switch (this.props.state.mode) {
            case MODE_ADDING_COMMENT:
                tool = TOOL_NONE;
                break;
        }


        //let sidebarWidth = this.props.state.isSidebarOpen ? 300 : 0;
        let sidebarWidth = 300;

        return (
            <div style={{
                display: "flex",
                flexFlow: "row nowrap",
                height: this.props.containerHeight,
                width: this.props.containerWidth
            }}>
                <Sidebar width={sidebarWidth} height={this.props.containerHeight}/>
                <ReactSVGPanZoom
                    width={this.props.containerWidth - sidebarWidth}
                    height={this.props.containerHeight}
                    ref={viewer => this.viewer = viewer}
                    onMouseDown={event => this.onMouseDown(event.x, event.y)}
                    onMouseUp={event => this.onMouseUp(event.x, event.y)}
                    onMouseMove={event => this.onMouseMove(event.x, event.y)}
                    detectAutoPan={false}
                    tool={tool}
                    toolbarPosition={"none"}
                >

                    <svg
                        width={2000}
                        height={2000}>

                        <State2DViewer catalog={MyCatalog} state={plannerState}/>
                        <Comments points={this.props.state.comments}/>

                    </svg>

                </ReactSVGPanZoom>
                <Toolbox
                    enterCommentMode={this.props.enterAddingComment}
                    cancelCommentMode={this.props.cancelAddingComment}
                    mode={this.props.state.mode}
                    zoomOut={this.props.zoomOut}
                    zoomIn={this.props.zoomIn}/>
            </div>

        )
    }
}

export default Dimensions()(View)

View.propTypes = {
    state: PropTypes.object.isRequired,
    enterAddingComment: PropTypes.func.isRequired,
    addComment: PropTypes.func.isRequired,
    cancelAddingComment: PropTypes.func.isRequired,
    explodeComment: PropTypes.func.isRequired,
    closeComment: PropTypes.func.isRequired,
    deleteComment: PropTypes.func.isRequired,
    modifyComment: PropTypes.func.isRequired,
    saveCommentText: PropTypes.func.isRequired,
    zoomIn: PropTypes.func.isRequired,
    zoomOut: PropTypes.func.isRequired
};


