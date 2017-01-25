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
        explodeComment: bindActionCreators(actions.explodeCommentAction, dispatch),
        closeComment: bindActionCreators(actions.closeCommentAction, dispatch),
        deleteComment: bindActionCreators(actions.deleteCommentAction, dispatch),
        modifyCommentText: bindActionCreators(actions.modifyCommentTextAction, dispatch),
        saveCommentText: bindActionCreators(actions.saveCommentTextAction, dispatch),
        enterAddingComment: bindActionCreators(actions.enterAddingCommentAction, dispatch),
        addComment: bindActionCreators(actions.addCommentAction, dispatch),
        cancelAddingComment: bindActionCreators(actions.cancelAddingCommentAction, dispatch),
        cancelModifyCommentText: bindActionCreators(actions.cancelModifyCommentTextAction, dispatch),
        zoomIn: bindActionCreators(actions.zoomIn, dispatch),
        zoomOut: bindActionCreators(actions.zoomOut, dispatch),
        exitFileBrowser: bindActionCreators(actions.exitFileBrowserAction, dispatch),
        loadProjects: bindActionCreators(actions.loadProjects, dispatch),
        loadFiles: bindActionCreators(actions.loadFiles, dispatch),
        loadFileData: bindActionCreators(actions.loadFileData, dispatch),
        updateFileData: bindActionCreators(actions.updateFileData, dispatch),
        storeUserInfo: bindActionCreators(actions.storeUserInfoAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(View);
