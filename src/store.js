import {createStore} from 'redux';
import {Record, List, Map} from 'immutable';
import {MODE_IDLE, MODE_DRAWING} from './constants';

import {addCommentAction} from './actions'

const State = Record({
    mode: MODE_IDLE,
    currentDraw: new List(),
    comments: new List()
}, 'State');


function addComment(state, x, y) {
    let point = new Map({x, y});
    let comments = state.comments.push(point);
    return state.set('comments', comments);
}


function startDrawing(state, x, y) {
    let newState = state;
    let newDraw;

    newState = newState.set('mode', MODE_DRAWING);
    newDraw = newState.currentDraw.push(new Map({x, y}));
    newState = newState.set('currentDraw', newDraw);

    return newState;
}

function endDrawing(state, x, y) {
    let newState = state;

    newState = newState.set('mode', MODE_IDLE);

    if (newState.currentDraw.size == 1) {
        newState = addComment(newState, x, y);
    }

    newState = newState.set('currentDraw', new List());

    return newState;
}

function updateDrawing(state, x, y) {
    let newState = state;
    let newDraw;

    newDraw = newState.currentDraw.push(new Map({x, y}));
    newState = newState.set('currentDraw', newDraw);

    return newState;
}

function reducer(state, action) {
    state = state || new State();

    switch (action.type) {
        case "START_DRAWING":
            return startDrawing(state, action.x, action.y);
            break;
        case "END_DRAWING":
            return endDrawing(state, action.x, action.y);
            break;
        case "UPDATE_DRAWING":
            return updateDrawing(state, action.x, action.y);
            break;
        default:
            return state;
    }
}

export function initStore() {
  let middlewares = window.devToolsExtension ? window.devToolsExtension() : f => f;
  return createStore(reducer, null, middlewares);
}
