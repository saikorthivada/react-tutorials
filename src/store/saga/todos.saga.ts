import {takeEvery, call, put} from 'redux-saga/effects';
import axios from 'axios';

async function getAPIData() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        return {
            data: response.data,
            message: null
        }
    }
    catch(e){
        return {
            data: null,
            message: 'Something went wrong'
        }
    }
}
export function* sagaCallBack(): any {
    yield put({
        type: 'REQUEST_LOADING'
    });
    const result = yield call(getAPIData);
    if(result.data) {
       yield put({
            type: 'REQUEST_SUCCESS',
            payload: result.data
        });
    } else {
       yield put({
            type: 'REQUEST_FAILURE',
            payload: 'Something went wrong'
        });
    }
    console.log(result);
   
}
export function* todosSaga(): any {
    yield takeEvery('FETCH_USERS', sagaCallBack);
}