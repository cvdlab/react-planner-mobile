import React, {PropTypes} from 'react';
import Dimensions from 'react-dimensions';
import {ReactSVGPanZoom} from 'react-svg-pan-zoom';
/*import FormData from './form-data';*/

class View extends React.Component {
    constructor(props) {
        super(props);
        this.Viewer = null;
    }

    componentDidMount() {
        this.Viewer.fitToViewer();
    }

    render() {
        return (
        <div>
            <ReactSVGPanZoom
                width={this.props.containerWidth-4}
                height={this.props.containerHeight-4}
                ref={Viewer => this.Viewer = Viewer}
                onClick={event => console.log('click', event.x, event.y, event.originalEvent)}
                onMouseUp={event => console.log('up', event.x, event.y)}
                onMouseMove={event => console.log('move', event.x, event.y)}
                onMouseDown={event => console.log('down', event.x, event.y)}>

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
  state: PropTypes.object.isRequired
  /*addNumber: PropTypes.func.isRequired*/
};


