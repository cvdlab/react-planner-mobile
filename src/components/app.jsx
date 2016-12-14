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
        enterAddingComment: bindActionCreators(actions.enterAddingCommentAction, dispatch),
        addComment: bindActionCreators(actions.addCommentAction, dispatch),
        cancelAddingComment: bindActionCreators(actions.cancelAddingCommentAction, dispatch),
        zoomIn: bindActionCreators(actions.zoomIn, dispatch),
        zoomOut: bindActionCreators(actions.zoomOut, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(View);
