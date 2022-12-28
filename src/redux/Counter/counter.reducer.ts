export const COUNTER_ACTIONS = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
    RESET: 'RESET'
}

const InitialCounterState = {
    counter: 0
}

interface ICounterState {
    counter: number
}

export interface IActions {
    type: string,
    payload?: any
}
export const counterReducer = (state: ICounterState=InitialCounterState, actions: IActions) => {
    switch(actions.type) {
        case COUNTER_ACTIONS.INCREMENT: {
            return {
                ...state,
                counter: state.counter + 1
            }
        }
        case COUNTER_ACTIONS.DECREMENT: {
            return {
                ...state,
                counter: state.counter - 1
            }
        }
        case COUNTER_ACTIONS.RESET: {
            return {
                ...InitialCounterState
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}