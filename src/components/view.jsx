import React, {PropTypes} from 'react';
import Dimensions from 'react-dimensions';
import {ReactSVGPanZoom} from 'react-svg-pan-zoom';

import {MODE_DRAWING,MODE_IDLE} from '../constants';

import Comments from './comments';

class View extends React.Component {

    constructor(props) {
        super(props);
        this.Viewer = null;

    }

    componentDidMount() {
        this.Viewer.fitToViewer();
    }

    addPoint(SVGPointX, SVGPointY) {
        this.props.addComment(Math.round(SVGPointX), Math.round(SVGPointY));
    }

    startDrawing() {
        this.props.changeMode(MODE_DRAWING);
    }

    stopDrawing() {
        this.props.changeMode(MODE_IDLE);
    }
    render() {

        return (
        <div>
            <ReactSVGPanZoom
                width={this.props.containerWidth-4}
                height={this.props.containerHeight-4}
                ref={Viewer => this.Viewer = Viewer}
                onClick={event => this.addPoint(event.x, event.y)}
                onMouseDown={event => this.startDrawing()}
                onMouseUp  ={event => this.stopDrawing()}
                tool={'auto'}
                detectAutoPan={false}
                toolbarPosition={'none'}>

                <svg
                    width={2000}
                    height={2000}>

                    <circle
                        cx={1000}
                        cy={1000}
                        fill="#a00"
                        r={100} />

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
  addComment: PropTypes.func.isRequired,
  changeMode: PropTypes.func.isRequired
};


