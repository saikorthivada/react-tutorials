import { RootState } from "../store";

interface IInitialState {
    loading: boolean,
    data: any[] | null,
    error: string
}

interface IAction {
    type: string,
    payload?: any
}

const initialState: IInitialState = {
    loading: false,
    data: null,
    error: ''
}

export const TodosReducer = (state: IInitialState = initialState, action: IAction) => {
    switch (action.type) {
        case 'REQUEST_LOADING': {
            console.log('loading');
            return {
                ...state,
                loading: true,
                data: null,
                error: ''
            }
        }
        case 'REQUEST_SUCCESS': {
            console.log('Success', action.payload);
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ''
            }
        }
        case 'REQUEST_FAILURE': {
            console.log('failyure');
            return {
                ...state,
                loading: false,
                data: null,
                error: action.payload
            }
        }
        default: {
            return state
        }
    }
}

export const todosSelector = (state: RootState) => state.todosReducer as IInitialState;