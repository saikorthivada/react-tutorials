import { applyMiddleware, combineReducers, createStore } from "redux";
import { TodosReducer } from "./todos/todos.reducer";
import createSagaConfig from 'redux-saga';
import { rootSaga } from "./saga/rootSaga";
const combinedReducer = combineReducers({
    todosReducer: TodosReducer
})

const sagaConfig = createSagaConfig();
export const rootStore = createStore(combinedReducer, applyMiddleware(sagaConfig));

export type RootState = ReturnType<typeof rootStore.getState>;

sagaConfig.run(rootSaga);