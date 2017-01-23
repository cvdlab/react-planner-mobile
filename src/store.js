import {Record, List, Map, fromJS} from 'immutable';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {Models} from "react-planner";


import {MODE_PANNING, MODE_ADDING_COMMENT, MODE_MODIFYING_COMMENT, MODE_FILE_BROWSER, MODE_USER_LOGIN} from './constants/modes';
import {ZOOM_LEVEL_MAX, ZOOM_LEVEL_MIN, ZOOM_START_LEVEL} from './constants/zoom'

const State = Record({
    mode: MODE_USER_LOGIN,
    comments: new List(),
    zoomLevel: ZOOM_START_LEVEL,
    isSidebarOpen: true,
    activeComment: -1,
    commentIsExploded: true,
    username: null,
    password: null,
    selectedProjectId: 'null',
    selectedFileId: 'null',
    projectsList: new List(),
    filesList: new List(),
    projectData: 'null'
}, 'State');


function addComment(state, x, y) {
    let newState = state;
    let text = "Fai tap per modificare";
    let comment = new Map({x, y, text});
    let comments = newState.comments.push(comment);
    newState = newState.set('comments', comments);
    newState = newState.set('mode', MODE_PANNING);
    return newState;
}

function saveComment(state, commentIndex, commentText){
    let newState = state;
    let comment = newState.comments.get(commentIndex);
    comment = comment.set('text', commentText);
    let comments = newState.comments.set(commentIndex, comment);
    newState = newState.set('comments', comments);
    newState = newState.set('mode', MODE_PANNING);
    return newState;
}

function explodeComment(state, commentIndex) {
    let newState = state;
    newState = newState.set('commentIsExploded', true);
    newState = newState.set('activeComment', commentIndex);
    return newState;
}

function modifyCommentText(state, commentIndex, commentText){
    let newState = state;
    newState = newState.set('mode', MODE_MODIFYING_COMMENT);
    return newState;
}

function cancelModifyCommentText(state) {
    let newState = state;
    newState = newState.set('mode', MODE_PANNING);
    return newState;
}

function deleteComment(state, commentIndex) {
    let newState = state;
    let comments = newState.comments.remove(commentIndex);
    newState = newState.set('comments', comments);
    newState = newState.set('activeComment', -1);
    return newState;
}

function zoomIn(state) {
    let newZoom = state.zoomLevel + 1;
    if (newZoom > ZOOM_LEVEL_MAX) newZoom = ZOOM_LEVEL_MAX;
    return state.set('zoomLevel', newZoom);
}

function zoomOut(state) {
    let newZoom = state.zoomLevel - 1;
    if (newZoom < ZOOM_LEVEL_MIN) newZoom = ZOOM_LEVEL_MIN;
    return state.set('zoomLevel', newZoom);
}

function loadProjects(state, projects) {
    let newState = state;
    newState = newState.set('selectedProjectId', 'null');
    newState = newState.set('projectsList', fromJS(projects));
    newState = newState.set('mode', MODE_FILE_BROWSER);
    return newState;
}

function loadFiles(state, files, projectId) {
    let newState = state;
    newState = newState.set('selectedProjectId', projectId);
    newState = newState.set('selectedFileId', 'null');
    newState = newState.set('filesList', fromJS(files['files']));
    newState = newState.set('mode', MODE_FILE_BROWSER);
    return newState;
}

function loadFileData(state, data) {

    let newState = state;
    newState = newState.set('projectData', new Models.State({scene: data}));
    newState = newState.set('mode', MODE_PANNING);

    return newState;
}

function storeUserInfo(state, user, password, projects) {

    let newState = state;

    newState = newState.set('username', user);
    newState = newState.set('password', password);
    newState = newState.set('selectedProjectId', 'null');
    newState = newState.set('projectsList', fromJS(projects));
    newState = newState.set('mode', MODE_FILE_BROWSER);
    return newState;

}


function reducer(state, action) {
    state = state || new State();

    switch (action.type) {
        case "ENTER_ADDING_COMMENT":
            return state.set('mode', MODE_ADDING_COMMENT);

        case "CANCEL_ADDING_COMMENT":
            return state.set('mode', MODE_PANNING);

        case "ADD_COMMENT":
            return addComment(state, action.x, action.y);

        case "MODIFY_COMMENT_TEXT":
            return modifyCommentText(state, action.commentIndex, action.commentText);

        case "CANCEL_MODIFY_COMMENT_TEXT":
            return cancelModifyCommentText(state);

        case "EXPLODE_COMMENT":
            return explodeComment(state, action.commentIndex);

        case "CLOSE_COMMENT":
            return state.set('activeComment', -1);

        case "DELETE_COMMENT":
            return deleteComment(state, action.commentIndex);

        case "ZOOMING_IN":
            return zoomIn(state);

        case "ZOOMING_OUT":
            return zoomOut(state);

        case "SAVE_COMMENT_TEXT":
            return saveComment(state, action.commentIndex, action.commentText);

        case "EXIT_FILE_BROWSER":
            return state.set('mode', MODE_PANNING);

        case "LOAD_PROJECTS":
            return loadProjects(state, action.projects);

        case "LOAD_FILES":
            return loadFiles(state, action.files, action.projectId);

        case "LOAD_FILE_DATA":
            return loadFileData(state, action.data);

        case "STORE_USER_INFO":
            return storeUserInfo(state, action.username, action.password, action.projects);

        default:
            return state;
    }
}

export function initStore() {
    let middlewares = compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    );

  return createStore(reducer, null, middlewares);

}
