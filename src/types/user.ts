export interface IUser {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
      street: string,
      suite: string,
      city: string,
      zipcode: string,
      geo: {
        lat: string,
        lng: string
      }
    },
    phone: string,
    website: string,
    company: {
      name: string,
      catchPhrase: string,
      bs: string
    }
}

export interface UserState {
    users: IUser[];
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
    payload: IUser[];
}
export interface FecthUserErrorAction {
    type: UserActionTypes.FETCH_USERS_ERROR;
    payload: string
}
export type UserAction = FecthUserAction | FecthUserErrorAction | FecthUserSuccessAction;
