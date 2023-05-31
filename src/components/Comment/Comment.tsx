import React, { FC } from "react";
import './Comment.scss'
import { IComment } from "../../types/comments";

interface CommentProps {
    comment: IComment
}
const Comment:FC<CommentProps> = ({comment}) => {
    return(
        <div>{comment.postId} - {comment.body}</div>
    )
}

export default Comment;