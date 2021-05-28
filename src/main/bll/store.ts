import {Reducer} from './reducer';
import {combineReducers, createStore, applyMiddleware} from "redux";
import thunkMiddleware from 'redux-thunk'

const rootReducer = combineReducers({
    reduce: Reducer,

})



export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));



export type AppStoreType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store
