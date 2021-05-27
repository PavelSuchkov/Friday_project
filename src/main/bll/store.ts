import {Reducer} from './reducer';
import {combineReducers, createStore, applyMiddleware} from "redux";

const reducers = combineReducers({
    reduce: Reducer,

})

const store = createStore(reducers)

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store