import {applyMiddleware, combineReducers, createStore} from "redux";
import {counterReducer} from "./count-reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    counter: counterReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunk))


