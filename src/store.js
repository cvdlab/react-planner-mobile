import {createStore} from 'redux';
import {Record} from 'immutable';

const State = Record({
    comments: []
}, 'State');


function addComment(state, x, y) {
  var tmp = state.comments;
  tmp.push([x,y]);
  return state.set('comments', tmp);
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
