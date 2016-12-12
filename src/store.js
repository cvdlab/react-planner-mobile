import {createStore} from 'redux';
import {Record, List, Map} from 'immutable';
import {MODE_PANNING} from './constants';

import {addCommentAction} from './actions'

const State = Record({
    mode: MODE_PANNING,
    comments: new List()
}, 'State');


function addComment(state, x, y) {
    let point = new Map({x, y});
    let comments = state.comments.push(point);
    return state.set('comments', comments);
}


function reducer(state, action) {
    state = state || new State();

    switch (action.type) {
        default:
            return state;
    }
}

export function initStore() {
  let middlewares = window.devToolsExtension ? window.devToolsExtension() : f => f;
  return createStore(reducer, null, middlewares);
}
