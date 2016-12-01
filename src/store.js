import {createStore} from 'redux';
import {Record} from 'immutable';

const State = Record({
  count: 0
}, 'State');


function addNumber(state, number) {
  return state.set('count', number + state.count);
}

function reducer(state, action) {
  state = state || new State();

  switch (action.type) {
    case "ADD_NUMBER":
      return addNumber(state, action.number);

    default:
      return state;
  }
}

export function initStore() {
  let middlewares = window.devToolsExtension ? window.devToolsExtension() : f => f;
  return createStore(reducer, null, middlewares);
}
