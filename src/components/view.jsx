import React, {PropTypes} from 'react';
import Dimensions from 'react-dimensions';
import {ReactSVGPanZoom} from 'react-svg-pan-zoom';

class View extends React.Component {
    constructor(props) {
        super(props);
        this.Viewer = null;
    }

    componentDidMount() {
        this.Viewer.fitToViewer();
    }

    addPoint(SVGPointX, SVGPointY) {
        this.props.addComment(Math.round(SVGPointX), Math.round(SVGPointY))
    }

    render() {
        return (
        <div>
            <ReactSVGPanZoom
                width={this.props.containerWidth-4}
                height={this.props.containerHeight-4}
                ref={Viewer => this.Viewer = Viewer}
                onClick={event => this.addPoint(event.x, event.y)}
                tool={'auto'}>

                    <svg width={2000} height={2000}>
                        <circle
                            cx={1000}
                            cy={1000}
                            fill="#a00"
                            r={100}
                        />
                    </svg>
            </ReactSVGPanZoom>
        </div>

        )
  }
}

export default Dimensions()(View)

View.propTypes = {
  state: PropTypes.object.isRequired,
  addComment: PropTypes.func.isRequired
};


