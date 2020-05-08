import { createStore,combineReducers } from 'redux';
import rollDice from './reducers/dice'
import pawn from './reducers/player'


let store = createStore(combineReducers({rollDice, pawn}))

export default store;