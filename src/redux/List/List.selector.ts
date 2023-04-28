import { RootStateType } from "../../store/store";

export const getListReducerState = (state: RootStateType) => state.listReducer as any;

export const listReducerLoadingState = (state: RootStateType) => state.listReducer.loading as boolean;

export const listReducerDataState = (state: RootStateType) => state.listReducer.data as any[] | null;

export const listReducerErrorState = (state: RootStateType) => state.listReducer.error as string;