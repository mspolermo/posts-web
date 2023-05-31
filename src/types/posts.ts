export interface IPost {
    userId: number,
    id: number,
    title: string,
    body: string
}

export interface PostsState {
    posts: IPost[];
    loading: boolean;
    error: null | string;
    page: number;
    limit: number;
    counter: number;
}
export enum PostsActionTypes {
    FETCH_POSTS = 'FETCH_POSTS',
    FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS',
    FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR',
    SET_POSTS_PAGE = 'SET_POSTS_PAGE'
}

interface FetchPostsAction {
    type: PostsActionTypes.FETCH_POSTS;
}
interface FetchPostsSuccessAction {
    type: PostsActionTypes.FETCH_POSTS_SUCCESS;
    payload: IPost[];
    counter: number;
}
interface FetchPostsErrorAction {
    type: PostsActionTypes.FETCH_POSTS_ERROR;
    payload: string;
}
interface SetPostsPage {
    type: PostsActionTypes.SET_POSTS_PAGE;
    payload: number;
}
export type PostsAction = 
    FetchPostsAction 
    | FetchPostsErrorAction 
    | FetchPostsSuccessAction 
    | SetPostsPage;