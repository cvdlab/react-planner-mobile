import {Record, List, Map} from 'immutable';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import {MODE_PANNING, MODE_ADDING_COMMENT, MODE_MODIFYING_COMMENT} from './constants/modes';
import {ZOOM_LEVEL_MAX, ZOOM_LEVEL_MIN, ZOOM_START_LEVEL} from './constants/zoom'

const State = Record({
    mode: MODE_PANNING,
    comments: new List(),
    zoomLevel: ZOOM_START_LEVEL,
    isSidebarOpen: true,
    activeComment: -1,
    commentIsExploded: true
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

function enterAddCommentMode(state) {
    return state.set('mode', MODE_ADDING_COMMENT);
}

function cancelAddCommentMode(state) {
    return state.set('mode', MODE_PANNING);
}

function explodeComment(state, commentIndex) {
    let newState = state;
    newState = newState.set('commentIsExploded', true);
    newState = newState.set('activeComment', commentIndex);
    return newState;
}

function closeComment(state) {
    return state.set('activeComment', -1);
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

function reducer(state, action) {
    state = state || new State();

    switch (action.type) {
        case "ENTER_ADDING_COMMENT":
            return enterAddCommentMode(state);
            break;
        case "CANCEL_ADDING_COMMENT":
            return cancelAddCommentMode(state);
            break;
        case "ADD_COMMENT":
            return addComment(state, action.x, action.y);
            break;
        case "MODIFY_COMMENT_TEXT":
            return modifyCommentText(state, action.commentIndex, action.commentText);
            break;
        case "CANCEL_MODIFY_COMMENT_TEXT":
            return cancelModifyCommentText(state);
            break;
        case "EXPLODE_COMMENT":
            return explodeComment(state, action.commentIndex);
            break;
        case "CLOSE_COMMENT":
            return closeComment(state);
            break;
        case "DELETE_COMMENT":
            return deleteComment(state, action.commentIndex);
            break;
        case "ZOOMING_IN":
            return zoomIn(state);
            break;
        case "ZOOMING_OUT":
            return zoomOut(state);
            break;
        case "SAVE_COMMENT_TEXT":
            return saveComment(state, action.commentIndex, action.commentText);
            break;
        default:
            return state;
    }
}

export function initStore() {
    let middlewares = compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )

  return createStore(reducer, null, middlewares);

}
