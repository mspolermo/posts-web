export interface IComment {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}
export interface CommentsState {
    comments: IComment[];
    loading: boolean;
    error: null | string;
}
export enum CommentsActionTypes {
    FETCH_COMMENTS = 'FETCH_COMMENTS',
    FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS',
    FETCH_COMMENTS_ERROR = 'FETCH_COMMENTS_ERROR'
}

interface FetchCommentsAction {
    type: CommentsActionTypes.FETCH_COMMENTS;
}
interface FetchCommentsSuccessAction {
    type: CommentsActionTypes.FETCH_COMMENTS_SUCCESS;
    payload: IComment[];
}
interface FetchCommentsErrorAction {
    type: CommentsActionTypes.FETCH_COMMENTS_ERROR;
    payload: string;
}
export type CommentsAction = 
    FetchCommentsAction 
    | FetchCommentsErrorAction 
    | FetchCommentsSuccessAction;