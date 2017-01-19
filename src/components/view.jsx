import React, {PropTypes} from "react";
import Dimensions from "react-dimensions";
import {ReactSVGPanZoom, TOOL_PAN, TOOL_NONE} from "react-svg-pan-zoom";
import Comments from "./comments";
import Toolbox from "./toolbox/toolbox";
import Sidebar from "./sidebar/sidebar";
import CommentTextEditor from "./comment-editor";
import FileNavigation from "./browser/file-navigation"
import {Models, State2DViewer} from "react-planner";
import project from "../project/q_mura";
import MyCatalog from "../catalog/mycatalog";
import {MODE_ADDING_COMMENT, MODE_MODIFYING_COMMENT, MODE_FILE_BROWSER} from "../constants/modes";
import {ZOOM_IN_DELTA, ZOOM_OUT_DELTA, ZOOM_START_LEVEL} from "../constants/zoom";
import If from "./react-if";


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

    render() {

        let plannerState = new Models.State({scene: project});

        let tool = TOOL_PAN;
        switch (this.props.state.mode) {
            case MODE_ADDING_COMMENT:
                tool = TOOL_NONE;
                break;
        }

        let sidebarWidth = 300;

        let activeComment = this.props.state.activeComment;
        let isModifyingComment = this.props.state.mode == MODE_MODIFYING_COMMENT;
        let isInBrowser = this.props.state.mode == MODE_FILE_BROWSER;
        return (


            <div style={{
                display: "flex",
                flexFlow: "row nowrap",
                height: this.props.containerHeight,
                width: this.props.containerWidth
            }}>
                <If condition={isModifyingComment}>
                    <CommentTextEditor
                        text={isModifyingComment ? this.props.state.comments.get(activeComment).get('text') : "ERRORE"}
                        activeComment={activeComment}
                        saveCommentText={this.props.saveCommentText}
                        cancelModifyCommentTextFn={this.props.cancelModifyCommentText}
                    />
                </If>
                <If condition={isInBrowser}>
                    <FileNavigation
                        cancelOpenItem={this.props.exitFileBrowser}
                        loadFileFn={this.props.loadFileData}
                        loadFilesFn={this.props.loadFiles}
                        elemList={this.props.state.selectedProjectId == 'null' ?
                            this.props.state.projectsList : this.props.state.filesList}
                        projectId={this.props.state.selectedProjectId}
                    />
                </If>
                <Sidebar
                    width={sidebarWidth}
                    height={this.props.containerHeight}
                    comments={this.props.state.comments}
                    activeComment={this.props.state.activeComment}
                    openCommentFn={this.props.explodeComment}
                    deleteCommentFn={this.props.deleteComment}
                    modifyCommentTextFn={this.props.modifyCommentText}
                    loadProjectsFn={this.props.loadProjects}
                />
                <ReactSVGPanZoom
                    width={this.props.containerWidth - sidebarWidth}
                    height={this.props.containerHeight}
                    ref={viewer => this.viewer = viewer}
                    onMouseDown={event => this.onMouseDown(event.x, event.y)}
                    detectAutoPan={false}
                    tool={tool}
                    toolbarPosition={"none"}
                >

                    <svg
                        width={2000}
                        height={2000}>

                        <State2DViewer catalog={MyCatalog} state={plannerState}/>
                        <Comments comments={this.props.state.comments}/>

                    </svg>

                </ReactSVGPanZoom>
                <Toolbox
                    enterCommentMode={this.props.enterAddingComment}
                    cancelCommentMode={this.props.cancelAddingComment}
                    mode={this.props.state.mode}
                    zoomOut={this.props.zoomOut}
                    zoomIn={this.props.zoomIn}/>


            </div>

        );
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
    modifyCommentText: PropTypes.func.isRequired,
    saveCommentText: PropTypes.func.isRequired,
    cancelModifyCommentText: PropTypes.func.isRequired,
    zoomIn: PropTypes.func.isRequired,
    zoomOut: PropTypes.func.isRequired,
    exitFileBrowser: PropTypes.func.isRequired,
    loadProjects: PropTypes.func.isRequired,
    loadFiles: PropTypes.func.isRequired,
    loadFileData: PropTypes.func.isRequired
};


