export interface UserState {
    users: any[];
    loading: boolean;
    error: null | string;
}
export enum UserActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}
export interface FecthUserAction {
    type: UserActionTypes.FETCH_USERS;
}
export interface FecthUserSuccessAction {
    type: UserActionTypes.FETCH_USERS_SUCCESS;
    payload: any[];
}
export interface FecthUserErrorAction {
    type: UserActionTypes.FETCH_USERS_ERROR;
    payload: string
}
export type UserAction = FecthUserAction | FecthUserErrorAction | FecthUserSuccessAction;
