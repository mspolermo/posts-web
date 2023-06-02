import React, { FC, useState } from "react";
import './Comment.scss';
import Toast from 'react-bootstrap/Toast';
import { CommentProps } from "../../types/componentsTypes";

const Comment:FC<CommentProps> = ({comment}) => {

    const [showA, setShowA] = useState(true);
    const toggleShowA = () => setShowA(!showA);

    return(
        <div className="comment">
            <Toast show={showA} onClose={toggleShowA} className="comment__body">
                <Toast.Header>
                    <strong className="me-auto">{comment.email}</strong>
                    <small>{comment.postId} mins ago</small>
                </Toast.Header>
                <Toast.Body>{comment.body}</Toast.Body>
            </Toast>
        </div>
    );
};

export default Comment;