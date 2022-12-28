import { combineReducers, createStore } from "redux";
import { ageReducer } from "../redux/Age/age.reducer";
import { counterReducer } from "../redux/Counter/counter.reducer";

const combinedReducers  = combineReducers({
    counterReducer: counterReducer,
    ageReducer: ageReducer
})

export const store = createStore(combinedReducers);