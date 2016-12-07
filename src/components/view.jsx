import React, {PropTypes} from 'react';
import Dimensions from 'react-dimensions';
import {ReactSVGPanZoom} from 'react-svg-pan-zoom';

import {MODE_DRAWING,MODE_IDLE} from '../constants';

import Comments from './comments';

class View extends React.Component {

    constructor(props) {
        super(props);
        this.Viewer = null;
        this.mouseDown=false;
    }

    componentDidMount() {
        this.Viewer.fitToViewer();
    }

    onMouseDown() {
        this.mouseDown = true;
    }

    onMouseUp(SVGPointX, SVGPointY) {
        this.mouseDown = false;

        if (this.props.state.mode == MODE_DRAWING)
            this.props.changeMode(MODE_IDLE);
        else
            this.props.addComment(Math.round(SVGPointX), Math.round(SVGPointY));
    }

    onMouseMove(SVGPointX, SVGPointY){

        if (this.mouseDown && this.props.state.mode != MODE_DRAWING)
            this.props.changeMode(MODE_DRAWING);

    }

    render() {

        return (
        <div>
            <ReactSVGPanZoom
                width={this.props.containerWidth-4}
                height={this.props.containerHeight-4}
                ref={Viewer => this.Viewer = Viewer}
                onMouseDown={event => this.onMouseDown()}
                onMouseUp=  {event => this.onMouseUp(event.x, event.y)}
                onMouseMove={event => this.onMouseMove(event.x, event.y)}
                //tool={'auto'}
                detectAutoPan={false}
                toolbarPosition={'none'}
                >

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


