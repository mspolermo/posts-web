import { stat } from "fs";
import { PostsAction, PostsActionTypes, PostsState } from "../../types/posts";

const initialState: PostsState = {
    posts: [],
    loading: false,
    error: null,
    page: 1,
    limit: 10,
    counter: 0
}


export const postsReducer = (state = initialState, action: PostsAction):PostsState => {
    switch (action.type) {
        case PostsActionTypes.FETCH_POSTS:
            return {...state, loading: true};
        case PostsActionTypes.FETCH_POSTS_SUCCESS:
            return {...state, loading: false, posts: action.payload, counter: action.counter};
        case PostsActionTypes.FETCH_POSTS_ERROR:
            return {...state, loading: false, error: action.payload};
        case PostsActionTypes.SET_POSTS_PAGE:
            return {...state, page: action.payload};
        default:
            return state;
    }
}