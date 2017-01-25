import {userLoginAPI, getProjectsAPI, getProjectAPI, getFileDataAPI} from './api-caller'

export function enterAddingCommentAction() {
    return {
        type: "ENTER_ADDING_COMMENT"
    }
}

export function addCommentAction(SVGPointX, SVGPointY) {
    return {
        type: "ADD_COMMENT",
        x: SVGPointX,
        y: SVGPointY
    }
}

/*
 export function selectCommentFromPointAction(){
 return {
 type: "SELECT_COMMENT_FROM_POINT"
 }
 }
 */

export function explodeCommentAction(index) {
    return {
        type: "EXPLODE_COMMENT",
        commentIndex: index
    }
}

export function closeCommentAction() {
    return {
        type: "CLOSE_COMMENT"
    }
}

export function deleteCommentAction(index) {
    return {
        type: "DELETE_COMMENT",
        commentIndex: index
    }
}

export function modifyCommentTextAction(index, text) {
    return {
        type: "MODIFY_COMMENT_TEXT",
        commentIndex: index,
        commentText: text
    }
}

export function cancelModifyCommentTextAction() {
    return {
        type: "CANCEL_MODIFY_COMMENT_TEXT"
    }
}

export function exitFileBrowserAction() {
    return {
        type: "EXIT_FILE_BROWSER"
    }
}

export function saveCommentTextAction(index, text) {
    return {
        type: "SAVE_COMMENT_TEXT",
        commentIndex: index,
        commentText: text
    }
}
export function cancelAddingCommentAction() {
    return {
        type: "CANCEL_ADDING_COMMENT"
    }
}

export function zoomIn() {
    return {
        type: "ZOOMING_IN"
    }
}

export function zoomOut() {
    return {
        type: "ZOOMING_OUT"
    }
}

export function loadProjects() {
    return (dispatch, getState) => {
        let state = getState();

        getProjectsAPI(state.userId, state.token, 'http://metior-dev.geoweb.it/core/api')
            .then(json => {

                dispatch({
                    type: "LOAD_PROJECTS",
                    projects: json
                });
            })
    }
}

export function loadFiles(projectId) {

    return (dispatch, getState) => {
        let state = getState();

        getProjectAPI(projectId, state.userId, state.token, 'http://metior-dev.geoweb.it/core/api')
            .then(json => {

                dispatch({
                    type: "LOAD_FILES",
                    files: json,
                    projectId: projectId
                });
            })
    }
}

export function loadFileData(projectId, fileId) {

    return (dispatch, getState) => {
        let state = getState();
         getFileDataAPI(projectId, fileId, state.userId, state.token, 'http://metior-dev.geoweb.it/core/api')
            .then(json => {

                dispatch({
                    type: "LOAD_FILE_DATA",
                    data: json
                });

            })
    }
}

export function updateFileData(projectId, fileId, data) {

    return (dispatch, getState) => {
        let state = getState();
        updateFileDataAPI(projectId, fileId, data, state.token, 'http://metior-dev.geoweb.it/core/api')
            .then(json => {

                dispatch({
                    type: "UPDATE_FILE_DATA",
                    projects: json
                });

            })
    }
}

export function storeUserInfoAction(username, password) {
    let userId;
    let token;
    return dispatch => {
        userLoginAPI(username, password, 'http://metior-dev.geoweb.it/core/api')
            .then(json => {
                userId = json.userId;
                token = json.id;
                return getProjectsAPI(json.userId, json.id, 'http://metior-dev.geoweb.it/core/api');

            })
            .then(json => {

                dispatch({
                    type: "STORE_USER_INFO",
                    projects: json,
                    token: token,
                    userId: userId
                });
            })
    }
}