import {createStore} from 'redux';
import {Record, List, Map} from 'immutable';
import {MODE_PANNING, MODE_ADDING_COMMENT} from './constants/modes';

const State = Record({
    mode: MODE_PANNING,
    comments: new List(),
    zoomLevel: 1
}, 'State');


function addComment(state, x, y) {
    let newState = state
    let point = new Map({x, y});
    let comments = newState.comments.push(point);
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

function zoomIn(state) {
    return state.set('zoomLevel', state.zoomLevel + 0.5);
}

function zoomOut(state) {
    return state.set('zoomLevel', state.zoomLevel - 0.5);
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
        case "ZOOMING_IN":
            return zoomIn(state);
            break;
        case "ZOOMING_OUT":
            return zoomOut(state);
            break;
        default:
            return state;
    }
}

export function initStore() {
  let middlewares = window.devToolsExtension ? window.devToolsExtension() : f => f;
  return createStore(reducer, null, middlewares);
}
