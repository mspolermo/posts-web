import React, { FC, useEffect } from "react";
import Alert from 'react-bootstrap/Alert';
import './CommentsList.scss';
import { CommentsListProps } from "../../types/componentsTypes";

import Comment from "../Comment/Comment";
import { useActions } from "../../hooks/useAction";
import { useTypedSelector } from "../../hooks/useTypedSelector";

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
                <Alert variant={'danger'}>{error}</Alert>

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
