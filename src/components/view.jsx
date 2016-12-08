import React, {PropTypes} from 'react';
import Dimensions from 'react-dimensions';
import {ReactSVGPanZoom} from 'react-svg-pan-zoom';

import Comments from './comments';

import {Models,State2DViewer,Catalog} from 'react-planner';
import project from '../project/q_mura';
import MyCatalog from '../catalog/mycatalog';

import {MODE_DRAWING} from '../constants';

class View extends React.Component {

    constructor(props) {
        super(props);
        this.Viewer = null;
    }

    componentDidMount() {
        this.Viewer.fitToViewer();
    }

    onMouseDown(x, y) {
        this.props.startDrawing(Math.round(x), Math.round(y));
    }

    onMouseUp(x, y) {
        this.props.endDrawing(Math.round(x), Math.round(y));
    }

    onMouseMove(x, y) {
        if (this.props.state.mode == MODE_DRAWING)
            this.props.updateDrawing(Math.round(x), Math.round(y));
    }

    render() {

        let plannerState = new Models.State({scene: project});

        return (
        <div>
            <ReactSVGPanZoom
                width={this.props.containerWidth-4}
                height={this.props.containerHeight-4}
                ref={Viewer => this.Viewer = Viewer}
                onMouseDown={event => this.onMouseDown(event.x, event.y)}
                onMouseUp={event => this.onMouseUp(event.x, event.y)}
                onMouseMove={event => this.onMouseMove(event.x, event.y)}
                detectAutoPan={false}
                >

                <svg
                    width={2000}
                    height={2000}>

                    <State2DViewer catalog={MyCatalog} state={plannerState}/>
                    <Comments points={this.props.state.comments}/>

                </svg>

            </ReactSVGPanZoom>
        </div>

        )
    }
}

export default Dimensions()(View)

View.propTypes = {
    state: PropTypes.object.isRequired,
    startDrawing: PropTypes.func.isRequired,
    endDrawing: PropTypes.func.isRequired,
    updateDrawing: PropTypes.func.isRequired
};


