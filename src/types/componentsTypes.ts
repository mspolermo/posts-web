import { RefObject } from "react";
import { IComment } from "./comments";
import { IPost } from "./posts";

export type UserPageParams = {
    id: string
}
export interface PostsListProps {
    typeOfSorting?: string;
    searchQuerry? : string;
    setTypeOfSorting? : (type: string) => void;
    userId?: number
}
export interface PostProps {
    post: IPost
}
export interface CommentsListProps {
    postId: number
}
export interface CommentProps {
    comment: IComment
}
export interface UserInfoProps {
    userId: string;
    hiddenBlock?: RefObject<HTMLDivElement>
}