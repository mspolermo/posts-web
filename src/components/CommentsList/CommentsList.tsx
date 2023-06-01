import React, { FC, useEffect, useState } from "react";
import './CommentsList.scss'
import Comment from "../Comment/Comment";
import { useActions } from "../../hooks/useAction";
import { useTypedSelector } from "../../hooks/useTypedSelector";

interface CommentsListProps {
    postId: number
}

const CommentsList:FC<CommentsListProps> = ({postId}) => {
    const {fetchComments} = useActions();
    const {comments, error} = useTypedSelector(state => state.comments);
    
    useEffect( () => {
        fetchComments()
    }, [])

    return (
        <div className="commentsList">
            {(error)

                ?
                <p>{error}</p>

                :
                <div className="commentsList__body">
                    {comments.filter(comment => comment.postId == postId).map(
                        (comment) => 
                            <Comment key={comment.id} comment={comment}/>
                    )}
                </div>

            }
        </div>
    );
};

export default CommentsList
