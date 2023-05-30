export interface CommentsState {
    comments: any[];
    loading: boolean;
    error: null | string;
    page: number;
    limit: number;
}
export enum CommentsActionTypes {
    FETCH_COMMENTS = 'FETCH_COMMENTS',
    FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS',
    FETCH_COMMENTS_ERROR = 'FETCH_COMMENTS_ERROR',
    SET_COMMENTS_PAGE = 'SET_COMMENTS_PAGE'
}

interface FetchCommentsAction {
    type: CommentsActionTypes.FETCH_COMMENTS;
}
interface FetchCommentsSuccessAction {
    type: CommentsActionTypes.FETCH_COMMENTS_SUCCESS;
    payload: any[];
}
interface FetchCommentsErrorAction {
    type: CommentsActionTypes.FETCH_COMMENTS_ERROR;
    payload: string;
}
interface SetCommentsPage {
    type: CommentsActionTypes.SET_COMMENTS_PAGE;
    payload: number;
}
export type CommentsAction = 
    FetchCommentsAction 
    | FetchCommentsErrorAction 
    | FetchCommentsSuccessAction 
    | SetCommentsPage;