import { Dispatch } from "redux";
import { UserAction, UserActionTypes } from "../../types/user";
import axios from "axios";
import type {} from 'redux-thunk/extend-redux';

export const fetchUsers = (id:string) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {

            dispatch({type: UserActionTypes.FETCH_USERS});
            const response = await axios.get(
                `https://jsonplaceholder.typicode.com/users?id=${id}`
            );
            setTimeout(() => {
                dispatch({type: UserActionTypes.FETCH_USERS_SUCCESS, payload: response.data[0]})    
            }, 500);
            
        } catch(e) {

            dispatch({
                type: UserActionTypes.FETCH_USERS_ERROR, 
                payload: 'Произошла ошибка при загрузке пользователя'
            });

        };
    };
};