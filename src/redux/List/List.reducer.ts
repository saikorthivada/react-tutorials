import { LIST_ACTIONS } from "./List.action.types";
import { IList, InitialListState } from "./List.state";

export interface IActions {
    type: string;
    payload?: any;
}
export const ListReducer = (state: IList = InitialListState, actions: IActions) => {
    switch (actions.type) {
        case LIST_ACTIONS.REQUEST: {
            return {
                ...state,
                loading: true
            }
        }
        case LIST_ACTIONS.SUCCESS: {
            return {
                ...state,
                data: actions.payload,
                loading: false
            }
        }
        case LIST_ACTIONS.FAILURE: {
            return {
                ...state,
                data: null,
                loading: false,
                error: actions.payload
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}