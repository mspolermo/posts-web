import { IUser, UserAction, UserActionTypes, UserState } from "../../types/user"

const initialUser: IUser = {
    id: 0,
    name: '',
    username: '',
    email: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
      geo: {
        lat: '',
        lng: ''
      }
    },
    phone: '',
    website: '',
    company: {
      name: '',
      catchPhrase: '',
      bs: ''
    }
}
const initialState: UserState = {
    user: initialUser,
    loading: false,
    error: null
}

export const userReducer = (state = initialState, action: UserAction) : UserState => {
    switch (action.type) {
        case UserActionTypes.FETCH_USERS:
            return {...initialState, loading: true, error: null}
        case UserActionTypes.FETCH_USERS_SUCCESS:
            return {loading: false, error: null, user: action.payload}
        case UserActionTypes.FETCH_USERS_ERROR:
            return {...initialState, loading: false, error: action.payload}
        default:
            return state
    }

}