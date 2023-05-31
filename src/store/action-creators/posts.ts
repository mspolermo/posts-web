import { Dispatch } from "redux";
import axios from "axios";
import type {} from 'redux-thunk/extend-redux';
import { PostsAction, PostsActionTypes } from "../../types/posts";

export const fetchPosts = (page = 1, limit = 10) => {
    return async (dispatch: Dispatch<PostsAction>) => {
        try {

            dispatch({type: PostsActionTypes.FETCH_POSTS});
            const count = await axios.get('https://jsonplaceholder.typicode.com/posts')
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                params: {_page: page, _limit: limit}
            });
            setTimeout(() => {
                dispatch({type: PostsActionTypes.FETCH_POSTS_SUCCESS, payload: response.data, counter:count.data.length}); 
            }, 500);
            
        } catch(e) {

            dispatch({
                type: PostsActionTypes.FETCH_POSTS_ERROR, 
                payload: 'Произошла ошибка при загрузке постов'
            });

        };
    };
};

export function setPostsPage(page: number): PostsAction {
    return {type: PostsActionTypes.SET_POSTS_PAGE, payload: page}
}