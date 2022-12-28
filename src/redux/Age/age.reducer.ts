import { IActions } from "../Counter/counter.reducer";

export const AGE_ACTIONS = {
    UPDATE_AGE: 'UPDATE_AGE'
}
interface IAge {
    age: number
}
const AgeState = {
    age: 0
}
export const ageReducer = (state: IAge = AgeState, actions: IActions) => {
    switch(actions.type) {
        case AGE_ACTIONS.UPDATE_AGE: {
            return {
                ...state,
                age: actions.payload
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}