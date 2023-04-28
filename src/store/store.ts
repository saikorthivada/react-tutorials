import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { ListReducer } from "../redux/List/List.reducer";

const combinedReducer = combineReducers({
    listReducer: ListReducer
});
export const store = createStore(combinedReducer, applyMiddleware(thunk));

export type RootStateType = ReturnType<typeof store.getState>;