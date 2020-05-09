import { createStore,combineReducers,applyMiddleware } from 'redux';
// import rollDice from './reducers/dice'
import pawn from './reducers/player'
import thunk from 'redux-thunk';

let store = createStore(combineReducers({ pawn}),applyMiddleware(thunk))

export default store;