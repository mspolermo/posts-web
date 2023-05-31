import { Dispatch } from "redux";
import axios from "axios";
import type {} from 'redux-thunk/extend-redux';
import { CommentsAction, CommentsActionTypes } from "../../types/comments";

export const fetchComments = (page = 1, limit = 10) => {
    return async (dispatch: Dispatch<CommentsAction>) => {
        try {

            dispatch({type: CommentsActionTypes.FETCH_COMMENTS});
            const response = await axios.get('https://jsonplaceholder.typicode.com/comments',);
            setTimeout(() => {
                dispatch({type: CommentsActionTypes.FETCH_COMMENTS_SUCCESS, payload: response.data}); 
            }, 500);
            
        } catch(e) {

            dispatch({
                type: CommentsActionTypes.FETCH_COMMENTS_ERROR, 
                payload: 'Произошла ошибка при загрузке постов'
            });

        };
    };
};