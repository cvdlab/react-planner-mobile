import {createStore} from 'redux';
import {Record, List, Map} from 'immutable';
import {MODE_IDLE} from './constants';


const State = Record({
    mode: MODE_IDLE,
    comments: new List()
}, 'State');


function addComment(state, x, y) {
  let point = new Map({x, y});
  let comments = state.comments.push(point);
  return state.set('comments', comments);
}

function changeMode(state, newMode) {
    return state.set('mode', newMode);
}

function reducer(state, action) {
  state = state || new State();

  switch (action.type) {
    case "ADD_COMMENT":
      return addComment(state, action.x, action.y);
      break;
    case "CHANGE_MODE":
      return changeMode(state, action.mode);
      break;
    default:
      return state;
  }
}

export function initStore() {
  let middlewares = window.devToolsExtension ? window.devToolsExtension() : f => f;
  return createStore(reducer, null, middlewares);
}
