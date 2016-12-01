import React, {PropTypes} from 'react';
import Dimensions from 'react-dimensions';
/*import FormData from './form-data';*/

class View extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div>
          <svg width={this.props.containerWidth} height={this.props.containerHeight}>
              <circle
                  cx={this.props.containerWidth/2}
                  cy={this.props.containerHeight/2}
                  fill="#a00"
                  r={this.props.containerHeight/4}
              />
          </svg>
        </div>

        )
  }
}

export default Dimensions()(View)

View.propTypes = {
  state: PropTypes.object.isRequired,
  addNumber: PropTypes.func.isRequired
};


