import { all } from 'redux-saga/effects';
import { todosSaga } from './todos.saga';

export function* rootSaga(): any {
    return yield all([
        todosSaga()
    ])
}

// All -> used to combine all the saga functions
// takeEvery -> consider all the api or action calls
// takelatest -> consider only the latest action instead of all actions
// put - it is same like dispatch
// call - used for async calls

// UI dipatch some action -> search in saga 1st -> execute saga function if action exist else it search in reducers
