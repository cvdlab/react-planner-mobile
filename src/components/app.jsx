import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import View from './view';
import {addCommentAction, changeModeAction} from '../actions';

function mapStateToProps(reduxState) {
  return {
    state: reduxState
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addComment: bindActionCreators(addCommentAction, dispatch),
    changeMode: bindActionCreators(changeModeAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(View);
