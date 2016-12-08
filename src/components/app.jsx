import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import View from './view';
import * as actions from '../actions';

function mapStateToProps(reduxState) {
  return {
    state: reduxState
  }
}

function mapDispatchToProps(dispatch) {
    return {
        startDrawing: bindActionCreators(actions.startDrawingAction, dispatch),
        endDrawing: bindActionCreators(actions.endDrawingAction, dispatch),
        updateDrawing: bindActionCreators(actions.updateDrawingAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(View);
