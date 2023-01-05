export interface IList {
    loading: boolean,
    data: any[] | null,
    error: string | null
}

export const InitialListState: IList= {
    data: null,
    loading: false,
    error: null
}