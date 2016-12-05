import {createStore} from 'redux';
import {Record, List, Map} from 'immutable';

const State = Record({
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
    case "ADD_COMMENT":
      return addComment(state, action.x, action.y);

    default:
      return state;
  }
}

export function initStore() {
  let middlewares = window.devToolsExtension ? window.devToolsExtension() : f => f;
  return createStore(reducer, null, middlewares);
}
