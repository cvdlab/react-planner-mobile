import {userLoginAPI, getProjectsAPI, getProjectAPI, getFileDataAPI, callAPI} from './api-caller'
import {SERVER_CORE_URL} from './constants/server'

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

        getProjectsAPI(state.userId, state.token, SERVER_CORE_URL)
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

        getProjectAPI(projectId, state.userId, state.token, SERVER_CORE_URL)
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
         getFileDataAPI(projectId, fileId, state.userId, state.token, SERVER_CORE_URL)
            .then(json => {

                dispatch({
                    type: "LOAD_FILE_DATA",
                    data: json,
                    fileId: fileId
                });

            })
    }
}

/*
export function updateFileData(projectId, fileId) {

    return (dispatch, getState) => {
        let newState = getState();
        let newProjectData = newState.projectData;
        let newScene = newProjectData.get('scene');
        let comments = newState.get('comments');
        let newMeta = newScene.get('meta').set('comments', comments);
        newScene = newScene.set('meta', newMeta);

        updateFileDataAPI(projectId, fileId, newScene, newState.token, 'http://metior-dev.geoweb.it/core/api')
            .then(json => {

                dispatch({
                    type: "UPDATE_FILE_DATA"
                });

            })
    }
}
*/

export function storeUserInfoAction(username, password) {
    let userId;
    let token;
    return dispatch => {
        userLoginAPI(username, password, SERVER_CORE_URL)
            .then(json => {
                userId = json.userId;
                token = json.id;
                return getProjectsAPI(json.userId, json.id, SERVER_CORE_URL);

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

export function updateFileData() {

    return (dispatch, getState) =>{
        let state = getState();

        let accessToken = state.token;
        let userID = state.userId;
        let fileID = state.selectedFileId;
        console.log(fileID);
        let projectID = state.selectedProjectId;

        let newProjectData = state.projectData;
        let scene = newProjectData.get('scene');
        let comments = state.get('comments');
        let newMeta = scene.get('meta').set('comments', comments);
        scene = scene.set('meta', newMeta);


        let planName = 'plan';

        let filename = planName;
        let extension = filename.substr(filename.lastIndexOf('.') + 1);

        if (!extension || extension !== 'json') {
            filename += '.json';
        }

        let newData = scene.toJS();

        let blob = new window.Blob([JSON.stringify(newData, null, 2)], {type: 'application/json'});

        let file = new window.File([blob], filename);

        let formData = new window.FormData();
        formData.append('file', file);
        formData.append('name', planName);
        formData.append('type', 'TYPE_PLAN');

        callAPI(`${SERVER_CORE_URL}/accounts/${userID}/overwrite-file/projects/${projectID}/file/${fileID}`, 'POST', accessToken, formData)
            .then(data => {
                alert('Progetto salvato con successo');
                dispatch({
                    type: "UPDATE_FILE_DATA"
                });
            }, error => {
                alert('Il salvataggio del progetto non è avvenuto con successo');
            });
    }
}