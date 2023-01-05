import axios from "axios";
import { LIST_ACTIONS } from "../redux/List/List.action.types";

export const getAPICall = () => {
    return (dispatch: any) => {
        dispatch({type: LIST_ACTIONS.REQUEST});
        axios.get('https://jsonplaceholder.typicode.com/todos').then((result) => {
            console.log(result);
            dispatch({type: LIST_ACTIONS.SUCCESS, payload: result.data});
        }).catch(() => {
            dispatch({type: LIST_ACTIONS.FAILURE, payload: 'Something went wrong'});
        });
    }  
}